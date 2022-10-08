import fs from "fs"
import { resolve } from "path"
import DATA from "../data/data.js"
import {
    getDirname,
    each,
    createIndex,
    importDefault,
    
} from "../lib/util.js"

const __dirname = getDirname(import.meta)

const path = resolve(__dirname, "../data/local")

function initLocal() {
    each(DATA.LANGS, lang => {
        each(DATA.VERSIONS, version => {
            each(DATA.BRANCHES, branch => {
                const _path = path + `/${lang}/${version}/${branch}`
                createIndex(_path + "/list", {
                    suffixToRead: ".json.js"
                })
                createIndex(_path + "/grammar", {
                    exportType: "array"
                })
                createIndex(_path)
            })
            createIndex(path + `/${lang}/${version}`)
        })
        createIndex(path + `/${lang}`)
    })
    createIndex(path)
}

export {
    path as localPath,
    initLocal
}
