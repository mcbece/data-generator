// import minimist from "minimist"
import { Generator, perpareData } from "./src/index.js"
import { getDirname } from "./src/lib/util.js"
import logger from "./src/lib/logger.js"

const __dirname = getDirname(import.meta)

const option = {
    list: {
        caidlist: true,
        idlistweb: false
    }
}

perpareData(option).then(data => {
    
    const generator = new Generator(data, __dirname + "/dist")
    generator.init()
        .initLang("zh_cn")
        .generate()
    
}).catch(err => logger.errorText(err))
