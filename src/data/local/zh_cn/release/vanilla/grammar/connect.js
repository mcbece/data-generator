export default [
    {
        command: {
            name: "/^(\\/)?(connect|wsserver)$/",
            info: "连接到指定的WebSocket服务器或断开当前的连接"
        }
    },
    {
        grammar: "<服务器URI：字符串>",
        info: [
            {
                length: 1,
                note: "指向WebSocket服务器的URI",
                list: "commands.wsserver.out; commands.wsserver.uri"
            }
        ],
        control: [
            {
                length: 1,
                rule: "!/^out$/"
            }
        ]
    },
    {
        grammar: "out",
        info: [
            {
                length: 1,
                note: "断开当前的连接",
                list: "commands.wsserver.out; commands.wsserver.uri"
            }
        ],
        control: [
            {
                length: 1,
                rule: "/^out$/"
            }
        ]
    }
]
