export default [
    {
        command: {
            name: "/^(\\/)?(deop)$/",
            info: "撤销玩家的管理员身份"
        }
    },
    {
        grammar: "<玩家：目标>",
        info: [
            {
                length: 1,
                note: "指定要从管理员列表中移除的玩家",
                list: "selector"
            }
        ]
    }
]
