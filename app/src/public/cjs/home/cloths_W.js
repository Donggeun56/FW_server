    function Cloths_W(temp) {
        const A = [
        {
            top: [
            {
                name: "LongPadding_W",
                one_piece: "false"
            }
            ]
        },
        {
            bottom: [
            {
                name: "LongPants_W"
            }
            ]
        }
        ];
        const B = [
        {
            top: [
            {
                name: "Tshirt_W",
                one_piece: "false"
            },
            {
                name: "Hoodie_W",
                one_piece: "false"
            },
            {
                name: "Cardigan_W",
                one_piece: "false"
            }
            ]
        },
        {
            bottom: [
            {
                name: "LongSkirt1_W"
            },
            {
                name: "LongSkirt2_W"
            },
            {
                name: "LongPants_W"
            }
            ]
        }
        ];
        const C = [
        {
            top: [
            {
                name: "Dress1_W",
                one_piece: "true"
            },
            {
                name: "Dress2_W",
                one_piece: "true"
            },
            {
                name: "ShortTshirt1_W",
                one_piece: "false"
            },
            {
                name: "ShortTshirt2_W",
                one_piece: "false"
            },
            {
                name: "ShortTshirt3_W",
                one_piece: "false"
            },
            {
                name: "ShortTshirt4_W",
                one_piece: "false"
            },
            {
                name: "ShortTshirt5_W",
                one_piece: "false"
            },
            {
                name: "ShortTshirt6_W",
                one_piece: "false"
            },

            ]
        },
        {
            bottom: [
            {
                name: "ShortSkirts1_W"
            },
            {
                name: "ShortSkirts2_W"
            },
            {
                name: "ShortPants_W"
            }
            ]
        }
        ];
        const D = [
            {
                top: [
                {
                    name: "Sleeveless_W",
                    one_piece: "false"
                }
                ]
            },
            {
                bottom: [
                {
                    name: "ShortSkirts1_W"
                },
                {
                    name: "ShortSkirts2_W"
                },
                {
                    name: "ShortPants_W"
                }
                ]
            }
            ];
    
        let b = {name:'Clean'};
        const t = eval(temp)[0].top[Math.floor(Math.random() * eval(temp)[0].top.length)];
        if (t.one_piece !== "true"){
        b = eval(temp)[1].bottom[Math.floor(Math.random() * eval(temp)[1].bottom.length)];
        }
    
        return [t.name, b.name];
    }
    