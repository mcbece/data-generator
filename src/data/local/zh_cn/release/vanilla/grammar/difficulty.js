export default [
    {
        command: {
            name: "/^(\\/)?(difficulty)$/",
            info: "设定难度等级"
        }
    },
    {
        grammar: "<难度：难度>",
        info: [
            {
                length: 1,
                note: "指定要设置的难度",
                list: "difficulty"
            }
        ],
        control: [
            {
                length: 1,
                rule: "/^[a-z]/"
            }
        ]
    },
    {
        grammar: "<难度：整数>",
        info: [
            {
                length: 1,
                note: "指定要设置的难度",
                list: "difficulty"
            }
        ],
        control: [
            {
                length: 1,
                rule: "/^[0-9]/"
            }
        ]
    }
]
