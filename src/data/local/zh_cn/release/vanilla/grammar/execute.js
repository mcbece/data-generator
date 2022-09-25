export default [
    {
        command: {
            name: "/^(\\/)?(execute)$/",
            info: "用于执行另一个命令，但是允许改变执行者、命令执行的位置和角度，添加限制执行条件"
        }
    },
    {
        grammar: "<执行源：目标> <执行坐标：x y z> <命令：命令>",
        info: [
            {
                length: 1,
                note: "指定目标命令执行者",
                list: "selector"
            },
            {
                length: 2,
                note: "指定命令运行的位置",
                list: "coordinate.x"
            },
            {
                length: 3,
                note: "指定命令运行的位置",
                list: "coordinate.y"
            },
            {
                length: 4,
                note: "指定命令运行的位置",
                list: "coordinate.z"
            },
            {
                length: 5,
                note: "指定要运行的命令",
                list: "command<-{input:{replace:'',text:'{This: name} '}}; commands.execute.detect"
            }
        ],
        control: [
            {
                length: 5,
                rule: "!/^detect$/"
            }
        ]
    },
    {
        grammar: "<执行源：目标> <执行坐标：x y z> detect <探测坐标：x y z> <方块：方块> <方块数据：整数> <命令：命令>",
        info: [
            {
                length: 1,
                note: "指定目标命令执行者",
                list: "selector"
            },
            {
                length: 2,
                note: "指定命令运行的位置",
                list: "coordinate.x"
            },
            {
                length: 3,
                note: "指定命令运行的位置",
                list: "coordinate.y"
            },
            {
                length: 4,
                note: "指定命令运行的位置",
                list: "coordinate.z"
            },
            {
                length: 5,
                note: "检测方块",
                list: "command<-{input:{replace:'',text:'{This: name} '}}; commands.execute.detect"
            },
            {
                length: 6,
                note: "指定要检测方块的位置",
                list: "coordinate"
            },
            {
                length: 7,
                note: "指定要检测的方块ID",
                list: "block"
            },
            {
                length: 8,
                note: "指定要检测的方块的数据值",
                list: "block.data"
            },
            {
                length: 9,
                note: "指定要运行的命令",
                list: "command<-{input:{replace:'',text:'{This: name} '}}"
            }
        ],
        control: [
            {
                length: 5,
                rule: "/^detect$/"
            }
        ]
    }
]
