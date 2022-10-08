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
                    
                    const dataPackage = readJson(path + `/_caidlist/version/${version}/package/data.json`)
                    
                    each(DATA.BRANCHES, branch => {
                        fs.mkdirSync(path + `/${lang}/${version}/${branch}`)
                        
                        const dataOutput = readJson(path + `/_caidlist/output/clib/${version}/${branch}.json`)
                        fs.writeFileSync(path + `/${lang}/${version}/${branch}/common.json.js`, `export default ${JSON.stringify(dataOutput.enums, null, 4)}`)
                        
                        const dataAutocompletion = readJson(path + `/_caidlist/version/${version}/autocompletion/${branch}.json`)
                        fs.writeFileSync(path + `/${lang}/${version}/${branch}/autocompletion.json.js`, `export default ${JSON.stringify(dataAutocompletion, null, 4)}`)
                        
                        if (dataPackage[branch]) fs.writeFileSync(path + `/${lang}/${version}/${branch}/data.json.js`, `export default ${JSON.stringify(dataPackage[branch], null, 4)}`)
                        
                        createIndex(path + `/${lang}/${version}/${branch}`, {
                            suffixToRead: ".json.js"
                        })
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
                
                logger.info("perpareData", "OK", "caidlist", lang)
                
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
