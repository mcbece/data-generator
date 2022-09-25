export default [
    {
        command: {
            name: "/^(\\/)?ability$/",
            info: "赋予或剥夺玩家的能力"
        }
    },
    {
        grammar: "<玩家：目标> <能力：能力> <值：布尔值>",
        info: [
            {
                length: 1,
                note: "指定要赋予或剥夺能力的玩家",
                list: "selector"
            },
            {
                length: 2,
                note: "指定要操作的能力",
                list: "ability"
            },
            {
                length: 3,
                note: "指定此能力是否对玩家可用",
                list: "boolean"
            }
        ]
    }
]
