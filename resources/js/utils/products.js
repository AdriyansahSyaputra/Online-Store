const products = [
    {
        id: 1,
        name: "Smartphone Pro Max",
        description:
            "Smartphone dengan layar AMOLED 6.7 inci dan prosesor octa-core.",
        category: "smartphone",
        reviews: 234,
        rating: 4.5,
        price: 999.99,
        sold: 1500,
        stock: true,
        image: "smartphone_pro_max.jpg",
    },
    {
        id: 2,
        name: "Smartphone Lite",
        description: "Smartphone dengan layar 5.5 inci dan baterai tahan lama.",
        category: "smartphone",
        reviews: 123,
        rating: 4.0,
        price: 499.99,
        sold: 800,
        stock: false,
        image: "smartphone_lite.jpg",
    },
    {
        id: 3,
        name: "Smartphone Ultra",
        description: "Smartphone premium dengan tiga kamera dan layar HDR.",
        category: "smartphone",
        reviews: 345,
        rating: 4.7,
        price: 1099.99,
        sold: 1200,
        stock: true,
        image: "smartphone_ultra.jpg",
    },
    {
        id: 4,
        name: "Smartphone Economy",
        description: "Smartphone ekonomis dengan fitur standar.",
        category: "smartphone",
        reviews: 90,
        rating: 3.8,
        price: 299.99,
        sold: 500,
        stock: true,
        image: "smartphone_economy.jpg",
    },
    {
        id: 5,
        name: "Smartphone Mini",
        description: "Smartphone kecil dengan performa besar.",
        category: "smartphone",
        reviews: 190,
        rating: 4.3,
        price: 399.99,
        sold: 700,
        stock: false,
        image: "smartphone_mini.jpg",
    },
    {
        id: 6,
        name: "Smartphone Rugged",
        description:
            "Smartphone tahan banting dan air untuk petualangan ekstrem.",
        category: "smartphone",
        reviews: 80,
        rating: 4.1,
        price: 599.99,
        sold: 300,
        stock: true,
        image: "smartphone_rugged.jpg",
    },
    {
        id: 7,
        name: "Smartphone 5G",
        description: "Smartphone dengan konektivitas 5G super cepat.",
        category: "smartphone",
        reviews: 220,
        rating: 4.4,
        price: 899.99,
        sold: 1000,
        stock: true,
        image: "smartphone_5g.jpg",
    },
    {
        id: 8,
        name: "Smartphone Foldable",
        description: "Smartphone lipat dengan teknologi canggih.",
        category: "smartphone",
        reviews: 95,
        rating: 4.2,
        price: 1499.99,
        sold: 400,
        stock: true,
        image: "smartphone_foldable.jpg",
    },
    {
        id: 9,
        name: "Smartphone Gaming",
        description:
            "Smartphone khusus gaming dengan layar refresh rate tinggi.",
        category: "smartphone",
        reviews: 310,
        rating: 4.6,
        price: 799.99,
        sold: 900,
        stock: true,
        image: "smartphone_gaming.jpg",
    },
    {
        id: 10,
        name: "Smartphone Standard",
        description: "Smartphone dengan fitur dasar dan harga terjangkau.",
        category: "smartphone",
        reviews: 50,
        rating: 3.5,
        price: 199.99,
        sold: 250,
        stock: true,
        image: "smartphone_standard.jpg",
    },

    {
        id: 11,
        name: "Laptop UltraBook 2025",
        description:
            "Laptop dengan Intel Core i7 generasi terbaru dan SSD 1TB.",
        category: "laptop/computer",
        reviews: 542,
        rating: 4.8,
        price: 1299.99,
        sold: 850,
        stock: true,
        image: "laptop_ultrabook_2025.jpg",
    },
    {
        id: 12,
        name: "Laptop Gaming X",
        description: "Laptop gaming dengan grafis RTX 3080.",
        category: "laptop/computer",
        reviews: 350,
        rating: 4.9,
        price: 1799.99,
        sold: 600,
        stock: true,
        image: "laptop_gaming_x.jpg",
    },
    {
        id: 13,
        name: "Laptop Budget 2025",
        description: "Laptop ekonomis untuk kebutuhan sehari-hari.",
        category: "laptop/computer",
        reviews: 200,
        rating: 4.0,
        price: 599.99,
        sold: 700,
        stock: true,
        image: "laptop_budget_2025.jpg",
    },
    {
        id: 14,
        name: "Desktop All-in-One Z",
        description: "Komputer all-in-one dengan layar 24 inci.",
        category: "laptop/computer",
        reviews: 180,
        rating: 4.5,
        price: 899.99,
        sold: 500,
        stock: true,
        image: "desktop_all_in_one_z.jpg",
    },
    {
        id: 15,
        name: "Laptop Ultralight",
        description: "Laptop ringan dengan daya tahan baterai 12 jam.",
        category: "laptop/computer",
        reviews: 300,
        rating: 4.6,
        price: 1299.99,
        sold: 650,
        stock: true,
        image: "laptop_ultralight.jpg",
    },
    {
        id: 16,
        name: "Workstation Pro",
        description: "Workstation untuk kebutuhan profesional.",
        category: "laptop/computer",
        reviews: 250,
        rating: 4.7,
        price: 1999.99,
        sold: 400,
        stock: true,
        image: "workstation_pro.jpg",
    },
    {
        id: 17,
        name: "Mini PC Cube",
        description: "PC mini dengan performa besar.",
        category: "laptop/computer",
        reviews: 220,
        rating: 4.4,
        price: 499.99,
        sold: 300,
        stock: true,
        image: "mini_pc_cube.jpg",
    },
    {
        id: 18,
        name: "Laptop Convertible",
        description: "Laptop convertible dengan layar sentuh.",
        category: "laptop/computer",
        reviews: 320,
        rating: 4.6,
        price: 1099.99,
        sold: 450,
        stock: true,
        image: "laptop_convertible.jpg",
    },
    {
        id: 19,
        name: "Chromebook Z",
        description: "Laptop Chromebook untuk kebutuhan online.",
        category: "laptop/computer",
        reviews: 100,
        rating: 4.0,
        price: 399.99,
        sold: 200,
        stock: true,
        image: "chromebook_z.jpg",
    },
    {
        id: 20,
        name: "Laptop Studio Pro",
        description: "Laptop untuk desainer grafis dan video editor.",
        category: "laptop/computer",
        reviews: 400,
        rating: 4.8,
        price: 2199.99,
        sold: 500,
        stock: true,
        image: "laptop_studio_pro.jpg",
    },
    {
        id: 21,
        name: "Galaxy Tab S8",
        description: "Tablet canggih dengan layar AMOLED 11 inci.",
        category: "Tablet",
        reviews: 120,
        rating: 4.7,
        price: 11000000,
        sold: 150,
        stock: 50,
        image: "galaxy-tab-s8.jpg",
    },
    {
        id: 22,
        name: "iPad Pro 12.9",
        description: "Tablet premium untuk profesional dan kreator.",
        category: "Tablet",
        reviews: 340,
        rating: 4.9,
        price: 18000000,
        sold: 400,
        stock: 100,
        image: "ipad-pro-12-9.jpg",
    },
    {
        id: 23,
        name: "Lenovo Tab P11 Pro",
        description: "Tablet multitasking dengan stylus dan keyboard.",
        category: "Tablet",
        reviews: 95,
        rating: 4.6,
        price: 7500000,
        sold: 200,
        stock: 70,
        image: "lenovo-tab-p11-pro.jpg",
    },
    {
        id: 24,
        name: "Microsoft Surface Go 3",
        description: "Tablet fleksibel dengan kemampuan laptop.",
        category: "Tablet",
        reviews: 150,
        rating: 4.5,
        price: 9500000,
        sold: 120,
        stock: 40,
        image: "surface-go-3.jpg",
    },
    {
        id: 25,
        name: "Huawei MatePad 11",
        description: "Tablet dengan fitur produktivitas tinggi.",
        category: "Tablet",
        reviews: 110,
        rating: 4.8,
        price: 8500000,
        sold: 175,
        stock: 60,
        image: "huawei-matepad-11.jpg",
    },
    {
        id: 26,
        name: "Sony Bravia XR A80J",
        description: "Televisi OLED 4K dengan warna dan kontras luar biasa.",
        category: "Television",
        reviews: 500,
        rating: 4.9,
        price: 25000000,
        sold: 300,
        stock: 50,
        image: "sony-bravia-xr-a80j.jpg",
    },
    {
        id: 27,
        name: "Samsung QLED Q80T",
        description: "Televisi QLED dengan teknologi Quantum HDR.",
        category: "Television",
        reviews: 450,
        rating: 4.8,
        price: 21000000,
        sold: 250,
        stock: 80,
        image: "samsung-qled-q80t.jpg",
    },
    {
        id: 28,
        name: "LG OLED C1",
        description: "Televisi OLED dengan performa gaming terbaik.",
        category: "Television",
        reviews: 600,
        rating: 4.9,
        price: 23000000,
        sold: 350,
        stock: 60,
        image: "lg-oled-c1.jpg",
    },
    {
        id: 29,
        name: "TCL 6-Series",
        description: "Televisi 4K dengan harga terjangkau dan kualitas tinggi.",
        category: "Television",
        reviews: 400,
        rating: 4.7,
        price: 12000000,
        sold: 400,
        stock: 100,
        image: "tcl-6-series.jpg",
    },
    {
        id: 30,
        name: "Hisense U8G",
        description: "Televisi premium dengan warna dan detail luar biasa.",
        category: "Television",
        reviews: 300,
        rating: 4.6,
        price: 15000000,
        sold: 200,
        stock: 70,
        image: "hisense-u8g.jpg",
    },
    {
        id: 31,
        name: "Sony WH-1000XM5",
        description: "Headphone wireless dengan noise cancellation terbaik.",
        category: "Headphone",
        reviews: 700,
        rating: 4.9,
        price: 4500000,
        sold: 500,
        stock: 150,
        image: "sony-wh-1000xm5.jpg",
    },
    {
        id: 32,
        name: "Bose QuietComfort 45",
        description: "Headphone nyaman dengan suara jernih.",
        category: "Headphone",
        reviews: 600,
        rating: 4.8,
        price: 4300000,
        sold: 450,
        stock: 100,
        image: "bose-quietcomfort-45.jpg",
    },
    {
        id: 33,
        name: "AirPods Max",
        description: "Headphone premium dengan fitur ekosistem Apple.",
        category: "Headphone",
        reviews: 800,
        rating: 4.7,
        price: 6500000,
        sold: 700,
        stock: 200,
        image: "airpods-max.jpg",
    },
    {
        id: 34,
        name: "JBL Live 660NC",
        description: "Headphone dengan bass kuat dan daya tahan lama.",
        category: "Headphone",
        reviews: 500,
        rating: 4.6,
        price: 2300000,
        sold: 350,
        stock: 180,
        image: "jbl-live-660nc.jpg",
    },
    {
        id: 35,
        name: "Sennheiser Momentum 4",
        description: "Headphone dengan kualitas suara tinggi.",
        category: "Headphone",
        reviews: 400,
        rating: 4.8,
        price: 5000000,
        sold: 300,
        stock: 100,
        image: "sennheiser-momentum-4.jpg",
    },
    {
        id: 36,
        name: "PlayStation 5",
        description: "Konsol gaming generasi terbaru dengan grafis luar biasa.",
        category: "Gamepad/Console",
        reviews: 1500,
        rating: 4.9,
        price: 8500000,
        sold: 2000,
        stock: 150,
        image: "playstation-5.jpg",
    },
    {
        id: 37,
        name: "Xbox Series X",
        description: "Konsol powerful untuk pengalaman gaming maksimal.",
        category: "Gamepad/Console",
        reviews: 1300,
        rating: 4.8,
        price: 7500000,
        sold: 1800,
        stock: 120,
        image: "xbox-series-x.jpg",
    },
    {
        id: 38,
        name: "Nintendo Switch OLED",
        description: "Konsol hybrid dengan layar OLED cerah.",
        category: "Gamepad/Console",
        reviews: 900,
        rating: 4.7,
        price: 5500000,
        sold: 1500,
        stock: 200,
        image: "nintendo-switch-oled.jpg",
    },
    {
        id: 39,
        name: "Logitech F310",
        description: "Gamepad dengan kompatibilitas luas untuk PC.",
        category: "Gamepad/Console",
        reviews: 700,
        rating: 4.5,
        price: 350000,
        sold: 1200,
        stock: 300,
        image: "logitech-f310.jpg",
    },
    {
        id: 40,
        name: "Razer Wolverine V2",
        description: "Gamepad premium dengan respons cepat.",
        category: "Gamepad/Console",
        reviews: 600,
        rating: 4.6,
        price: 1500000,
        sold: 800,
        stock: 100,
        image: "razer-wolverine-v2.jpg",
    },
    {
        id: 41,
        name: "Bosch GSB 18V",
        description:
            "Bor cordless dengan daya tinggi untuk pekerjaan profesional.",
        category: "Tools",
        reviews: 500,
        rating: 4.8,
        price: 2500000,
        sold: 800,
        stock: 150,
        image: "bosch-gsb-18v.jpg",
    },
    {
        id: 42,
        name: "Makita DF012DSE",
        description: "Obeng elektrik dengan desain ergonomis.",
        category: "Tools",
        reviews: 400,
        rating: 4.7,
        price: 1500000,
        sold: 500,
        stock: 100,
        image: "makita-df012dse.jpg",
    },
    {
        id: 43,
        name: "Stanley STHT77425",
        description: "Laser distance meter dengan akurasi tinggi.",
        category: "Tools",
        reviews: 300,
        rating: 4.6,
        price: 800000,
        sold: 600,
        stock: 200,
        image: "stanley-stht77425.jpg",
    },
    {
        id: 44,
        name: "DeWalt DWE6423",
        description: "Sander orbit dengan getaran rendah.",
        category: "Tools",
        reviews: 450,
        rating: 4.8,
        price: 1400000,
        sold: 700,
        stock: 120,
        image: "dewalt-dwe6423.jpg",
    },
    {
        id: 45,
        name: "Hitachi CJ90VST",
        description: "Jigsaw dengan performa tinggi untuk pekerjaan kayu.",
        category: "Tools",
        reviews: 320,
        rating: 4.7,
        price: 1300000,
        sold: 500,
        stock: 150,
        image: "hitachi-cj90vst.jpg",
    },
    {
        id: 46,
        name: "Apple Watch Series 9",
        description: "Smartwatch premium dengan fitur kesehatan lengkap.",
        category: "Smartwatch",
        reviews: 1000,
        rating: 4.9,
        price: 8000000,
        sold: 1500,
        stock: 200,
        image: "apple-watch-series-9.jpg",
    },
    {
        id: 47,
        name: "Samsung Galaxy Watch 6",
        description:
            "Smartwatch dengan desain modern dan daya tahan baterai lama.",
        category: "Smartwatch",
        reviews: 900,
        rating: 4.8,
        price: 4500000,
        sold: 1200,
        stock: 250,
        image: "galaxy-watch-6.jpg",
    },
    {
        id: 48,
        name: "Garmin Forerunner 965",
        description: "Smartwatch dengan fokus pada aktivitas olahraga.",
        category: "Smartwatch",
        reviews: 700,
        rating: 4.7,
        price: 6500000,
        sold: 800,
        stock: 180,
        image: "garmin-forerunner-965.jpg",
    },
    {
        id: 49,
        name: "Amazfit GTR 4",
        description: "Smartwatch dengan harga terjangkau dan fitur lengkap.",
        category: "Smartwatch",
        reviews: 600,
        rating: 4.6,
        price: 2500000,
        sold: 900,
        stock: 300,
        image: "amazfit-gtr-4.jpg",
    },
    {
        id: 50,
        name: "Fitbit Versa 4",
        description: "Smartwatch untuk pelacakan kesehatan harian.",
        category: "Smartwatch",
        reviews: 500,
        rating: 4.5,
        price: 3000000,
        sold: 700,
        stock: 200,
        image: "fitbit-versa-4.jpg",
    },
];

export default products;