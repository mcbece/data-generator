export default {
    "x": [
        {
            "template": {
                "input": {
                    "text": "{This: name}"
                }
            },
            "value": [
                {
                    "extend": "next",
                    "template": {
                        "input": {
                            "replace": "none",
                            "text": "{This: name} "
                        }
                    },
                    "option": {
                        "searchable": false
                    }
                },
                {
                    "name": "test"
                }
            ]
        },
        {
            "name": "~",
            "description": "相对坐标"
        },
        {
            "name": "^",
            "description": "局部坐标"
        }
    ],
    "y": [
        {
            "template": {
                "input": {
                    "text": "{This: name}"
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
            "description": "相对坐标"
        },
        {
            "name": "^",
            "description": "局部坐标"
        }
    ],
    "z": [
        {
            "template": {
                "input": {
                    "text": "{This: name}"
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
            "description": "相对坐标"
        },
        {
            "name": "^",
            "description": "局部坐标"
        }
    ]
}
