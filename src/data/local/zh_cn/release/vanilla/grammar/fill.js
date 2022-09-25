export default [
    {
        command: {
            name: "/^(\\/)?(fill)$/",
            info: "用特定方块填充一个区域的全部或部分"
        }
    },
    {
        grammar: "<开始：x y z> <结束：x y z> <方块：方块> [数据：整数] [填充模式：模式]",
        info: [
            {
                length: 1,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 2,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 3,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 4,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 5,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 6,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 7,
                note: "指定用于填充该区域的方块",
                list: "block"
            },
            {
                length: 8,
                note: "指定用于填充方块的方块数据",
                list: "block.data"
            },
            {
                length: 9,
                note: "指定填充模式",
                list: "commands.fill.model"
            }
        ],
        control: [
            {
                length: 8,
                rule: "/^[0-9]/"
            },
            {
                length: 9,
                rule: "!/^replace$/"
            }
        ]
    },
    {
        grammar: "<开始：x y z> <结束：x y z> <方块：方块> [方块状态：方块状态] [填充模式：模式]",
        info: [
            {
                length: 1,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 2,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 3,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 4,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 5,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 6,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 7,
                note: "指定用于填充该区域的方块",
                list: "block"
            },
            {
                length: 8,
                note: "指定用于填充方块的方块状态",
                list: "block.state"
            },
            {
                length: 9,
                note: "指定填充模式",
                list: "commands.fill.model"
            }
        ],
        control: [
            {
                length: 8,
                rule: "!/^[0-9]/"
            },
            {
                length: 9,
                rule: "!/^replace$/"
            }
        ]
    },
    {
        grammar: "<开始：x y z> <结束：x y z> <方块：方块> <数据：整数> replace [替换方块名：方块] [替换方块数据：整数]",
        info: [
            {
                length: 1,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 2,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 3,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 4,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 5,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 6,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 7,
                note: "指定用于填充该区域的方块",
                list: "block"
            },
            {
                length: 8,
                note: "指定用于填充方块的方块数据",
                list: "block.data"
            },
            {
                length: 9,
                note: "全部填充，无掉落物",
                list: "commands.fill.model"
            },
            {
                length: 10,
                note: "指定要被替换的方块",
                list: "block"
            },
            {
                length: 11,
                note: "指定要被替换方块的方块数据",
                list: "block.data"
            }
        ],
        control: [
            {
                length: 8,
                rule: "/^[0-9]/"
            },
            {
                length: 9,
                rule: "/^replace$/"
            }
        ]
    },
    {
        grammar: "<开始：x y z> <结束：x y z> <方块：方块> <方块状态：方块状态> replace [替换方块名：方块] [替换方块数据：整数]",
        info: [
            {
                length: 1,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 2,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 3,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 4,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 5,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 6,
                note: "定义填充区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 7,
                note: "指定用于填充该区域的方块",
                list: "block"
            },
            {
                length: 8,
                note: "指定用于填充方块的方块状态",
                list: "block.state"
            },
            {
                length: 9,
                note: "全部填充，无掉落物",
                list: "commands.fill.model"
            },
            {
                length: 10,
                note: "指定要被替换的方块",
                list: "block"
            },
            {
                length: 11,
                note: "指定要被替换方块的方块数据",
                list: "block.data"
            }
        ],
        control: [
            {
                length: 8,
                rule: "!/^[0-9]/"
            },
            {
                length: 9,
                rule: "/^replace$/"
            }
        ]
    }
]