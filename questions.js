/* Bank soal matematika SD. `tingkat` dipakai untuk menyaring soal di menu awal. */
(function (root) {
  'use strict';

  const questions = {
    'kelas-1-2': [
      { id: 'k12-tambah-01', tingkat: 'kelas-1-2', operation: 'penjumlahan', text: 'Berapa hasil dari 7 + 5?', illustration: 'counting-pebbles', options: ['10', '12', '13'], answer: 1, explanation: 'Mulai dari 7, lalu maju 5 langkah: 8, 9, 10, 11, 12. Jadi jawabannya 12.' },
      { id: 'k12-kurang-01', tingkat: 'kelas-1-2', operation: 'pengurangan', text: 'Berapa hasil dari 15 − 6?', illustration: 'number-line', options: ['8', '9', '10'], answer: 1, explanation: 'Lima belas dikurangi enam berarti mundur enam langkah. Hasilnya 9.' },
      { id: 'k12-tambah-02', tingkat: 'kelas-1-2', operation: 'penjumlahan', text: 'Di tepi ngarai ada 3 bunga kuning dan 4 bunga putih. Berapa semuanya?', illustration: 'wildflowers', options: ['6 bunga', '7 bunga', '8 bunga'], answer: 1, explanation: '3 + 4 = 7, jadi ada 7 bunga.' },
      { id: 'k12-kurang-02', tingkat: 'kelas-1-2', operation: 'pengurangan', text: 'Katak membawa 12 batu kecil. Ia memberikan 5 batu. Sisa batunya …', illustration: 'counting-pebbles', options: ['5 batu', '6 batu', '7 batu'], answer: 2, explanation: '12 − 5 = 7. Masih ada 7 batu kecil.' },
      { id: 'k12-kali-01', tingkat: 'kelas-1-2', operation: 'perkalian', text: 'Ada 2 kelompok, setiap kelompok berisi 3 bunga. Berapa jumlah bunga?', illustration: 'groups', options: ['5 bunga', '6 bunga', '7 bunga'], answer: 1, explanation: '2 kelompok × 3 bunga = 6 bunga.' },
      { id: 'k12-kali-02', tingkat: 'kelas-1-2', operation: 'perkalian', text: 'Berapa hasil dari 4 × 2?', illustration: 'groups', options: ['6', '8', '10'], answer: 1, explanation: '4 × 2 artinya 4 kelompok berisi 2. Hasilnya 8.' },
      { id: 'k12-bagi-01', tingkat: 'kelas-1-2', operation: 'pembagian', text: '10 kelereng dibagi rata kepada 2 anak. Setiap anak mendapat …', illustration: 'sharing', options: ['4 kelereng', '5 kelereng', '6 kelereng'], answer: 1, explanation: '10 dibagi 2 sama dengan 5. Setiap anak mendapat 5 kelereng.' },
      { id: 'k12-bagi-02', tingkat: 'kelas-1-2', operation: 'pembagian', text: 'Berapa hasil dari 12 ÷ 3?', illustration: 'sharing', options: ['3', '4', '5'], answer: 1, explanation: '12 dibagi menjadi 3 kelompok sama besar. Setiap kelompok berisi 4.' },
      { id: 'k12-tambah-03', tingkat: 'kelas-1-2', operation: 'penjumlahan', text: 'Di pohon ada 8 burung. Datang lagi 4 burung. Berapa burung sekarang?', illustration: 'canyon-birds', options: ['11 burung', '12 burung', '13 burung'], answer: 1, explanation: '8 + 4 = 12. Sekarang ada 12 burung.' },
      { id: 'k12-kurang-03', tingkat: 'kelas-1-2', operation: 'pengurangan', text: 'Ada 14 daun. Tertiup 7 daun. Berapa daun yang tersisa?', illustration: 'number-line', options: ['6 daun', '7 daun', '8 daun'], answer: 1, explanation: '14 − 7 = 7, jadi tersisa 7 daun.' },
      { id: 'k12-kali-03', tingkat: 'kelas-1-2', operation: 'perkalian', text: 'Tiga piring berisi 2 potong buah masing-masing. Berapa potong buah?', illustration: 'groups', options: ['6 potong', '8 potong', '10 potong'], answer: 0, explanation: '3 × 2 = 6 potong buah.' },
      { id: 'k12-bagi-03', tingkat: 'kelas-1-2', operation: 'pembagian', text: '9 biskuit dibagikan kepada 3 anak dengan jumlah sama. Masing-masing mendapat …', illustration: 'sharing', options: ['2 biskuit', '3 biskuit', '4 biskuit'], answer: 1, explanation: '9 ÷ 3 = 3, jadi masing-masing mendapat 3 biskuit.' }
    ],

    'kelas-3-4': [
      { id: 'k34-tambah-01', tingkat: 'kelas-3-4', operation: 'penjumlahan', text: 'Berapa hasil dari 248 + 135?', illustration: 'place-value', options: ['373', '383', '393', '403'], answer: 1, explanation: '248 + 100 = 348, lalu +35 = 383.' },
      { id: 'k34-kurang-01', tingkat: 'kelas-3-4', operation: 'pengurangan', text: 'Berapa hasil dari 500 − 276?', illustration: 'number-line', options: ['214', '224', '234', '244'], answer: 1, explanation: '500 − 200 = 300 dan 300 − 76 = 224.' },
      { id: 'k34-kali-01', tingkat: 'kelas-3-4', operation: 'perkalian', text: 'Berapa hasil dari 7 × 8?', illustration: 'groups', options: ['48', '54', '56', '64'], answer: 2, explanation: '7 × 8 = 56.' },
      { id: 'k34-bagi-01', tingkat: 'kelas-3-4', operation: 'pembagian', text: 'Berapa hasil dari 72 ÷ 8?', illustration: 'sharing', options: ['7', '8', '9', '10'], answer: 2, explanation: 'Karena 8 × 9 = 72, maka 72 ÷ 8 = 9.' },
      { id: 'k34-tambah-02', tingkat: 'kelas-3-4', operation: 'penjumlahan', text: 'Sebuah jalur memiliki 345 batu di sisi kiri dan 278 batu di sisi kanan. Berapa semuanya?', illustration: 'counting-pebbles', options: ['603 batu', '613 batu', '623 batu', '633 batu'], answer: 2, explanation: '345 + 278 = 623 batu.' },
      { id: 'k34-kurang-02', tingkat: 'kelas-3-4', operation: 'pengurangan', text: 'Perpustakaan kecil memiliki 900 buku. Sebanyak 458 dipinjam. Sisa buku …', illustration: 'canyon-books', options: ['432 buku', '442 buku', '452 buku', '462 buku'], answer: 1, explanation: '900 − 458 = 442 buku.' },
      { id: 'k34-kali-02', tingkat: 'kelas-3-4', operation: 'perkalian', text: 'Ada 12 kotak. Setiap kotak berisi 6 pensil. Berapa pensil seluruhnya?', illustration: 'groups', options: ['62 pensil', '68 pensil', '72 pensil', '78 pensil'], answer: 2, explanation: '12 × 6 = 72 pensil.' },
      { id: 'k34-bagi-02', tingkat: 'kelas-3-4', operation: 'pembagian', text: '96 kelereng dibagi ke dalam 12 kantong sama banyak. Setiap kantong berisi …', illustration: 'sharing', options: ['6', '7', '8', '9'], answer: 2, explanation: '96 ÷ 12 = 8 kelereng per kantong.' },
      { id: 'k34-bagi-03', tingkat: 'kelas-3-4', operation: 'pembagian', text: '24 bunga dibagi rata ke 4 vas. Berapa bunga di setiap vas?', illustration: 'wildflowers', options: ['4 bunga', '5 bunga', '6 bunga', '8 bunga'], answer: 2, explanation: '24 ÷ 4 = 6 bunga di setiap vas.' },
      { id: 'k34-kurang-03', tingkat: 'kelas-3-4', operation: 'pengurangan', text: 'Sebuah toko mempunyai 750 stiker dan menjual 325 stiker. Berapa sisanya?', illustration: 'canyon-books', options: ['415', '425', '435', '445'], answer: 1, explanation: '750 − 325 = 425 stiker.' },
      { id: 'k34-kali-03', tingkat: 'kelas-3-4', operation: 'perkalian', text: 'Berapa hasil dari 9 × 7?', illustration: 'groups', options: ['54', '56', '63', '72'], answer: 2, explanation: '9 × 7 = 63.' },
      { id: 'k34-tambah-03', tingkat: 'kelas-3-4', operation: 'penjumlahan', text: 'Rani melangkah 126 langkah pagi hari dan 189 langkah sore hari. Berapa total langkahnya?', illustration: 'jump-route', options: ['305 langkah', '315 langkah', '325 langkah', '335 langkah'], answer: 1, explanation: '126 + 189 = 315 langkah.' }
    ],

    'kelas-5-6': [
      { id: 'k56-tambah-01', tingkat: 'kelas-5-6', operation: 'penjumlahan', text: 'Berapa hasil dari 1.245 + 2.378?', illustration: 'place-value', options: ['3.523', '3.623', '3.723', '3.823'], answer: 1, explanation: '1.245 + 2.378 = 3.623.' },
      { id: 'k56-kurang-01', tingkat: 'kelas-5-6', operation: 'pengurangan', text: 'Berapa hasil dari 5.000 − 2.786?', illustration: 'number-line', options: ['2.114', '2.214', '2.314', '2.414'], answer: 1, explanation: '5.000 − 2.786 = 2.214.' },
      { id: 'k56-kali-01', tingkat: 'kelas-5-6', operation: 'perkalian', text: 'Berapa hasil dari 36 × 24?', illustration: 'groups', options: ['744', '824', '864', '924'], answer: 2, explanation: '36 × 24 = 36 × 20 + 36 × 4 = 720 + 144 = 864.' },
      { id: 'k56-bagi-01', tingkat: 'kelas-5-6', operation: 'pembagian', text: 'Berapa hasil dari 1.008 ÷ 12?', illustration: 'sharing', options: ['74', '84', '94', '104'], answer: 1, explanation: '12 × 84 = 1.008, jadi hasil baginya 84.' },
      { id: 'k56-tambah-02', tingkat: 'kelas-5-6', operation: 'penjumlahan', text: 'Sebuah desa mengumpulkan 3.450 kg dan 1.875 kg bahan daur ulang. Berapa kilogram semuanya?', illustration: 'counting-pebbles', options: ['5.125 kg', '5.225 kg', '5.325 kg', '5.425 kg'], answer: 2, explanation: '3.450 + 1.875 = 5.325 kg.' },
      { id: 'k56-kurang-02', tingkat: 'kelas-5-6', operation: 'pengurangan', text: 'Jalur pendakian panjangnya 7.200 m. Sudah ditempuh 3.456 m. Berapa meter lagi?', illustration: 'jump-route', options: ['3.644 m', '3.744 m', '3.844 m', '3.944 m'], answer: 1, explanation: '7.200 − 3.456 = 3.744 m.' },
      { id: 'k56-kali-02', tingkat: 'kelas-5-6', operation: 'perkalian', text: 'Ada 125 bibit di setiap baris. Jika ada 8 baris, berapa bibit seluruhnya?', illustration: 'groups', options: ['800', '900', '1.000', '1.100'], answer: 2, explanation: '125 × 8 = 1.000 bibit.' },
      { id: 'k56-bagi-02', tingkat: 'kelas-5-6', operation: 'pembagian', text: 'Berapa hasil dari 936 ÷ 9?', illustration: 'sharing', options: ['94', '104', '114', '124'], answer: 1, explanation: '9 × 104 = 936, jadi 936 ÷ 9 = 104.' },
      { id: 'k56-bagi-03', tingkat: 'kelas-5-6', operation: 'pembagian', text: '48 buku dibagikan sama rata kepada 6 kelompok. Setiap kelompok mendapat …', illustration: 'canyon-books', options: ['6 buku', '7 buku', '8 buku', '9 buku'], answer: 2, explanation: '48 ÷ 6 = 8 buku per kelompok.' },
      { id: 'k56-kali-03', tingkat: 'kelas-5-6', operation: 'perkalian', text: 'Berapa hasil dari 24 × 15?', illustration: 'groups', options: ['300', '330', '360', '390'], answer: 2, explanation: '24 × 15 = 24 × 10 + 24 × 5 = 240 + 120 = 360.' },
      { id: 'k56-kurang-03', tingkat: 'kelas-5-6', operation: 'pengurangan', text: 'Sebuah sekolah memiliki dana Rp2.500.000 dan memakai Rp875.000. Sisanya …', illustration: 'place-value', options: ['Rp1.525.000', 'Rp1.625.000', 'Rp1.725.000', 'Rp1.825.000'], answer: 1, explanation: '2.500.000 − 875.000 = 1.625.000.' },
      { id: 'k56-tambah-03', tingkat: 'kelas-5-6', operation: 'penjumlahan', text: 'Sebuah peternakan mengirim 1.440 telur pagi hari dan 960 telur siang hari. Berapa telur terkirim?', illustration: 'counting-pebbles', options: ['2.200 telur', '2.300 telur', '2.400 telur', '2.500 telur'], answer: 2, explanation: '1.440 + 960 = 2.400 telur.' }
    ]
  };

  const levelInfo = {
    'kelas-1-2': { label: 'Kelas 1–2', seconds: 45, description: 'Tambah, kurang, kali, dan bagi dasar' },
    'kelas-3-4': { label: 'Kelas 3–4', seconds: 55, description: 'Hitungan bilangan sampai ribuan' },
    'kelas-5-6': { label: 'Kelas 5–6', seconds: 70, description: 'Hitungan lebih menantang' }
  };

  root.FROG_QUESTIONS = questions;
  root.FROG_LEVELS = levelInfo;
  root.FROG_QUESTION_BANK = Object.values(questions).flat();
  if (typeof module !== 'undefined' && module.exports) module.exports = { questions, levelInfo };
})(typeof window !== 'undefined' ? window : globalThis);
