export default [
    {
        command: {
            name: "/^(\\/)?(fog)$/",
            info: "管理玩家的距离模糊与体积雾配置"
        }
    },
    
    // TODO: translate
    // 因为wiki没有该部分内容，此处翻译参考 ProjectXero 大佬的命令助手
    
    {
        grammar: "<目标：目标> push <迷雾 ID：字符串> <userProvidedId：字符串>",
        info: [
            {
                length: 1,
                note: "指定玩家",
                list: "selector"
            },
            {
                length: 2,
                note: "加入配置",
                list: "commands.fog.model"
            },
            {
                length: 3,
                note: "指定要加入配制的迷雾 ID",
                list: "fog"
            },
            {
                length: 4,
                note: "指定自定义 ID",
                list: "commands.fog.user_provided_id"
            }
            ],
        control: [
            {
                length: 2,
                rule: "/^push$/"
            }
        ]
    },
    {
        grammar: "<目标：目标> <mode：delete> <userProvidedId：字符串>",
        info: [
            {
                length: 1,
                note: "指定玩家",
                list: "selector"
            },
            {
                length: 2,
                note: "指定模式",
                list: "commands.fog.model"
            },
            {
                length: 3,
                note: "指定自定义 ID",
                list: "commands.fog.user_provided_id"
            }
            ],
        control: [
            {
                length: 2,
                rule: "!/^push$/"
            }
        ]
    }
]
