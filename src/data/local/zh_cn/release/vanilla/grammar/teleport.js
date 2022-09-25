export default [
    {
        command: {
            name: "/^(\\/)?(teleport|tp)$/",
            info: "传送实体（玩家、生物等）"
        }
    },
    {
        grammar: "<目的地：x y z> [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.x; selector"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean; rotation.y; commands.tp.facing"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isCoordinate"
            },
            {
                length: 2,
                rule: "!/^([-~.0-9]+|facing)$/"
            }
        ]
    },
    {
        grammar: "<目的地：x y z> [y旋转角度：角度] [x旋转角度：角度] [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.x; selector"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定实体传送后的旋转角度",
                list: "rotation.y"
            },
            {
                note: "指定实体传送后的旋转角度",
                list: "rotation.x"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isCoordinate"
            },
            {
                length: 4,
                rule: "/^[-~.0-9]+$/"
            }
        ]
    },
    {
        grammar: "<目的地：x y z> facing <指定朝向坐标：x y z> [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.x; selector"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定朝向",
                list: "commands.tp.facing"
            },
            {
                note: "指定实体传送后朝向的坐标",
                list: "coordinate.x; selector"
            },
            {
                note: "指定实体传送后朝向的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定实体传送后朝向的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isCoordinate"
            },
            {
                length: 4,
                rule: "/^facing$/"
            },
            {
                length: 5,
                rule: "!/^@/"
            }
        ]
    },
    {
        grammar: "<目的地：x y z> facing <指定朝向实体：目标> [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.x; selector"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定朝向",
                list: "commands.tp.facing"
            },
            {
                note: "指定实体传送后朝向的实体",
                list: "selector"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isCoordinate"
            },
            {
                length: 4,
                rule: "/^facing$/"
            },
            {
                length: 5,
                rule: "isSelector"
            }
        ]
    },
    {
        grammar: "<目的地：目标> [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送到的实体",
                list: "selector"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean; coordinate.x; selector"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isSelector"
            },
            {
                length: 2,
                rule: "!/(^@|^[-~^.0-9]+$)/g"
            }
        ]
    },
    {
        grammar: "<传送目标：目标> <目的地：目标> [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送的实体",
                list: "selector"
            },
            {
                note: "指定要被传送到的实体",
                list: "selector"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isSelector"
            },
            {
                length: 2,
                rule: "isSelector"
            }
        ]
    },
    {
        grammar: "<传送目标：目标> <目的地：x y z> [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送的实体",
                list: "selector"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.x"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean; rotation.y; commands.tp.facing"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isSelector"
            },
            {
                length: 2,
                rule: "isCoordinate"
            },
            {
                length: 5,
                rule: "!/^([-~.0-9]+|facing)$/"
            }
        ]
    },
    {
        grammar: "<传送目标：目标> <目的地：x y z> [y旋转角度：角度] [x旋转角度：角度] [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送的实体",
                list: "selector"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.x"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定实体传送后的旋转角度",
                list: "rotation.y"
            },
            {
                note: "指定实体传送后的旋转角度",
                list: "rotation.x"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isSelector"
            },
            {
                length: 2,
                rule: "isCoordinate"
            },
            {
                length: 5,
                rule: "/^[-~.0-9]+$/"
            }
        ]
    },
    {
        grammar: "<传送目标：目标> <目的地：x y z> facing <指定朝向坐标：x y z> [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送的实体",
                list: "selector"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.x"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定朝向",
                list: "commands.tp.facing"
            },
            {
                note: "指定实体传送后朝向的坐标",
                list: "coordinate.x; selector"
            },
            {
                note: "指定实体传送后朝向的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定实体传送后朝向的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isSelector"
            },
            {
                length: 2,
                rule: "isCoordinate"
            },
            {
                length: 5,
                rule: "/^facing$/"
            },
            {
                length: 6,
                rule: "!/^@/"
            }
        ]
    },
    {
        grammar: "<传送目标：目标> <目的地：x y z> facing <指定朝向坐标：目标> [检查方块：布尔值]",
        info: [
            {
                note: "指定要被传送的实体",
                list: ""
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.x"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.y"
            },
            {
                note: "指定要被传送到的坐标",
                list: "coordinate.z"
            },
            {
                note: "指定朝向",
                list: "commands.tp.facing"
            },
            {
                note: "指定实体传送后朝向的实体",
                list: "selector"
            },
            {
                note: "指定是否检查目的地是否有实体无法存在其中的方块",
                list: "boolean"
            }
        ],
        control: [
            {
                length: 1,
                rule: "isSelector"
            },
            {
                length: 2,
                rule: "isCoordinate"
            },
            {
                length: 5,
                rule: "/^facing$/"
            },
            {
                length: 6,
                rule: "isSelector"
            }
        ]
    }
]