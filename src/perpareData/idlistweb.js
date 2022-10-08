import fs from "fs"
import { resolve } from "path"
import DATA from "../data/data.js"
import logger from "../lib/logger.js"
import {
    getDirname,
    asyncEach,
    got,
    createIndex
} from "../lib/util.js"

const __dirname = getDirname(import.meta)

const path = resolve(__dirname, "../data/idlistweb")
const url = "https://ca.projectxero.top/idlist"

async function initIdlistweb() {
    fs.rmSync(path, {
        recursive: true,
        force: true
    })
    fs.mkdirSync(path)
    await asyncEach(DATA.LANGS, async lang => {
        fs.mkdirSync(path + `/${lang}`)
        await asyncEach(DATA.VERSIONS, async version => {
            fs.mkdirSync(path + `/${lang}/${version}`)
            if (lang === "zh_cn") {
                const indexBranches = []
                await asyncEach(DATA.BRANCHES, async branch => {
                    try {
                        const { data } = await got(`${url}/data/${version}/${branch}.json`)
                        indexBranches.push(branch)
                        
                        logger.info("perpareData", "OK", "idlistweb", lang, version, branch)
                        
                        fs.writeFileSync(path + `/${lang}/${version}/${branch}.json.js`, `export default ${JSON.stringify(data.enums, null, 4)}`)
                    } catch (err) {
                        logger.errorText(err)
                    }
                })
            } else {
                // ...
            }
            createIndex(path + `/${lang}/${version}`, {
                suffixToRead: ".json.js",
                dataVersion: (await got(`${url}/data/index.json`)).data
                    .find(item => item.id === version).dataVersion
            })
        })
        createIndex(path + `/${lang}`)
    })
    createIndex(path)
}

export {
    path as idlistwebPath,
    initIdlistweb
}
