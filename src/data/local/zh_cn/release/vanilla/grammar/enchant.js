export default [
    {
        command: {
            name: "/^(\\/)?(enchant)$/",
            info: "为一位玩家手持的物品添加魔咒"
        }
    },
    {
        grammar: "<玩家：目标> <魔咒：魔咒> [等级：整数]",
        info: [
            {
                length: 1,
                note: "指定目标玩家",
                list: "selector"
            },
            {
                length: 2,
                note: "指定添加至玩家手持物品的魔咒",
                list: "enchantment"
            },
            {
                length: 3,
                note: "指定魔咒等级",
                list: "enchantment.level"
            }
        ],
        control: [
            {
                length: 2,
                rule: "/^[a-z]/"
            }
        ]
    },
    {
        grammar: "<玩家：目标> <魔咒：整数> [等级：整数]",
        info: [
            {
                length: 1,
                note: "指定目标玩家",
                list: "selector"
            },
            {
                length: 2,
                note: "指定添加至玩家手持物品的魔咒",
                list: "enchantment"
            },
            {
                length: 3,
                note: "指定魔咒等级",
                list: "enchantment.level"
            }
        ],
        control: [
            {
                length: 2,
                rule: "/^[0-9]/"
            }
        ]
    }
]
