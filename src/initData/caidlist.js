import fs from "fs"
import { resolve } from "path"
import DATA from "../data/data.js"
import logger from "../lib/logger.js"
import {
    getDirname,
    each,
    asyncEach,
    createIndex,
    downloadGitRepoAsync,
    readJson
} from "../lib/util.js"

const __dirname = getDirname(import.meta)

const path = resolve(__dirname, "../data/caidlist")
const repo = "XeroAlpha/caidlist"

async function initCaidlist() {
    fs.rmSync(path, {
        recursive: true,
        force: true
    })
    fs.mkdirSync(path)
    await asyncEach(DATA.LANGS, async lang => {
        fs.mkdirSync(path + `/${lang}`)
        fs.mkdirSync(path + "/_caidlist")
        if (lang === "zh_cn") {
            try {
                await downloadGitRepoAsync(repo, path + "/_caidlist")
                each(DATA.VERSIONS, version => {
                    fs.mkdirSync(path + `/${lang}/${version}`)
                    each(DATA.BRANCHES, branch => {
                        const dataOutput = readJson(path + `/_caidlist/output/clib/${version}/${branch}.json`)
                        fs.writeFileSync(path + `/${lang}/${version}/${branch}.json.js`, `export default ${JSON.stringify(dataOutput.enums, null, 4)}`)
                        const dataAutocompletion = readJson(path + `/_caidlist/version/${version}/autocompletion/${branch}.json`)
                        fs.writeFileSync(path + `/${lang}/${version}/${branch}_autocompletion.json.js`, `export default ${JSON.stringify(dataAutocompletion, null, 4)}`)
                    })
                    const data = readJson(path + `/_caidlist/version/${version}/package/data.json`)
                    each(data, (cont, branch) => {
                        if (DATA.BRANCHES.includes(branch)) fs.writeFileSync(path + `/${lang}/${version}/${branch}_data.json.js`, `export default ${JSON.stringify(cont, null, 4)}`)
                    })
                    const langData = readJson(path + `/_caidlist/version/${version}/package/lang.json`) // available: langData["zh_cn"]; langData["en_us"] 
                    fs.writeFileSync(path + `/${lang}/${version}/lang.json.js`, `export default ${JSON.stringify(langData[lang] || {}, null, 4)}`)
                    
                    createIndex(path + `/${lang}/${version}`, {
                        suffixToRead: ".json.js",
                        dataVersion: readJson(path + `/_caidlist/version/${version}/package/info.json`).packageVersion
                    })
                })
                fs.rmSync(path + "/_caidlist", {
                    recursive: true,
                    force: true
                })
                
                logger.info("got", "OK", "caidlist", lang)
                
            } catch (err) {
                logger.errorText(err)
            }
        } else {
            // ...
        }
        createIndex(path + `/${lang}`)
    
    })
    createIndex(path)
}

export {
    path as caidlistPath,
    initCaidlist
}
