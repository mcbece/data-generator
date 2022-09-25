export default [
    {
        command: {
            name: "/^(\\/)?(locate)$/",
            info: "在聊天框中为命令执行者显示给定类型结构的最近坐标和距离"
        }
    },
    {
        // grammar: "<特性：字符串>",  
        // wiki上的蜜汁翻译 （
        grammar: "<结构名称：字符串>",
        info: [
            {
                length: 1,
                note: "指定要定位的结构",
                list: "location"
            }
        ]
    }
]
