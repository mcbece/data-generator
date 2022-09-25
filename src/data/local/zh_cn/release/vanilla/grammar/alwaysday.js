export default [
    {
        command: {
            name: "/^(\\/)?(alwaysday|daylock)$/",
            info: "锁定或解锁日夜循环"
        }
    },
    {
        grammar: "[锁定：布尔值]",
        info: [
            {
                length: 1,
                note: "指定是否锁定昼夜更替",
                list: "boolean"
            }
        ]
    }
]
