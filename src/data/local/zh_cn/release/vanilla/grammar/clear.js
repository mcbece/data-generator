export default [
    {
        command: {
            name: "/^(\\/)?(clear)$/",
            info: "清除玩家物品栏的物品"
        }
    },
    {
        grammar: "[玩家：目标] [物品：物品] [物品数据：整数] [最大数量：整数]",
        info: [
            {
                length: 1,
                note: "指定要被清除物品的玩家",
                list: "selector"
            },
            {
                length: 2,
                note: "指定要被清除的物品ID",
                list: "item"
            },
            {
                length: 3,
                note: "指定要被清除物品的数据值",
                list: "item.data"
            },
            {
                length: 4,
                note: "指定要被清除物品的最大值",
                list: "commands.clear.max_count"
            }
        ]
    }
]
