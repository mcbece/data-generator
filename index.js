// import minimist from "minimist"
import { Generator, initData } from "./src/index.js"
import { getDirname } from "./src/lib/util.js"
import logger from "./src/lib/logger.js"

const __dirname = getDirname(import.meta)

const option = {
    list: {
        caidlist: false,
        idlistweb: false
    }
}

initData(option).then(data => {
    
    const generator = new Generator(data, __dirname + "/dist")
    generator.init()
        .initLang("zh_cn")
        .generate()
    
}).catch(err => logger.errorText(err))
