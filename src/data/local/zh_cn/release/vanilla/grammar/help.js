export default [
    {
        command: {
            name: "/^(\\/)?(\\?|help)$/",
            info: "提供命令列表或单个命令的帮助信息"
        }
    },
    {
        grammar: "[页码：整数]",
        info: [
            {
                length: 1,
                note: "指定命令列表的页码",
                list: "commands.help.page_number"
            }
        ],
        control: [
            {
                length: 1,
                rule: "/^[0-9]/"
            }
        ]
    },
    {
        grammar: "<命令：字符串>",
        info: [
            {
                length: 1,
                note: "指定需要提供帮助信息的命令",
                list: "command<-{input:{replace:'',text:'{This: name} '}}"
            }
        ],
        control: [
            {
                length: 1,
                rule: "/^[a-z]/"
            }
        ]
    }
]
