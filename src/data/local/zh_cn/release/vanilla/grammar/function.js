export default [
    {
        command: {
            name: "/^(\\/)?(function)$/",
            info: "运行行为包内的1个函数"
        }
    },
    {
        grammar: "<名称：路径>",
        info: [
            {
                length: 1,
                note: "指定要运行的函数的路径",
                list: "commands.function.path"
            }
        ]
    }
]