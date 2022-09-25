export default {
    "next": [
        {
            "template": {},
            "option": {
                "searchable": false
            }
        },
        {
            "name": "[",
            "description": "使用参数",
            "input": {
                "replace": "none",
                "text": "{This: name}"
            }
        },
        {
            "name": "",
            "description": "下一项",
            "input": {
                "replace": "none",
                "text": " "
            }
        }
    ],
    "next_argument": [
        {
            "template": {},
            "option": {
                "searchable": false
            }
        },
        {
            "name": ",",
            "description": "下一个参数",
            "input": {
                "replace": "none",
                "text": "{This: name}"
            }
        },
        {
            "name": "]",
            "description": "结束",
            "input": {
                "replace": "none",
                "text": "{This: name} "
            }
        }
    ],
    "variable": [
        {
            "extend": "player",
            "template": {
                "url": "{Global: url.command_page}",
                "input": {
                    "text": "{This: name}"
                }
            }
        },
        {
            "name": "@p",
            "description": "选择最近的玩家。"
        },
        {
            "name": "@r",
            "description": "选择随机玩家。"
        },
        {
            "name": "@a",
            "description": "选择所有玩家，包括已死亡玩家。"
        },
        {
            "name": "@e",
            "description": "选择所有实体（包含玩家），不包含死亡的实体。"
        },
        {
            "name": "@s",
            "description": "选择该命令的执行者（唯一的），包括已死亡玩家。"
        },
        {
            "name": "@c",
            "description": "[仅教育版] 选择自己的智能体。"
        },
        {
            "name": "@v",
            "description": "[仅教育版] 选择所有的智能体。"
        },
        {
            "name": "@initiator",
            "description": "[仅NPC内部命令] 选择当前与该NPC交互的玩家。"
        }
    ],
    "argument": [
        {
            "template": {
                "url": "{Global: url.command_page}",
                "input": {
                    "replace": "last_selector_argument",
                    "text": "{This: name}="
                }
            }
        },
        {
            "name": "x",
            "description": "指定X轴基准点。",
            "value": [
                {
                    "extend": "coordinate.x<-{input:{replace:'none',text:'{This: name}'}}"
                }
            ]
        },
        {
            "name": "y",
            "description": "指定Y轴基准点。",
            "value": [
                {
                    "extend": "coordinate.y<-{input:{replace:'none',text:'{This: name}'}}"
                }
            ]
        },
        {
            "name": "z",
            "description": "指定Z轴基准点。",
            "value": [
                {
                    "extend": "coordinate.z<-{input:{replace:'none',text:'{This: name}'}}"
                }
            ]
        },
        {
            "name": "r",
            "description": "通过最大距离选择目标。",
            "value": []
        },
        {
            "name": "rm",
            "description": "通过最小距离选择目标。",
            "value": []
        },
        {
            "name": "dx",
            "description": "指定X轴延伸距离。",
            "value": []
        },
        {
            "name": "dy",
            "description": "指定Y轴延伸距离。",
            "value": []
        },
        {
            "name": "dz",
            "description": "指定Z轴延伸距离。",
            "value": []
        },
        {
            "name": "scores",
            "description": "通过计分项选择目标。",
            "value": []
        },
        {
            "name": "tag",
            "description": "通过标签选择目标。",
            "value": []
        },
        {
            "name": "c",
            "description": "指定数量并选择距离最近的目标。",
            "value": []
        },
        {
            "name": "l",
            "description": "通过最大经验等级选择目标。",
            "value": []
        },
        {
            "name": "lm",
            "description": "通过最小经验等级选择目标。",
            "value": []
        },
        {
            "name": "m",
            "description": "通过游戏模式选择目标。",
            "value": []
        },
        {
            "name": "name",
            "description": "通过名称选择目标。",
            "value": []
        },
        {
            "name": "rx",
            "description": "通过最大垂直旋转角度选择目标。",
            "value": []
        },
        {
            "name": "rxm",
            "description": "通过最小垂直旋转角度选择目标。",
            "value": []
        },
        {
            "name": "ry",
            "description": "通过最大水平旋转角度选择目标。",
            "value": []
        },
        {
            "name": "rym",
            "description": "通过最小水平旋转角度选择目标。",
            "value": []
        },
        {
            "name": "type",
            "description": "通过实体类型选择目标。",
            "value": [
                {
                    "extend": "entity<-{input:{replace:'last_selector_argument_value',text:'{This: name}'}}"
                }
            ]
        },
        {
            "name": "family",
            "description": "通过实体族选择目标。",
            "value": [
                {
                    "extend": "entity.family<-{input:{replace:'last_selector_argument_value',text:'{This: name}'}}"
                }
            ]
        },
        {
            "name": "hasitem",
            "description": "...",
            "value": []
        }
    ]
}
