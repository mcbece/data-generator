export default [
    {
        command: {
            name: "/^(\\/)?(clearspawnpoint)$/",
            info: "清除世界中设置的重生点"
        }
    },
    {
        grammar: "[玩家：目标]",
        info: [
            {
                length: 1,
                note: "指定要被删除出生点的玩家",
                list: "selector"
            }
        ]
    }
]
