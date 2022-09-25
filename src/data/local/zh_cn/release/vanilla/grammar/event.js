export default [
    {
        command: {
            name: "/^(\\/)?(event)$/",
            info: "触发指定的实体事件"
        }
    },
    {
        grammar: "<目标：目标> <事件名称：字符串>",
        info: [
            {
                length: 1,
                note: "指定实体事件的作用对象",
                list: "selector"
            },
            {
                length: 2,
                note: "指定命令触发的实体事件",
                list: "mob_event"
            }
        ]
    }
]
