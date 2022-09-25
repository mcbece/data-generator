export default {
    "execute": {
        "detect": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "detect",
                "description": "[不是命令] 检测方块。",
            }
        ]
    },
    "tp": {
        "facing": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "facing",
                "description": "指定朝向"
            }
        ]
    },
    "help": {
        "page_number": []
    },
    "camerashake": {
        "model": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "add",
                "description": "添加"
            },
            {
                "name": "stop",
                "description": "停止"
            }
        ],
        "shake_type": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "positional",
                "description": "坐标摇晃"
            },
            {
                "name": "rotational",
                "description": "角度摇晃"
            }
        ],
        "intensity": [],
        "seconds": []
    },
    "changesetting": {
        "model": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "allow-cheats",
                "description": "是否允许作弊"
            },
            {
                "name": "difficulty",
                "description": "设置难度"
            }
        ]
    },
    "clear": {
        "max_count": []
    },
    "clone": {
        "mask_mode": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "replace",
                "description": "[默认] 复制所有方块"
            },
            {
                "name": "masked",
                "description": "仅复制非空气方块"
            },
            {
                "name": "filtered",
                "description": "仅复制指定方块"
            }
        ],
        "clone_mode": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "normal",
                "description": "[默认] 不执行 force 与 move"
            },
            {
                "name": "force",
                "description": "强制复制，即使源区域与目标区域有重叠"
            },
            {
                "name": "move",
                "description": "将源区域复制到目标区域，并将源区域替换为空气"
            }
        ]
    },
    "wsserver": {
        "uri": [],
        "out": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "out",
                "description": "断开当前的连接"
            }
        ]
    },
    "effect": {
        "clear": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "clear",
                "description": "移除所有效果"
            }
        ],
        "intensity": [
            {
                "template": {}
            },
            {
                "description": "一级为 0，最大为 255"
            }
        ],
        "seconds": [
            {
                "template": {}
            },
            {
                "description": "1 到 2,040,109,465 有效，最大为 2,147,483,647"
            },
            {
                "description": "瞬间伤害、瞬间治疗和饱和的单位为游戏刻"
            }
        ]
    },
    "fill": {
        "model": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                }
            },
            {
                "name": "replace",
                "description": "[默认] 全部填充，无掉落物"
            },
            {
                "name": "destroy",
                "description": "全部填充，有掉落物"
            },
            {
                "name": "hollow",
                "description": "仅用指定方块替换填充区域外层的方块，内部方块被替换为空气"
            },
            {
                "name": "outline",
                "description": "仅用指定方块替换填充区域外层的方块，内部方块不受影响"
            },
            {
                "name": "keep",
                "description": "仅用指定方块替换填充区域内的空气方块"
            }
        ]
    },
    "fog": {
        "model": [
            {
                "template": {
                    "input": {
                        "text": "{This: name} "
                    }
                },
            },
            {
                "name": "push",
                "description": "加入配置"
            },
            {
                "name": "pop",
                "description": "移除首个指定自定义ID的配置"
            },
            {
                "name": "remove",
                "description": "移除所有指定自定义ID的配置"
            }
        ],
        "user_provided_id": []
    },
    "function": {
        "path": []
    }
}
