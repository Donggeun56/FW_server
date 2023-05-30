function Cloths_M(temp) {
    const A = [
    {
        top: [
        {
            name: "LongPadding_M"
        }
        ]
    },
    {
        bottom: [
        {
            name: "LongPants1_M"
        },
        {
            name: "LongPants2_M"
        }
        ]
    }
    ];
    const B = [
    {
        top: [
        {
            name: "Cardigan_M"
        },
        {
            name: "Hoodie_M"
        },
        {
            name: "LongSleeves_M"
        },
        {
            name: "Tshirt1_M"
        },
        {
            name: "Tshirt2_M"
        },
        {
            name: "Tshirt3_M"
        },
        {
            name: "Shirts_M"
        }
        ]
    },
    {
        bottom: [
        {
            name: "LongPants1_M"
        },
        {
            name: "LongPants2_M"
        }
        ]
    }
    ];
    const C = [
    {
        top: [
        {
            name: "ShortSleeve3_M"
        },
        {
            name: "ShortSleeve2_M"
        },
        {
            name: "ShortSleeve1_M"
        },
        {
            name: "ShortShirts1_M"
        },
        {
            name: "ShortShirts2_M"
        }
        ]
    },
    {
        bottom: [
        {
            name: "LongPants1_M"
        },
        {
            name: "LongPants2_M"
        },
        {
            name: "Shorts2_M"
        },
        {
            name: "Shorts1_M"
        }
        ]
    }
    ];
    const D = [
        {
            top: [
            {
                name: "Sleeveless_M"
            },
            ]
        },
        {
            bottom: [
            {
                name: "Shorts2_M"
            },
            {
                name: "Shorts1_M"
            }
            ]
        }
        ];

    const t = eval(temp)[0].top[Math.floor(Math.random() * eval(temp)[0].top.length)];
    const b = eval(temp)[1].bottom[Math.floor(Math.random() * eval(temp)[1].bottom.length)];

    return [t.name, b.name];
}
