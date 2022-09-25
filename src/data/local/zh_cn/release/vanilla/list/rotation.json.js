export default {
    "y": [
        {
            "template": {
                "input": {
                    "text": "{This: name} "
                }
            },
            "value": [
                {
                    "extend": "next",
                    "template": {},
                    "option": {
                        "searchable": false
                    }
                }
            ]
        },
        {
            "name": "~",
            "description": "相对角度",
            "input": {
                "text": "{This: name}"
            }
        },
        {
            "name": "-90.0",
            "description": "竖直向上"
        },
        {
            "name": "90.0",
            "description": "竖直向下"
        },
    ],
    "x": [
        {
            "template": {
                "input": {
                    "text": "{This: name} "
                }
            },
            "value": [
                {
                    "extend": "next",
                    "template": {},
                    "option": {
                        "searchable": false
                    }
                }
            ]
        },
        {
            "name": "~",
            "description": "相对角度",
            "input": {
                "text": "{This: name}"
            }
        },
        {
            "name": "-180.0",
            "description": "正北（与 180.0 重合）"
        },
        {
            "name": "-90.0",
            "description": "正东"
        },
        {
            "name": "0.0",
            "description": "正南"
        },
        {
            "name": "90.0",
            "description": "正西"
        }
    ]
}
