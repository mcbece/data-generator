export default [
    {
        command: {
            name: "/^(\\/)?(changesetting)$/",
            info: "在基岩版专用服务器（BDS）上运行时更改设置"
        }
    },
    {
        grammar: "allow-cheats <值：布尔值>",
        info: [
            {
                length: 1,
                note: "是否允许作弊",
                list: "commands.changesetting.model"
            },
            {
                length: 2,
                note: "指定服务器是否允许作弊",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 1,
                rule: "/^allow-cheats$/"
            }
        ]
    },
    {
        grammar: "difficulty <难度：难度>",
        info: [
            {
                length: 1,
                note: "设置难度",
                list: "commands.changesetting.model"
            },
            {
                length: 2,
                note: "指定要设置的难度",
                list: "difficulty"
            }
            ],
        control: [
            {
                length: 1,
                rule: "/^difficulty$/"
            },
            {
                length: 2,
                rule: "!/^[0-9]/"
            }
        ]
    },
    {
        grammar: "difficulty <难度：整数>",
        info: [
            {
                length: 1,
                note: "设置难度",
                list: "commands.changesetting.model"
            },
            {
                length: 2,
                note: "指定要设置的难度",
                list: "difficulty"
            }
        ],
        control: [
            {
                length: 1,
                rule: "/^difficulty$/"
            },
            {
                length: 2,
                rule: "/^[0-9]/"
            }
        ]
    }
]
