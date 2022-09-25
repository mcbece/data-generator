export default [
    {
        command: {
            name: "/^(\\/)?(effect)$/",
            info: "管理玩家及其他实体上的状态效果"
        }
    },
    {
        grammar: "<玩家：目标> <效果：效果> [秒数：整数] [强度：整数] [隐藏粒子：布尔值]",
        info: [
            {
                length: 1,
                note: "指定要被给予或移除效果的目标",
                list: "selector"
            },
            {
                length: 2,
                note: "指定给予的效果",
                list: "effect; commands.effect.clear"
            },
            {
                length: 3,
                note: "指定以秒（部分为游戏刻）为单位指定效果时长",
                list: "commands.effect.seconds"
            },
            {
                length: 4,
                note: "指定效果的额外等级",
                list: "commands.effect.intensity"
            },
            {
                length: 5,
                note: "指定是否隐藏状态效果的粒子",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 2,
                rule: "!/^clear$/"
            }
        ]
    },
    {
        grammar: "<玩家：目标> clear",
        info: [
            {
                length: 1,
                note: "指定要被给予或移除效果的目标",
                list: "selector"
            },
            {
                length: 2,
                note: "移除所有效果",
                list: "effect; commands.effect.clear"
            }
            ],
        control: [
            {
                length: 2,
                rule: "/^clear$/"
            }
        ]
    }
]
