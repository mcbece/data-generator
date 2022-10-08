export const LANGS = [
    // 不打算做多语言，但保留一定的接口以供扩展
    "zh_cn"
]

export const VERSIONS = [
    "release",
    // 暂不对网易代理的中国版进行支持
    // "netease_dev",
    // 精力有限，本地数据暂不支持 beta 版本，第三方数据也就干脆不获取对应的数据了
    // "beta"

]

export const BRANCHES = [
    "vanilla",
    // 精力有限，本地数据暂不支持 education 和 experiment 分支，第三方数据也就干脆不获取对应的数据了
    // "education",
    // "experiment"
]

export default {
    LANGS,
    VERSIONS,
    BRANCHES
}
