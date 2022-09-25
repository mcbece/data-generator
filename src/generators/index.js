import fs from "fs"
import generateList from "./list.js"
import { each, createIndex } from "../lib/util.js"
import logger from "../lib/logger.js"
import { BRANCHES } from "../data/data.js"

export default class {
    constructor(data, dest) {
        this._data = data
        this._dest = dest
    }
    init() {
        fs.rmSync(this._dest, {
            recursive: true,
            force: true
        })
        fs.mkdirSync(this._dest)
        return this
    }
    initLang(lang) {
        this.lang = lang
        const dest = `${this._dest}/${lang}`
        fs.rmSync(dest, {
            recursive: true,
            force: true
        })
        fs.mkdirSync(dest)
        return this
    }
    generate(version = "release") {
        const dest = `${this._dest}/${this.lang}/${version}`
        fs.rmSync(dest, {
            recursive: true,
            force: true
        })
        fs.mkdirSync(dest)
        const data = {
            caidlist: this._data[this.lang].caidlist[version],
            idlistweb: this._data[this.lang].idlistweb[version],
            local: this._data[this.lang].local[version]
        }
        const env = {
            version,
            lang: this.lang,
            minecraftVersion: getMinecraftVersion(data)
        }
        generate(data, dest, env)
        return this
    }
}

function generate(_data, _dest, _env) {
    each(BRANCHES, branch => {
        const dest = `${_dest}/${branch}`
        fs.mkdirSync(dest)
        const data = {
            caidlist: {
                data: _data.caidlist[`${branch}_data`],
                lang: _data.caidlist.lang,
                common: _data.caidlist[branch],
                autocompletion: _data.caidlist[`${branch}_autocompletion`]
            },
            idlistweb: _data.idlistweb[branch],
            local: _data.local[branch]
        }
        const env = { ..._env, branch }
        
        generateList(data, dest, env)
        // generateGrammar; generateText
        
        
        
         createIndex(dest, {
            suffixToRead: ".json.js",
            dataVersion: env.minecraftVersion
         })
        
        logger.log("generator", "生成完成！", _env.lang, _env.version, branch)
    })
}

function getMinecraftVersion(data) {
    const caidlistVersion = data.caidlist._version
    const idlistwebVersion = data.idlistweb._version
    const localVersion = data.local._version
    if (caidlistVersion === idlistwebVersion) {
        if (localVersion !== caidlistVersion) {
            logger.warn("generator", `本地数据版本（${localVersion}）与 caidlist（${caidlistVersion}）不同步`)
        }
    } else {
        logger.warn("generator", `idlistweb 数据版本（${idlistwebVersion}）与 caidlist（${caidlistVersion}）不同步`)
    }
    return caidlistVersion
}
