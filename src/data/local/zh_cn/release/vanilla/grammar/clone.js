export default [
    {
        command: {
            name: "/^(\\/)?(clone)$/",
            info: "在指定区域之间复制方块结构"
        }
    },
    {
        grammar: "<开始: x y z> <结束: x y z> <目标: x y z> [遮罩模式：遮罩模式] [复制模式：复制模式]",
        info: [
            {
                length: 1,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 2,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 3,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 4,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 5,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 6,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 7,
                note: "定义目标区域的西北方向较低（即在各轴上坐标值最小）的点的坐标",
                list: "coordinate.x"
            },
            {
                length: 8,
                note: "定义目标区域的西北方向较低（即在各轴上坐标值最小）的点的坐标",
                list: "coordinate.y"
            },
            {
                length: 9,
                note: "定义目标区域的西北方向较低（即在各轴上坐标值最小）的点的坐标",
                list: "coordinate.z"
            },
            {
                length: 10,
                note: "指定是否过滤被复制方块",
                list: "commands.clone.mask_mode"
            },
            {
                length: 11,
                note: "指定对源区域的操作",
                list: "commands.clone.clone_mode"
            }
        ],
        control: [
            {
                length: 10,
                rule: "!/^filtered$/"
            }
        ]
    },
    {
        grammar: "<开始: x y z> <结束: x y z> <目标: x y z> filtered <复制模式：复制模式> [方块名：方块] [方块数据：整数]",
        info: [
            {
                length: 1,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 2,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 3,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 4,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.x"
            },
            {
                length: 5,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.y"
            },
            {
                length: 6,
                note: "定义源区域的两组对角方块坐标",
                list: "coordinate.z"
            },
            {
                length: 7,
                note: "定义目标区域的西北方向较低（即在各轴上坐标值最小）的点的坐标",
                list: "coordinate.x"
            },
            {
                length: 8,
                note: "定义目标区域的西北方向较低（即在各轴上坐标值最小）的点的坐标",
                list: "coordinate.y"
            },
            {
                length: 9,
                note: "定义目标区域的西北方向较低（即在各轴上坐标值最小）的点的坐标",
                list: "coordinate.z"
            },
            {
                length: 10,
                note: "仅复制指定方块",
                list: "commands.clone.mask_mode"
            },
            {
                length: 11,
                note: "指定对源区域的操作",
                list: "commands.clone.clone_mode"
            },
            {
                length: 12,
                note: "指定要复制的方块ID",
                list: "block"
            },
            {
                length: 13,
                note: "指定复制时需要符合的方块数据值",
                list: "block.data"
            }
        ],
        control: [
            {
                length: 10,
                rule: "/^filtered$/"
            }
        ]
    }
]