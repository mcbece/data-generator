import fs from "fs"
import axios from "axios"
import nodePath from "path"
import { fileURLToPath } from "url"
import downloadGitRepo from "download-git-repo"
import commentJson from "comment-json"
import logger from "./logger.js"
import deepCopy from "fast-copy"

export { deepCopy }

export function each(target, callbackfn, thisArg) {
    if (Array.isArray(target)) target.forEach(callbackfn, thisArg)
    else if (target && target[Symbol.iterator]) for (let item of target) callbackfn.call(thisArg, item, target)
    else if (typeof target === "object") each(Object.keys(target), (key, i) => callbackfn.call(thisArg, target[key], key, i, target))
}

export async function asyncEach(target, asyncfn, thisArg) {
    if (Array.isArray(target)) for (let i = 0; i < target.length; i++) await asyncfn.call(thisArg, target[i], i, target)
    else if (target && target[Symbol.iterator]) for (let item of target) await asyncfn.call(thisArg, item, target)
    else if (typeof target === "object") await asyncEach(Object.keys(target), async (key, i) => await asyncfn.call(thisArg, target[key], key, i, target))
}

export function objectGet(obj, key, { _return, handler = s => s, strict = false } = {}) {
    if (objectHas(obj, key)) return obj[key]
    else try {
        const output = eval(`obj.${handler(key)}`)
        if (!strict && output === undefined) return _return
        else return output
    } catch (err) {
        console.warn(`Could not get "${key}" in \`obj\`, returning \`_return\`.`, {obj, _return})
        return _return
    }
}

export function objectHas(obj, key) {
    if (key in obj && obj.hasOwnProperty(key)) return true
    else return false
}

export async function got(url) {
    try {
        return axios.get(url)
    } catch (err) {
        logger.errorText(err)
    }
}

export function readJson(path) {
    try {
        return commentJson.parse(fs.readFileSync(path).toString(), null, false)
    } catch (err) {
        logger.errorText(err)
    }
}

export const sleepAsync = ms => new Promise(resolve => setTimeout(resolve, ms))

export function createIndex(path, { suffixToRead = ".js", dataVersion, withDir = true, exportType = "object" } = {}) {
    fs.rmSync(path + "/index.js", {
        force: true
    })
    const files = fs.readdirSync(path, {
        withFileTypes: true
    }).filter(item => {
        return ( item.isFile() && item.name.endsWith(suffixToRead) ) || ( withDir && item.isDirectory() )
    })
    const names = files.map(({ name }) => name.replace(suffixToRead, ""))
    if (exportType === "object") {
        const index = names.map((name, i) => `import ${toCamelCase(name)} from "./${ files[i].isDirectory() ? name + "/index.js" : name + suffixToRead }"`)
        index.push(
            "",
            `export default {${ dataVersion ? `\n    "_version": "${dataVersion}",` : "" }`,
            names
                .map(name => `    "${name}": ${toCamelCase(name)}`)
                .join(",\n"),
            "}"
        )
        fs.writeFileSync(
            path + `/index.js`,
            index.join("\n")
        )
    } else if (exportType === "array") {
        const index = names.map((name, i) => `import item${i} from "./${ files[i].isDirectory() ? name + "/index.js" : name + suffixToRead }"`)
        index.push(
            "",
            "export default [",
            names
                .map((_, i) => `    item${i}`)
                .join(",\n"),
            `]`,
        )
        fs.writeFileSync(
            path + `/index.js`,
            index.join("\n")
        )
    }
}

export function toCamelCase(str) {
    return str.replace(/(\w)+(\.| |-|_)(\w)/g, (_, __, $1) => $1.toUpperCase())
}

export async function downloadGitRepoAsync(repository, destination, options, callback) {
    return new Promise((resolve, reject) => {
        downloadGitRepo(repository, destination, options, err => {
            err ? reject(err) : resolve()
        })
    })
}

export async function importDefault(url) {
    try {
        const data = await import(url)
        return data.default
    } catch (err) {
        throw err
    }
}

export function getFilename(importMeta) {
    return fileURLToPath(importMeta.url)
}

export function getDirname(importMeta) {
    return nodePath.dirname(getFilename(importMeta))
}
