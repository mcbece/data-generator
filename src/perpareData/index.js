import fs from "fs"
import { resolve } from "path"
import logger from "../lib/logger.js"
import {
    getDirname,
    each,
    importDefault
} from "../lib/util.js"

import { initCaidlist, caidlistPath } from "./caidlist.js"
import { initIdlistweb, idlistwebPath } from "./idlistweb.js"
import { initLocal, localPath } from "./local.js"

const __dirname = getDirname(import.meta)

const path = resolve(__dirname, "../data")

export default async function(option) {
    // get from `caidlist`
    if (option.list.caidlist) await initCaidlist()
    
    // get from `idlistweb`
    if (option.list.idlistweb) await initIdlistweb()
    
    // init local data
    initLocal()
    
    // return data
    const idlistwebData = await importDefault(idlistwebPath + "/index.js")
    const caidlistData = await importDefault(caidlistPath + "/index.js")
    const localData = await importDefault(localPath + "/index.js")
    const output = {}
    each(idlistwebData, (content, lang) => {
        if (output[lang]) output[lang].idlistweb = content
        else output[lang] = {
            idlistweb: content
        }
    })
    each(caidlistData, (content, lang) => {
        if (output[lang]) output[lang].caidlist = content
        else output[lang] = {
            caidlist: content
        }
    })
    each(localData, (content, lang) => {
        if (output[lang]) output[lang].local = content
        else output[lang] = {
            local: content
        }
    })
    
    fs.writeFileSync(path + "/all.json", JSON.stringify(output))
    
    return output
}
