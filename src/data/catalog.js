const CATEGORIES = [
    "Semua Kategori",
    "BEST SELLER & KURSI SATUAN (CHAIRS)",
    "STOOL",
    "MEJA SATUAN (TABLES)",
    "NEW ARRIVAL",
    "SET 2 KURSI (TABLE 2 CHAIR)",
    "SET 3 KURSI & BAR (TABLE 3 CHAIR / BAR)",
    "SET 4 KURSI (TABLE 4 CHAIR)",
    "SET DINING TABLE BESAR"
];

const PRODUCTS = [
    // Kategori: BEST SELLER & KURSI SATUAN (CHAIRS)
    { id: 1, name: "DINING ARM - PALISSADE", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "50 x 57 T. 79 cm", price: 650000 },
    { id: 2, name: "DINING ARM CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "50 x 57 T. 79 cm", price: 650000 },
    { id: 3, name: "OTTOMAN PALISSADE", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "80 x 73 T. 70 cm", price: 750000 },
    { id: 4, name: "OTTOMAN ARM PALISSADE", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "80 x 73 T. 70 cm", price: 800000 },
    { id: 5, name: "LOUNGHE CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "80 x 73 T. 70 cm", price: 900000 },
    { id: 6, name: "CARETY CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 600000 },
    { id: 7, name: "HIDEN CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 600000 },
    { id: 8, name: "ALLOW CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 600000 },
    { id: 9, name: "OD CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "50 x 57 T. 79 cm", price: 650000 },
    { id: 10, name: "EMLY CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 750000 },
    { id: 11, name: "RESY CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 750000 },
    { id: 12, name: "URBAN CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 750000 },
    { id: 13, name: "LITTE CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 650000 },
    { id: 14, name: "FAFAW CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 550000 },
    { id: 15, name: "MARION CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 650000 },
    { id: 16, name: "CEND CHAIR", category: "BEST SELLER & KURSI SATUAN (CHAIRS)", material: "Besi", size: "-", price: 650000 },

    // Kategori: STOOL
    { id: 17, name: "STOOL 1", category: "STOOL", material: "Besi", size: "37 x 42 T. 45 cm", price: 495000 },
    { id: 18, name: "STOOL BAR", category: "STOOL", material: "Besi", size: "48 x 38 T. 78 cm", price: 550000 },
    { id: 19, name: "STOOL 2", category: "STOOL", material: "Besi", size: "65 X 60 T. 37 cm", price: 750000 },
    { id: 20, name: "TABLE OTTOMAN", category: "STOOL", material: "Besi", size: "60x60 T. 40 cm", price: 650000 },

    // Kategori: MEJA SATUAN (TABLES)
    { id: 21, name: "TABLE 1", category: "MEJA SATUAN (TABLES)", material: "Besi", size: "D. 70 T. 75", price: 800000 },
    { id: 22, name: "TABLE 2", category: "MEJA SATUAN (TABLES)", material: "Besi", size: "60 x 60 T. 75 cm", price: 850000 },
    { id: 23, name: "TABLE 3", category: "MEJA SATUAN (TABLES)", material: "Besi", size: "D. 70 T. 75", price: 800000 },
    { id: 24, name: "TABLE 4", category: "MEJA SATUAN (TABLES)", material: "Besi", size: "70x70 T. 75", price: 800000 },
    { id: 25, name: "TABLE 5", category: "MEJA SATUAN (TABLES)", material: "Besi", size: "D. 50 T. 110", price: 700000 },
    { id: 26, name: "TABLE 6", category: "MEJA SATUAN (TABLES)", material: "Besi", size: "D. 60 T. 75", price: 750000 },

    // Kategori: NEW ARRIVAL
    { id: 27, name: "Set Kursi Caffe Hijau & Kuning Gold", category: "NEW ARRIVAL", material: "Besi", size: "-", desc: "Set kursi caffe perpaduan warna hijau dengn kuning gold memanccarkan keindahan cafe anda", price: 2950000 },

    // Kategori: SET 2 KURSI (TABLE 2 CHAIR)
    { id: 28, name: "SET PICKY", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "Size meja: 60x60x40 cm", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 1950000 },
    { id: 29, name: "SET LITTLE", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "Size meja: D.60 T. 75 cm", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 2100000 },
    { id: 30, name: "SET SAYORA", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "Size meja: D. 60 T. 75", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 2100000 },
    { id: 31, name: "SET PINKY", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "1 meja 2 kursi, meja D. 60 T. 75", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 2100000 },
    { id: 32, name: "SET OLIVE", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "1 meja 2 kursi, meja D. 60 T. 75", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 2200000 },
    { id: 33, name: "SET KIMBLY", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "1 meja 2 kursi, meja D. 60 T. 75", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 2100000 },
    { id: 34, name: "SET 2 PALISADE ARM", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "1 meja 2 kursi, meja D. 60 T. 75", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 2150000 },
    { id: 35, name: "SET PALISSADE", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "kursi 2 pcs meja 1 pcs, meja 70x70 T. 75", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 2200000 },
    { id: 36, name: "SET CHAIR PLAT", category: "SET 2 KURSI (TABLE 2 CHAIR)", material: "Besi", size: "1 meja 2 kursi, meja 70x70 T. 75", desc: "Tinggi dudukan kursi rata-rata 45 cm", price: 2500000 },

    // Kategori: SET 3 KURSI & BAR (TABLE 3 CHAIR / BAR)
    { id: 37, name: "SET CHAIR RED", category: "SET 3 KURSI & BAR (TABLE 3 CHAIR / BAR)", material: "Besi", size: "Meja 1 pcs kursi 3 pcs, Meja D. 60 T. 75 cm", price: 2500000 },
    { id: 38, name: "SET CHAIR PALISADE", category: "SET 3 KURSI & BAR (TABLE 3 CHAIR / BAR)", material: "Besi", size: "Meja 1 pcs kursi 2 pcs stool 1 pcs, Meja D. 60 T. 75 cm", price: 2550000 },
    { id: 39, name: "SET BAR CHAIR", category: "SET 3 KURSI & BAR (TABLE 3 CHAIR / BAR)", material: "Besi", size: "Meja 1 pcs kursi 2 pcs stool 1 pcs, Meja D. 60 T. 75 cm", price: 2550000 },

    // Kategori: SET 4 KURSI (TABLE 4 CHAIR)
    { id: 40, name: "SET CHAIR PALISADE (4 Chair)", category: "SET 4 KURSI (TABLE 4 CHAIR)", material: "Besi", size: "Meja 1 pcs kursi 4 pcs, Meja D. 60 T. 75 cm", price: 3000000 },
    { id: 41, name: "SET CHAIR BLACK", category: "SET 4 KURSI (TABLE 4 CHAIR)", material: "Besi", size: "Meja 1 pcs kursi 4 pcs, Meja D. 60 T. 75 cm", price: 3300000 },
    { id: 42, name: "SET RED STAY", category: "SET 4 KURSI (TABLE 4 CHAIR)", material: "Besi", size: "Meja 1 pcs kursi 4 pcs, Meja 60x60x40", price: 3800000 },
    { id: 43, name: "SET CHAIR PALISADE Besar", category: "SET 4 KURSI (TABLE 4 CHAIR)", material: "Besi", size: "Meja 1 pcs kursi 4 pcs, Meja Uk.80x80x75 cm", price: 3900000 },
    { id: 44, name: "SET CHAIR VAKANSI", category: "SET 4 KURSI (TABLE 4 CHAIR)", material: "Besi", size: "Meja 1 pcs kursi 4 pcs, Meja D.70 T. 75 cm", price: 2950000 },
    { id: 45, name: "SET CHAIR ORANHE", category: "SET 4 KURSI (TABLE 4 CHAIR)", material: "Besi", size: "Meja 1 pcs kursi 4 pcs, Meja D.70 T. 75 cm", price: 3600000 },

    // Kategori: SET DINING TABLE BESAR
    { id: 46, name: "SET PALISADE Lengkap", category: "SET DINING TABLE BESAR", material: "Besi", size: "Meja 1, Kursi palisade 2 pcs, kursi 2 seater 1 pcs, Stool 1 pcs", desc: "Finishing: Bisa Custom", price: 5300000 },
    { id: 47, name: "SET PALISADE Mix", category: "SET DINING TABLE BESAR", material: "Besi", size: "Meja 1, kursi palisade tanpa lengan 2 pcs, Kursi palisade lengan 2 pcs, Stool 1 pcs", desc: "Finishing: Bisa Custom", price: 5300000 },
    { id: 48, name: "SET DINING ORANGE", category: "SET DINING TABLE BESAR", material: "Besi", size: "Meja 140x80 pcs, kursi 4 pcs", desc: "Finishing: Bisa Custom", price: 4700000 },
    { id: 49, name: "SET PALISADE (1 Meja 4 Kursi)", category: "SET DINING TABLE BESAR", material: "Besi", size: "Meja 1 kursi 4", desc: "Finishing: Bisa Custom", price: 4350000 },
    { id: 50, name: "SET DINING TABLE (1 Meja 6 Kursi)", category: "SET DINING TABLE BESAR", material: "Besi", size: "Meja 1 kursi 6", desc: "Finishing: Bisa Custom", price: 5800000 },
    { id: 51, name: "SET DINING TABLE (1 Meja 4 Kursi)", category: "SET DINING TABLE BESAR", material: "Besi", size: "Meja 1 kursi 4", desc: "Finishing: Bisa Custom", price: 5200000 },
];
