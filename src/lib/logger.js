export default {
    log(namespace, text, ...keywords) {
        console.log("\x1b[1m%s\x1b[0m", `===== Log =====\n${namespace}:${keywords.join(".")}: ${text}`)
    },
    error(namespace, text, ...keywords) {
        console.log("\x1b[31m%s\x1b[0m", `===== Error =====\n${namespace}:${keywords.join(".")}: ${text}`)
    },
    info(namespace, text, ...keywords) {
        console.log("\x1b[2m%s\x1b[0m", `===== Info =====\n${namespace}:${keywords.join(".")}: ${text}`)
    },
    warn(namespace, text, ...keywords) {
        console.log("\x1b[33m%s\x1b[0m", `===== Warn =====\n${namespace}:${keywords.join(".")}: ${text}`)
    },
    errorText(err) {
        console.log("\x1b[31m%s\x1b[0m", `=== Error ===`)
        console.error(err)
        console.log("\x1b[31m%s\x1b[0m", `=== Error:end ===`)
    }
}
