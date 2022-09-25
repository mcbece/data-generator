export default [
    {
        command: {
            name: "/^(\\/)?(camerashake)$/",
            info: "对玩家视野施以一定强度和时间的摇晃效果"
        }
    },
    {
        grammar: "add <玩家：目标> [强度：整数] [秒数：整数] [shakeType: CameraShakeType]",
        info: [
            {
                length: 1,
                note: "添加",
                list: "commands.camerashake.model"
            },
            {
                length: 2,
                note: "指定要施以或停止视野摇晃效果的玩家",
                list: "selector"
            },
            {
                length: 3,
                note: "指定视野摇晃的强度",
                list: "commands.camerashake.intensity"
            },
            {
                length: 4,
                note: "指定视野摇晃的时长",
                list: "commands.camerashake.seconds"
            },
            {
                length: 5,
                note: "指定视野摇晃方向的种类",
                list: "commands.camerashake.shake_type"
            }
        ],
        control: [
            {
                length: 1,
                rule: "/^add$/"
            }
        ]
    },
    {
        grammar: "stop <玩家：目标>",
        info: [
            {
                length: 1,
                note: "停止",
                list: "commands.camerashake.model"
            },
            {
                length: 2,
                note: "指定要施以或停止视野摇晃效果的玩家",
                list: "selector"
            }
            ],
        control: [
            {
                length: 1,
                rule: "/^stop$/"
            }
        ]
    }
]
