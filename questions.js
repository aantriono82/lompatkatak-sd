/* Generator soal Matematika, IPA, IPS, Bahasa Inggris, Bahasa Indonesia, PAI, Pendidikan Pancasila, PJOK, dan Seni Budaya. Setiap ronde memiliki 20 slot dan tiga pilihan jawaban. */
(function (root) {
  'use strict';

  const operations = ['penjumlahan', 'pengurangan', 'perkalian', 'pembagian'];
  const phaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Tambah dan kurang sampai 20' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Operasi bilangan sampai 1.000' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Operasi bilangan sampai 1.000' }
  };
  const ipaPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Tubuh, makhluk hidup, benda, dan cuaca' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Tumbuhan, energi, gaya, dan perubahan alam' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Tubuh, ekosistem, listrik, dan tata surya' }
  };
  const ipsPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Diri, keluarga, tempat, dan lingkungan sekitar' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Peta, kebutuhan, kegiatan ekonomi, dan keberagaman' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Wilayah, sumber daya, ekonomi, dan budaya Indonesia' }
  };
  const englishPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Salam, kosakata, dan benda sekitar' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Kalimat sederhana, aktivitas, dan waktu' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Tata bahasa dasar, bacaan, dan komunikasi' }
  };
  const indonesianPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Membaca, kosakata, dan kalimat sederhana' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Bacaan, tata bahasa, dan karya sastra' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Pemahaman bacaan, ejaan, dan berkomunikasi' }
  };
  const paiPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Al-Qur’an, iman, akhlak, ibadah, dan kisah nabi' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Surah, sifat Allah, akhlak, salat, dan sirah Makkah' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Hadis, hari akhir, muamalah, puasa, dan sejarah Islam' }
  };
  const pancasilaPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Pancasila, aturan, keberagaman, dan lingkungan sekitar' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Nilai Pancasila, hak-kewajiban, dan persatuan' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Sejarah Pancasila, norma, musyawarah, dan NKRI' }
  };
  const pjokPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Gerak dasar, kerja sama, hidup aktif, dan aman' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Keterampilan olahraga, fair play, kebugaran, dan cedera ringan' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Strategi gerak, permainan inklusif, gizi, dan keselamatan' }
  };
  const seniBudayaPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Unsur rupa, bunyi, gerak, dan ekspresi' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Karya rupa, irama, tari, dan bermain peran' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Apresiasi, kreasi, budaya, dan pertunjukan' }
  };
  const subjectInfo = {
    matematika: { label: 'Matematika', phaseInfo },
    ipa: { label: 'IPA', phaseInfo: ipaPhaseInfo },
    ips: { label: 'IPS', phaseInfo: ipsPhaseInfo },
    'bahasa-inggris': { label: 'Bahasa Inggris', phaseInfo: englishPhaseInfo },
    'bahasa-indonesia': { label: 'Bahasa Indonesia', phaseInfo: indonesianPhaseInfo },
    'pai-budi-pekerti': { label: 'PAI dan Budi Pekerti', phaseInfo: paiPhaseInfo },
    'pendidikan-pancasila': { label: 'Pendidikan Pancasila', phaseInfo: pancasilaPhaseInfo },
    pjok: { label: 'PJOK', phaseInfo: pjokPhaseInfo },
    'seni-budaya': { label: 'Seni Budaya', phaseInfo: seniBudayaPhaseInfo }
  };
  const slotCounts = {
    A: { penjumlahan: 10, pengurangan: 10 },
    B: { penjumlahan: 5, pengurangan: 5, perkalian: 5, pembagian: 5 },
    C: { penjumlahan: 5, pengurangan: 5, perkalian: 5, pembagian: 5 }
  };

  function ipasEntry(id, topic, format, text, correct, distractors, explanation, illustration) {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  function ipsEntry(id, topic, format, text, correct, distractors, explanation, illustration = 'ips-map') {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  function englishEntry(id, topic, format, text, correct, distractors, explanation, illustration = 'english-abc') {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  function indonesianEntry(id, topic, format, text, correct, distractors, explanation, illustration = 'bahasa-indonesia-book') {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  function paiEntry(id, topic, format, text, correct, distractors, explanation, illustration = 'pai-quran') {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  function pancasilaEntry(id, topic, format, text, correct, distractors, explanation, illustration = 'pancasila-flag') {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  function pjokEntry(id, topic, format, text, correct, distractors, explanation, illustration = 'pjok-ball') {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  function seniBudayaEntry(id, topic, format, text, correct, distractors, explanation, illustration = 'seni-budaya-art') {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  const baseIpaBanks = {
    A: [
      ipasEntry('a-mata', 'pancaindra', 'story', 'Rani ingin melihat warna bunga. Alat indra yang digunakan adalah …', 'mata', ['telinga', 'hidung'], 'Mata digunakan untuk melihat warna, bentuk, dan ukuran benda.', 'ipas-senses'),
      ipasEntry('a-telinga', 'pancaindra', 'direct', 'Alat indra untuk mendengar bunyi adalah …', 'telinga', ['mata', 'kulit'], 'Telinga digunakan untuk mendengar bunyi.', 'ipas-senses'),
      ipasEntry('a-hidung', 'pancaindra', 'direct', 'Kita mencium aroma makanan menggunakan …', 'hidung', ['mata', 'tangan'], 'Hidung digunakan untuk mencium berbagai aroma.', 'ipas-senses'),
      ipasEntry('a-kaki', 'tubuh', 'story', 'Bagian tubuh yang digunakan untuk berjalan adalah …', 'kaki', ['telinga', 'rambut'], 'Kaki membantu tubuh berdiri, berjalan, dan berlari.', 'ipas-body'),
      ipasEntry('a-tumbuh', 'makhluk-hidup', 'direct', 'Salah satu ciri makhluk hidup adalah …', 'dapat tumbuh', ['tidak membutuhkan air', 'tidak pernah berubah'], 'Makhluk hidup dapat tumbuh dan berkembang.', 'ipas-living'),
      ipasEntry('a-hewan', 'kebutuhan-hidup', 'story', 'Agar tetap hidup, hewan membutuhkan …', 'makanan dan air', ['batu dan pasir', 'mainan dan buku'], 'Hewan membutuhkan makanan dan air untuk hidup.', 'ipas-living'),
      ipasEntry('a-tanaman', 'kebutuhan-hidup', 'direct', 'Tumbuhan membutuhkan air, udara, dan … untuk tumbuh.', 'cahaya matahari', ['suara keras', 'asap kendaraan'], 'Cahaya matahari membantu tumbuhan tumbuh dan membuat makanan.', 'ipas-plant'),
      ipasEntry('a-benda-batu', 'benda', 'direct', 'Contoh benda tak hidup adalah …', 'batu', ['kucing', 'pohon'], 'Batu tidak bernapas, tumbuh, atau berkembang biak sehingga termasuk benda tak hidup.', 'ipas-living'),
      ipasEntry('a-padat', 'benda', 'story', 'Buku termasuk benda …', 'padat', ['cair', 'gas'], 'Buku memiliki bentuk yang tetap sehingga termasuk benda padat.', 'ipas-solids'),
      ipasEntry('a-cair', 'benda', 'direct', 'Contoh benda cair adalah …', 'air', ['pensil', 'udara'], 'Air dapat mengalir dan mengikuti bentuk wadahnya.', 'ipas-solids'),
      ipasEntry('a-tangan-bersih', 'kesehatan', 'story', 'Sebelum makan, sebaiknya kita …', 'mencuci tangan', ['bermain tanah', 'tidur di lantai'], 'Mencuci tangan membantu membersihkan kuman sebelum makan.', 'ipas-health'),
      ipasEntry('a-makanan-sehat', 'kesehatan', 'direct', 'Contoh makanan yang baik untuk kesehatan adalah …', 'sayur dan buah', ['permen saja', 'minuman bersoda saja'], 'Sayur dan buah mengandung vitamin serta membantu menjaga kesehatan tubuh.', 'ipas-health'),
      ipasEntry('a-siang', 'waktu', 'direct', 'Benda langit yang biasanya tampak terang pada siang hari adalah …', 'Matahari', ['Bulan', 'pelangi'], 'Matahari merupakan sumber cahaya utama pada siang hari.', 'ipas-sky'),
      ipasEntry('a-malam', 'waktu', 'story', 'Saat malam cerah, kita dapat melihat … di langit.', 'Bulan dan bintang', ['pelangi dan awan hitam', 'Matahari dan petir'], 'Bulan dan bintang dapat terlihat di langit pada malam yang cerah.', 'ipas-sky'),
      ipasEntry('a-hujan', 'cuaca', 'direct', 'Air yang jatuh dari awan disebut …', 'hujan', ['angin', 'kabut'], 'Hujan adalah air yang jatuh dari awan ke permukaan Bumi.', 'ipas-weather'),
      ipasEntry('a-payung', 'cuaca', 'story', 'Ketika hujan turun, benda yang membantu melindungi tubuh adalah …', 'payung', ['kipas', 'kacamata hitam'], 'Payung membantu melindungi tubuh dari air hujan.', 'ipas-weather'),
      ipasEntry('a-akar', 'tumbuhan', 'direct', 'Bagian tumbuhan yang menyerap air dari tanah adalah …', 'akar', ['bunga', 'buah'], 'Akar menyerap air dan mineral dari tanah serta membantu menambatkan tumbuhan.', 'ipas-plant'),
      ipasEntry('a-ikan', 'habitat', 'story', 'Tempat hidup ikan yang tepat adalah …', 'air', ['gurun pasir', 'atas pohon'], 'Ikan bernapas dan bergerak di lingkungan air.', 'ipas-habitat'),
      ipasEntry('a-sampah', 'lingkungan', 'direct', 'Sampah sebaiknya dibuang ke …', 'tempat sampah', ['sungai', 'jalan'], 'Membuang sampah pada tempatnya membantu menjaga lingkungan tetap bersih.', 'ipas-environment'),
      ipasEntry('a-suara', 'pancaindra', 'direct', 'Bunyi dapat kita dengar menggunakan …', 'telinga', ['mata', 'lidah'], 'Telinga menerima bunyi sehingga kita dapat mendengarnya.', 'ipas-senses')
    ],
    B: [
      ipasEntry('b-akar', 'tumbuhan', 'story', 'Akar pada tumbuhan berfungsi untuk …', 'menyerap air dan mineral', ['membuat suara', 'menangkap cahaya dengan telinga'], 'Akar menyerap air dan mineral dari tanah serta menahan tumbuhan.', 'ipas-plant'),
      ipasEntry('b-daun', 'tumbuhan', 'direct', 'Daun membantu tumbuhan membuat makanan dengan bantuan …', 'cahaya matahari', ['bunyi', 'batu'], 'Daun menggunakan cahaya matahari untuk membantu proses pembuatan makanan.', 'ipas-plant'),
      ipasEntry('b-batang', 'tumbuhan', 'direct', 'Batang berfungsi mengangkut air dari akar ke …', 'daun', ['tanah di luar akar', 'batu'], 'Batang menyalurkan air dan mineral dari akar ke bagian tumbuhan lainnya.', 'ipas-plant'),
      ipasEntry('b-rantai-awal', 'ekosistem', 'story', 'Dalam rantai makanan, sumber energi utama bagi tumbuhan adalah …', 'Matahari', ['Bulan', 'angin malam'], 'Tumbuhan menggunakan energi cahaya Matahari untuk membuat makanan.', 'ipas-food-chain'),
      ipasEntry('b-produsen', 'ekosistem', 'direct', 'Makhluk hidup yang membuat makanan sendiri disebut …', 'produsen', ['konsumen', 'pengurai'], 'Tumbuhan hijau disebut produsen karena dapat membuat makanan sendiri.', 'ipas-food-chain'),
      ipasEntry('b-herbivor', 'hewan', 'direct', 'Hewan yang memakan tumbuhan disebut …', 'herbivor', ['karnivor', 'omnivor'], 'Herbivor adalah hewan pemakan tumbuhan, misalnya sapi dan kambing.', 'ipas-animals'),
      ipasEntry('b-kupu', 'hewan', 'story', 'Urutan perubahan kupu-kupu yang benar setelah telur adalah …', 'ulat', ['ikan', 'anak ayam'], 'Kupu-kupu mengalami tahap telur, ulat, kepompong, lalu kupu-kupu dewasa.', 'ipas-animals'),
      ipasEntry('b-gaya-gerak', 'gaya', 'direct', 'Gaya dapat menyebabkan benda yang diam menjadi …', 'bergerak', ['menghilang', 'berubah menjadi air'], 'Dorongan atau tarikan dapat membuat benda bergerak.', 'ipas-force'),
      ipasEntry('b-gaya-arah', 'gaya', 'story', 'Saat bola ditendang ke depan, arah gerak bola dipengaruhi oleh …', 'arah gaya', ['warna bola', 'ukuran lapangan saja'], 'Arah tendangan memberikan arah gaya sehingga bola bergerak ke depan.', 'ipas-force'),
      ipasEntry('b-gesekan', 'gaya', 'direct', 'Ban sepeda dapat berhenti karena adanya gaya …', 'gesek', ['cahaya', 'magnet bumi'], 'Gaya gesek antara rem dan roda membantu memperlambat atau menghentikan sepeda.', 'ipas-force'),
      ipasEntry('b-matahari', 'energi', 'direct', 'Sumber energi terbesar bagi kehidupan di Bumi adalah …', 'Matahari', ['batu', 'pasir'], 'Matahari memberikan cahaya dan panas yang dibutuhkan banyak makhluk hidup.', 'ipas-energy'),
      ipasEntry('b-lampu', 'energi', 'story', 'Pada lampu yang menyala, energi listrik berubah menjadi energi …', 'cahaya', ['bunyi saja', 'gerak tanah'], 'Lampu mengubah energi listrik menjadi cahaya dan sedikit panas.', 'ipas-energy'),
      ipasEntry('b-mencair', 'perubahan-wujud', 'direct', 'Es batu yang dibiarkan di tempat hangat akan …', 'mencair', ['membeku', 'mengembun'], 'Mencair adalah perubahan wujud dari padat menjadi cair.', 'ipas-water-cycle'),
      ipasEntry('b-mengembun', 'perubahan-wujud', 'story', 'Titik air di luar gelas berisi es terbentuk karena uap air …', 'mengembun', ['membeku menjadi batu', 'mendidih'], 'Mengembun adalah perubahan wujud gas menjadi cair pada permukaan yang dingin.', 'ipas-water-cycle'),
      ipasEntry('b-menguap', 'siklus-air', 'direct', 'Air laut dapat berubah menjadi uap karena dipanaskan oleh …', 'Matahari', ['Bulan', 'tanah kering saja'], 'Panas Matahari membantu air menguap dalam siklus air.', 'ipas-water-cycle'),
      ipasEntry('b-hemat-air', 'lingkungan', 'story', 'Tindakan yang menghemat air adalah …', 'menutup keran setelah digunakan', ['membiarkan keran terbuka', 'bermain air sepanjang hari'], 'Menutup keran setelah digunakan mencegah air terbuang.', 'ipas-environment'),
      ipasEntry('b-kompas', 'kenampakan', 'direct', 'Alat untuk menunjukkan arah mata angin disebut …', 'kompas', ['termometer', 'barometer'], 'Kompas digunakan untuk membantu menentukan arah mata angin.', 'ipas-map'),
      ipasEntry('b-peta', 'kenampakan', 'direct', 'Keterangan simbol-simbol pada peta disebut …', 'legenda', ['judul cerita', 'daftar belanja'], 'Legenda menjelaskan arti simbol yang digunakan pada peta.', 'ipas-map'),
      ipasEntry('b-bunyi', 'energi', 'story', 'Bunyi dapat terdengar karena adanya benda yang …', 'bergetar', ['diam selamanya', 'tidak memiliki bentuk'], 'Bunyi dihasilkan oleh benda yang bergetar.', 'ipas-sound'),
      ipasEntry('b-lingkungan', 'lingkungan', 'direct', 'Menanam pohon membantu lingkungan karena pohon menghasilkan …', 'oksigen', ['asap', 'sampah plastik'], 'Tumbuhan menghasilkan oksigen dan membantu membuat udara lebih bersih.', 'ipas-environment')
    ],
    C: [
      ipasEntry('c-jantung', 'tubuh', 'story', 'Organ yang memompa darah ke seluruh tubuh adalah …', 'jantung', ['paru-paru', 'lambung'], 'Jantung memompa darah agar oksigen dan zat makanan beredar ke seluruh tubuh.', 'ipas-body'),
      ipasEntry('c-paru', 'tubuh', 'direct', 'Pertukaran oksigen dan karbon dioksida terjadi di …', 'paru-paru', ['tulang', 'kulit rambut'], 'Paru-paru menjadi tempat pertukaran gas saat kita bernapas.', 'ipas-body'),
      ipasEntry('c-usus', 'tubuh', 'direct', 'Sebagian besar sari-sari makanan diserap oleh …', 'usus halus', ['kerongkongan', 'hidung'], 'Usus halus menyerap sari-sari makanan untuk digunakan tubuh.', 'ipas-body'),
      ipasEntry('c-fotosintesis', 'tumbuhan', 'story', 'Dalam fotosintesis, tumbuhan menggunakan air dan … dari udara.', 'karbon dioksida', ['minyak bumi', 'asap kendaraan'], 'Tumbuhan menggunakan air dan karbon dioksida dengan bantuan cahaya untuk membuat makanan.', 'ipas-plant'),
      ipasEntry('c-rantai-energi', 'ekosistem', 'direct', 'Energi pada rantai makanan pada akhirnya berasal dari …', 'Matahari', ['tanah saja', 'Bulan'], 'Matahari adalah sumber energi awal bagi tumbuhan dan rantai makanan.', 'ipas-food-chain'),
      ipasEntry('c-pengurai', 'ekosistem', 'story', 'Jamur dan bakteri dalam ekosistem berperan sebagai …', 'pengurai', ['produsen utama', 'benda mati'], 'Pengurai menguraikan sisa makhluk hidup menjadi zat yang dapat kembali ke tanah.', 'ipas-food-chain'),
      ipasEntry('c-rangkaian', 'listrik', 'direct', 'Lampu dapat menyala jika rangkaian listrik dalam keadaan …', 'tertutup', ['terputus', 'tanpa sumber energi'], 'Rangkaian tertutup memberi jalan bagi arus listrik untuk mengalir.', 'ipas-electricity'),
      ipasEntry('c-konduktor', 'listrik', 'story', 'Bahan yang mudah menghantarkan listrik adalah …', 'tembaga', ['karet', 'kayu kering'], 'Tembaga merupakan penghantar listrik yang baik dan banyak digunakan pada kabel.', 'ipas-electricity'),
      ipasEntry('c-magnet', 'magnet', 'direct', 'Benda yang kuat ditarik magnet adalah benda yang mengandung …', 'besi', ['kertas', 'kaca'], 'Magnet menarik benda tertentu yang mengandung besi atau baja.', 'ipas-magnet'),
      ipasEntry('c-matahari-tata-surya', 'tata-surya', 'story', 'Pusat tata surya adalah …', 'Matahari', ['Bumi', 'Bulan'], 'Matahari menjadi pusat tata surya dan planet-planet mengitarinya.', 'ipas-solar-system'),
      ipasEntry('c-rotasi', 'tata-surya', 'direct', 'Peristiwa siang dan malam terjadi karena Bumi melakukan …', 'rotasi', ['penguapan', 'fotosintesis'], 'Rotasi adalah perputaran Bumi pada porosnya yang menyebabkan siang dan malam.', 'ipas-solar-system'),
      ipasEntry('c-bulan', 'tata-surya', 'direct', 'Bulan tampak bercahaya karena … cahaya Matahari.', 'memantulkan', ['menghasilkan sendiri', 'menyerap semua'], 'Bulan tampak terang karena memantulkan cahaya Matahari.', 'ipas-solar-system'),
      ipasEntry('c-presipitasi', 'siklus-air', 'story', 'Air yang jatuh dari awan ke Bumi dalam siklus air disebut …', 'presipitasi', ['rotasi', 'fotosintesis'], 'Presipitasi adalah turunnya air dari awan, misalnya sebagai hujan.', 'ipas-water-cycle'),
      ipasEntry('c-terbarukan', 'energi', 'direct', 'Contoh sumber energi terbarukan adalah energi …', 'matahari', ['batu bara', 'minyak bumi'], 'Energi matahari dapat digunakan berulang kali sehingga termasuk energi terbarukan.', 'ipas-energy'),
      ipasEntry('c-polusi', 'lingkungan', 'story', 'Asap kendaraan yang berlebihan dapat menyebabkan pencemaran …', 'udara', ['tanah saja', 'suara di dalam buku'], 'Asap kendaraan mencemari udara dan dapat mengganggu kesehatan.', 'ipas-environment'),
      ipasEntry('c-kaktus', 'adaptasi', 'direct', 'Duri pada kaktus membantu tumbuhan mengurangi …', 'penguapan air', ['cahaya Matahari', 'jumlah akar'], 'Duri kaktus membantu mengurangi penguapan dan melindungi diri.', 'ipas-plant'),
      ipasEntry('c-predator', 'ekosistem', 'story', 'Jika jumlah pemangsa berkurang, jumlah hewan yang dimangsanya cenderung …', 'bertambah', ['selalu menjadi nol', 'tetap tidak mungkin berubah'], 'Berkurangnya pemangsa dapat membuat hewan mangsa bertambah jika faktor lain tetap.', 'ipas-food-chain'),
      ipasEntry('c-katrol', 'gaya', 'direct', 'Alat sederhana yang dapat membantu mengangkat beban dengan tali adalah …', 'katrol', ['termometer', 'kompas'], 'Katrol membantu mengubah arah gaya dan memudahkan mengangkat beban.', 'ipas-force'),
      ipasEntry('c-perubahan-kimia', 'perubahan-materi', 'story', 'Kertas yang dibakar berubah menjadi abu. Peristiwa ini menghasilkan …', 'zat baru', ['es batu', 'air hujan yang sama'], 'Pembakaran menghasilkan abu dan gas sehingga termasuk perubahan kimia yang menghasilkan zat baru.', 'ipas-solids'),
      ipasEntry('c-pengelolaan', 'lingkungan', 'direct', 'Cara mengurangi sampah plastik adalah …', 'menggunakan kembali tas belanja', ['membuang plastik ke sungai', 'membakar semua sampah sembarangan'], 'Menggunakan kembali tas belanja dapat mengurangi penggunaan plastik sekali pakai.', 'ipas-environment')
    ]
  };

  const ipaBanks = {
    A: baseIpaBanks.A,
    B: baseIpaBanks.B.filter(item => !['b-kompas', 'b-peta'].includes(item.id)).concat([
      ipasEntry('b-sifat-cahaya', 'cahaya', 'direct', 'Cahaya merambat dalam garis …', 'lurus', ['berkelok tanpa arah', 'hanya ke bawah'], 'Cahaya pada umumnya merambat dalam garis lurus.', 'ipas-energy'),
      ipasEntry('b-sumber-panas', 'energi', 'story', 'Sumber panas alami yang membantu mengeringkan pakaian adalah …', 'Matahari', ['Bulan', 'batu'], 'Matahari merupakan sumber panas alami bagi Bumi.', 'ipas-energy')
    ]),
    C: baseIpaBanks.C
  };

  const ipsBanks = {
    A: [
      ipsEntry('a-identitas', 'diri-dan-keluarga', 'story', 'Nama, umur, dan hobi merupakan bagian dari … diri.', 'identitas', ['cuaca', 'sumber daya'], 'Identitas adalah ciri yang membantu mengenali diri seseorang.'),
      ipsEntry('a-keluarga', 'diri-dan-keluarga', 'direct', 'Orang yang tinggal dan saling menyayangi dalam satu rumah disebut …', 'keluarga', ['pasar', 'pabrik'], 'Keluarga adalah kelompok orang yang memiliki hubungan dan saling menyayangi.'),
      ipsEntry('a-peran-keluarga', 'diri-dan-keluarga', 'story', 'Membantu merapikan rumah merupakan contoh … di keluarga.', 'tanggung jawab', ['permainan', 'perjalanan'], 'Setiap anggota keluarga memiliki peran dan tanggung jawab.'),
      ipsEntry('a-kebutuhan', 'kebutuhan', 'direct', 'Makanan, pakaian, dan tempat tinggal termasuk … manusia.', 'kebutuhan pokok', ['keinginan mewah', 'alat transportasi'], 'Kebutuhan pokok diperlukan agar manusia dapat hidup dengan baik.'),
      ipsEntry('a-aturan', 'aturan', 'story', 'Aturan dibuat agar kehidupan bersama menjadi …', 'tertib', ['kacau', 'berbahaya'], 'Aturan membantu kehidupan bersama berjalan tertib dan aman.'),
      ipsEntry('a-rumah', 'tempat', 'direct', 'Tempat tinggal bersama keluarga disebut …', 'rumah', ['sawah', 'terminal'], 'Rumah menjadi tempat tinggal dan berkumpul bersama keluarga.'),
      ipsEntry('a-lingkungan-alami', 'lingkungan', 'direct', 'Contoh lingkungan alami adalah …', 'sungai', ['gedung sekolah', 'jalan raya'], 'Sungai terbentuk secara alami, sedangkan sekolah dan jalan dibuat manusia.'),
      ipsEntry('a-lingkungan-buatan', 'lingkungan', 'story', 'Taman yang dibuat di dekat sekolah termasuk lingkungan …', 'buatan', ['alami', 'luar angkasa'], 'Taman sekolah dibuat dan dirawat oleh manusia.'),
      ipsEntry('a-arah-kanan', 'tempat', 'direct', 'Lawan arah kanan adalah …', 'kiri', ['atas', 'depan'], 'Kanan dan kiri merupakan arah yang berlawanan.'),
      ipsEntry('a-peta-sederhana', 'peta', 'story', 'Gambar sederhana yang menunjukkan letak rumah dan sekolah disebut …', 'peta', ['cerita', 'jadwal makan'], 'Peta dapat menunjukkan letak suatu tempat.'),
      ipsEntry('a-fasilitas', 'lingkungan', 'direct', 'Tempat untuk belajar disebut …', 'sekolah', ['pasar malam', 'bandara'], 'Sekolah adalah tempat untuk belajar dan memperoleh pendidikan.'),
      ipsEntry('a-pekerjaan', 'kegiatan-ekonomi', 'story', 'Orang yang mengajar murid di sekolah bekerja sebagai …', 'guru', ['nelayan', 'petani'], 'Guru bertugas mengajar dan membimbing murid.'),
      ipsEntry('a-pasar', 'kegiatan-ekonomi', 'direct', 'Tempat bertemunya penjual dan pembeli disebut …', 'pasar', ['perpustakaan', 'lapangan'], 'Pasar merupakan tempat kegiatan jual beli.'),
      ipsEntry('a-membeli', 'kegiatan-ekonomi', 'story', 'Saat membeli pensil, kita menyerahkan … kepada penjual.', 'uang', ['daun kering', 'batu'], 'Uang digunakan sebagai alat pembayaran dalam kegiatan jual beli.'),
      ipsEntry('a-transportasi', 'kegiatan-sehari-hari', 'direct', 'Kendaraan yang berjalan di atas rel disebut …', 'kereta api', ['perahu', 'sepeda air'], 'Kereta api bergerak di atas rel.'),
      ipsEntry('a-waktu', 'perubahan-waktu', 'story', 'Kegiatan sarapan biasanya dilakukan pada …', 'pagi hari', ['tengah malam', 'sore setelah tidur malam'], 'Sarapan umumnya dilakukan pada pagi hari sebelum beraktivitas.'),
      ipsEntry('a-budaya', 'keberagaman', 'direct', 'Tarian, lagu, dan pakaian daerah merupakan bagian dari …', 'budaya', ['cuaca', 'benda langit'], 'Tarian, lagu, dan pakaian daerah merupakan hasil budaya masyarakat.'),
      ipsEntry('a-kerja-sama', 'kehidupan-bersama', 'story', 'Membersihkan lingkungan bersama tetangga adalah contoh …', 'gotong royong', ['perselisihan', 'perlombaan pribadi'], 'Gotong royong adalah bekerja bersama untuk tujuan yang baik.'),
      ipsEntry('a-sejarah-keluarga', 'perubahan-waktu', 'story', 'Foto lama keluarga dapat membantu kita mengetahui …', 'peristiwa masa lalu', ['ramalan cuaca', 'harga barang besok'], 'Foto lama merupakan sumber informasi tentang peristiwa masa lalu.'),
      ipsEntry('a-menjaga-lingkungan', 'lingkungan', 'story', 'Menanam pohon di sekitar rumah membantu membuat lingkungan …', 'lebih hijau dan nyaman', ['lebih kotor', 'tidak dapat dihuni'], 'Menanam pohon membantu menjaga lingkungan tetap hijau dan nyaman.')
    ],
    B: [
      ipsEntry('b-komponen-peta', 'peta', 'direct', 'Arah mata angin, simbol, dan legenda merupakan bagian dari …', 'peta', ['cerita rakyat', 'daftar belanja'], 'Peta menggunakan komponen seperti arah, simbol, dan legenda.'),
      ipsEntry('b-legenda', 'peta', 'direct', 'Keterangan yang menjelaskan arti simbol pada peta disebut …', 'legenda', ['judul buku', 'daftar hadir'], 'Legenda membantu pembaca memahami simbol pada peta.'),
      ipsEntry('b-arah-utara', 'peta', 'story', 'Pada peta, arah yang biasanya berada di bagian atas adalah …', 'utara', ['selatan', 'barat'], 'Dalam peta, bagian atas biasanya menunjukkan arah utara.'),
      ipsEntry('b-kenampakan-alam', 'kenampakan-wilayah', 'direct', 'Gunung, sungai, dan pantai termasuk kenampakan …', 'alam', ['buatan', 'perdagangan'], 'Gunung, sungai, dan pantai terbentuk secara alami.'),
      ipsEntry('b-kenampakan-buatan', 'kenampakan-wilayah', 'story', 'Jembatan dan waduk termasuk kenampakan …', 'buatan', ['alam', 'langit'], 'Jembatan dan waduk dibuat manusia untuk kebutuhan tertentu.'),
      ipsEntry('b-sumber-daya', 'sumber-daya', 'direct', 'Hutan, laut, dan tanah termasuk … alam.', 'sumber daya', ['alat pembayaran', 'aturan sekolah'], 'Hutan, laut, dan tanah merupakan sumber daya alam.'),
      ipsEntry('b-kebutuhan-keinginan', 'kebutuhan', 'story', 'Membeli makanan karena lapar merupakan contoh memenuhi …', 'kebutuhan', ['keinginan saja', 'hiburan'], 'Makanan diperlukan untuk memenuhi kebutuhan hidup.'),
      ipsEntry('b-produksi', 'kegiatan-ekonomi', 'direct', 'Kegiatan membuat atau menghasilkan barang disebut …', 'produksi', ['konsumsi', 'distribusi'], 'Produksi adalah kegiatan menghasilkan barang atau jasa.'),
      ipsEntry('b-distribusi', 'kegiatan-ekonomi', 'direct', 'Kegiatan menyalurkan barang dari produsen kepada konsumen disebut …', 'distribusi', ['produksi', 'rekreasi'], 'Distribusi menyalurkan barang agar sampai kepada konsumen.'),
      ipsEntry('b-konsumsi', 'kegiatan-ekonomi', 'story', 'Makan nasi dan menggunakan pakaian merupakan kegiatan …', 'konsumsi', ['produksi', 'distribusi'], 'Konsumsi adalah kegiatan menggunakan barang atau jasa.'),
      ipsEntry('b-petani', 'pekerjaan', 'direct', 'Orang yang menanam dan merawat tanaman pangan disebut …', 'petani', ['pilot', 'arsitek'], 'Petani bekerja menghasilkan bahan pangan dari kegiatan bercocok tanam.'),
      ipsEntry('b-nelayan', 'pekerjaan', 'direct', 'Orang yang menangkap ikan di laut disebut …', 'nelayan', ['penjahit', 'pustakawan'], 'Nelayan bekerja menangkap ikan atau hasil laut.'),
      ipsEntry('b-keragaman-bahasa', 'keberagaman', 'story', 'Perbedaan bahasa daerah di Indonesia menunjukkan adanya … budaya.', 'keragaman', ['keseragaman', 'perselisihan'], 'Bahasa daerah merupakan salah satu bentuk keragaman budaya.'),
      ipsEntry('b-rumah-adat', 'keberagaman', 'direct', 'Rumah adat merupakan contoh … budaya suatu daerah.', 'warisan', ['bencana', 'alat ukur'], 'Rumah adat menjadi warisan budaya yang perlu dikenal dan dijaga.'),
      ipsEntry('b-toleransi', 'kehidupan-bersama', 'story', 'Sikap yang tepat saat teman menampilkan budaya daerahnya adalah …', 'menghargai', ['mengejek', 'melarang'], 'Menghargai budaya teman membantu menjaga hubungan yang rukun.'),
      ipsEntry('b-sumber-sejarah', 'sejarah', 'direct', 'Benda atau tulisan yang memberi informasi tentang masa lalu disebut … sejarah.', 'sumber', ['cuaca', 'kebutuhan'], 'Sumber sejarah membantu kita mengetahui peristiwa masa lalu.'),
      ipsEntry('b-urutan-waktu', 'sejarah', 'story', 'Urutan kejadian dari yang lebih dahulu ke yang lebih kemudian disebut …', 'kronologi', ['distribusi', 'komposisi'], 'Kronologi menyusun peristiwa berdasarkan urutan waktunya.'),
      ipsEntry('b-perubahan-desa', 'perubahan-sosial', 'story', 'Desa yang dahulu belum memiliki jalan kini memiliki jalan beraspal. Hal ini menunjukkan …', 'perubahan lingkungan', ['tidak ada perubahan', 'perubahan musim saja'], 'Pembangunan jalan menunjukkan adanya perubahan pada lingkungan masyarakat.'),
      ipsEntry('b-hemat-sumber-daya', 'sumber-daya', 'story', 'Menggunakan air secukupnya merupakan cara … sumber daya alam.', 'menghemat', ['menghabiskan', 'merusak'], 'Menghemat sumber daya membantu menjaga ketersediaannya.'),
      ipsEntry('b-kerja-kelompok', 'kehidupan-bersama', 'story', 'Dalam kegiatan kelas, pembagian tugas membantu pekerjaan menjadi …', 'lebih teratur', ['lebih kacau', 'tidak selesai'], 'Pembagian tugas membuat kerja sama berjalan lebih teratur.')
    ],
    C: [
      ipsEntry('c-wilayah-indonesia', 'wilayah', 'direct', 'Indonesia merupakan negara kepulauan karena memiliki banyak …', 'pulau', ['gurun salju', 'benua tunggal'], 'Indonesia terdiri atas banyak pulau yang dipisahkan oleh laut.'),
      ipsEntry('c-provinsi', 'wilayah', 'story', 'Provinsi merupakan bagian dari wilayah …', 'Indonesia', ['negara lain', 'samudra saja'], 'Provinsi adalah salah satu pembagian wilayah administratif Indonesia.'),
      ipsEntry('c-dataran', 'kenampakan-wilayah', 'direct', 'Wilayah yang relatif datar dan cocok untuk pertanian disebut …', 'dataran rendah', ['palung laut', 'puncak awan'], 'Dataran rendah memiliki permukaan yang relatif datar dan banyak dimanfaatkan untuk kegiatan manusia.'),
      ipsEntry('c-pesisir', 'kenampakan-wilayah', 'story', 'Masyarakat yang tinggal di wilayah pesisir banyak memanfaatkan sumber daya …', 'laut', ['salju', 'pegunungan es'], 'Wilayah pesisir dekat dengan laut sehingga banyak memanfaatkan hasil laut.'),
      ipsEntry('c-sda-terbarukan', 'sumber-daya', 'direct', 'Contoh sumber daya alam yang dapat diperbarui adalah …', 'hutan yang dirawat', ['minyak bumi', 'batu bara'], 'Hutan dapat diperbarui jika dikelola dan ditanam kembali dengan baik.'),
      ipsEntry('c-sda-berkelanjutan', 'sumber-daya', 'story', 'Pemanfaatan sumber daya alam secara berkelanjutan berarti …', 'menggunakannya dengan bijak agar tetap tersedia', ['menghabiskannya secepat mungkin', 'membuangnya setelah digunakan'], 'Pemanfaatan berkelanjutan menjaga sumber daya agar dapat digunakan dalam jangka panjang.'),
      ipsEntry('c-sektor-ekonomi', 'kegiatan-ekonomi', 'direct', 'Kegiatan menanam padi termasuk bidang ekonomi …', 'pertanian', ['jasa penerbangan', 'perbankan saja'], 'Menanam padi merupakan kegiatan di bidang pertanian.'),
      ipsEntry('c-jasa', 'kegiatan-ekonomi', 'story', 'Guru, dokter, dan sopir menghasilkan …', 'jasa', ['bahan tambang', 'tanaman pangan'], 'Guru, dokter, dan sopir memberikan layanan atau jasa.'),
      ipsEntry('c-harga', 'kegiatan-ekonomi', 'story', 'Jika barang langka tetapi banyak orang membutuhkannya, harga barang cenderung …', 'naik', ['selalu turun', 'menjadi gratis'], 'Kelangkaan dan banyaknya permintaan dapat membuat harga meningkat.'),
      ipsEntry('c-kegiatan-ekonomi', 'kegiatan-ekonomi', 'story', 'Kegiatan ekonomi meliputi produksi, distribusi, dan …', 'konsumsi', ['rotasi', 'presipitasi'], 'Produksi, distribusi, dan konsumsi merupakan rangkaian kegiatan ekonomi.'),
      ipsEntry('c-ketergantungan', 'kehidupan-bersama', 'story', 'Petani membutuhkan pedagang untuk … hasil panennya.', 'menyalurkan', ['menghilangkan', 'menyembunyikan'], 'Pedagang membantu menyalurkan hasil panen kepada konsumen.'),
      ipsEntry('c-globalisasi', 'perubahan-sosial', 'direct', 'Hubungan antarwilayah yang semakin mudah karena teknologi komunikasi merupakan contoh …', 'globalisasi', ['isolasi', 'perubahan cuaca'], 'Teknologi membuat hubungan dan pertukaran informasi antarwilayah semakin mudah.'),
      ipsEntry('c-pelestarian-budaya', 'keberagaman', 'story', 'Mempelajari dan menampilkan tari daerah merupakan cara … budaya.', 'melestarikan', ['menghilangkan', 'mengabaikan'], 'Mempelajari dan menampilkan budaya membantu menjaga kelestariannya.'),
      ipsEntry('c-warisan-benda', 'keberagaman', 'direct', 'Candi, rumah adat, dan kain tradisional termasuk warisan budaya …', 'benda', ['tak terlihat sama sekali', 'cuaca'], 'Candi, rumah adat, dan kain tradisional merupakan warisan budaya berbentuk benda.'),
      ipsEntry('c-warisan-takbenda', 'keberagaman', 'direct', 'Lagu daerah, cerita rakyat, dan upacara adat termasuk warisan budaya …', 'takbenda', ['tambang', 'buatan pabrik'], 'Lagu, cerita, dan upacara merupakan warisan budaya takbenda.'),
      ipsEntry('c-perubahan-teknologi', 'perubahan-sosial', 'story', 'Dahulu orang mengirim kabar lewat surat, sekarang dapat memakai pesan digital. Ini contoh perubahan …', 'teknologi komunikasi', ['bentuk muka bumi', 'musim hujan'], 'Perubahan alat komunikasi memengaruhi cara masyarakat berhubungan.'),
      ipsEntry('c-sejarah-lokal', 'sejarah', 'story', 'Mempelajari sejarah daerah membantu kita …', 'mengenal perjalanan masyarakat setempat', ['melupakan asal daerah', 'menghapus semua peninggalan'], 'Sejarah lokal membantu kita memahami perjalanan masyarakat di sekitar.'),
      ipsEntry('c-peta-skala', 'peta', 'direct', 'Perbandingan jarak pada peta dengan jarak sebenarnya disebut …', 'skala', ['legenda', 'warna'], 'Skala menunjukkan perbandingan jarak pada peta dan jarak sebenarnya.'),
      ipsEntry('c-masalah-lingkungan', 'lingkungan', 'story', 'Penebangan hutan secara berlebihan dapat menyebabkan …', 'banjir dan longsor', ['udara semakin bersih', 'tanah semakin kuat tanpa batas'], 'Hutan membantu menyerap air dan menahan tanah sehingga kerusakannya dapat memicu bencana.'),
      ipsEntry('c-tanggung-jawab', 'kehidupan-bersama', 'story', 'Menjaga fasilitas umum merupakan tanggung jawab …', 'bersama', ['satu orang saja', 'petugas tanpa bantuan'], 'Fasilitas umum digunakan banyak orang sehingga perlu dijaga bersama.')
    ]
  };

  const englishBanks = {
    A: [
      englishEntry('a-greeting-morning', 'greetings', 'story', 'What do you say when you meet your teacher in the morning?', 'Good morning', ['Good night', 'Goodbye'], 'Good morning digunakan saat menyapa seseorang pada pagi hari.'),
      englishEntry('a-how-are-you', 'greetings', 'direct', 'The correct answer to “How are you?” is …', 'I am fine, thank you.', ['I am seven years old.', 'My name is Rani.'], 'I am fine, thank you berarti Saya baik-baik saja, terima kasih.'),
      englishEntry('a-introduction', 'greetings', 'story', '“My name is Budi.” means …', 'Nama saya Budi.', ['Saya tinggal di Budi.', 'Budi adalah saudara saya.'], 'My name is Budi berarti Nama saya Budi.'),
      englishEntry('a-number-seven', 'numbers', 'direct', 'What number comes after six?', 'Seven', ['Five', 'Nine'], 'Seven adalah angka yang datang setelah six atau enam.'),
      englishEntry('a-color-banana', 'colors', 'story', 'A banana is usually …', 'yellow', ['blue', 'purple'], 'Banana atau pisang biasanya berwarna yellow atau kuning.'),
      englishEntry('a-pencil', 'classroom', 'direct', 'You write with a …', 'pencil', ['chair', 'window'], 'Pencil berarti pensil, alat yang digunakan untuk menulis.'),
      englishEntry('a-eyes', 'body-parts', 'story', 'We use our … to see.', 'eyes', ['ears', 'nose'], 'Eyes berarti mata. Mata digunakan untuk melihat.'),
      englishEntry('a-daughter', 'family', 'direct', 'A father’s girl child is his …', 'daughter', ['brother', 'uncle'], 'Daughter berarti anak perempuan.'),
      englishEntry('a-cat-sound', 'animals', 'story', 'A cat says …', 'meow', ['woof', 'quack'], 'Suara kucing dalam bahasa Inggris adalah meow.'),
      englishEntry('a-shape', 'shapes', 'direct', 'A ball is usually …', 'round', ['square', 'triangle'], 'Round berarti bulat. Bola biasanya berbentuk bulat.'),
      englishEntry('a-sunday', 'days', 'story', 'Sunday comes after …', 'Saturday', ['Monday', 'Wednesday'], 'Saturday adalah hari Sabtu, sehari sebelum Sunday atau Minggu.'),
      englishEntry('a-rain', 'weather', 'direct', 'When it rains, we use an …', 'umbrella', ['eraser', 'ruler'], 'Umbrella berarti payung, benda yang digunakan saat hujan.'),
      englishEntry('a-books', 'classroom', 'direct', 'One book, two …', 'books', ['bookes', 'book'], 'Kata book menjadi books untuk menyatakan lebih dari satu buku.'),
      englishEntry('a-on-table', 'prepositions', 'story', 'The book is … the table.', 'on', ['under', 'behind'], 'On berarti di atas. The book is on the table berarti Buku berada di atas meja.'),
      englishEntry('a-open-book', 'instructions', 'direct', '“Open your book!” means …', 'Buka bukumu!', ['Tutup pintunya!', 'Angkat tasmu!'], 'Open your book berarti Buka bukumu.'),
      englishEntry('a-borrow-pencil', 'classroom', 'story', '“Can I borrow your pencil?” The polite answer is …', 'Here you are.', ['Go to sleep.', 'I am a pencil.'], 'Here you are berarti Ini, silakan, saat memberikan sesuatu.'),
      englishEntry('a-apple', 'fruits', 'direct', 'I am red and round. I am an …', 'apple', ['orange', 'banana'], 'Apple berarti apel. Apel sering digambarkan berwarna merah dan berbentuk bulat.'),
      englishEntry('a-opposite-big', 'opposites', 'direct', 'The opposite of big is …', 'small', ['long', 'fast'], 'Small adalah lawan kata dari big atau besar.'),
      englishEntry('a-ten', 'numbers', 'story', 'Which word means angka 10?', 'ten', ['two', 'eight'], 'Ten berarti angka sepuluh.'),
      englishEntry('a-nose', 'body-parts', 'direct', 'This is my … I use it to smell.', 'nose', ['hand', 'foot'], 'Nose berarti hidung. Hidung digunakan untuk mencium bau.')
    ],
    B: [
      englishEntry('b-am-student', 'to-be', 'direct', 'I … a student.', 'am', ['is', 'are'], 'I berpasangan dengan am: I am a student.'),
      englishEntry('b-has-cats', 'have-has', 'story', 'She … two cats.', 'has', ['have', 'are'], 'She berpasangan dengan has dalam kalimat sederhana.'),
      englishEntry('b-breakfast', 'daily-activities', 'direct', 'I … breakfast every morning.', 'eat', ['eats', 'eating'], 'I eat breakfast every morning berarti Saya sarapan setiap pagi.'),
      englishEntry('b-seven-oclock', 'time', 'story', 'The clock shows 07:00. It is …', 'seven o’clock', ['twelve o’clock', 'half past seven'], 'Pukul 07.00 dalam bahasa Inggris adalah seven o’clock.'),
      englishEntry('b-tuesday', 'days', 'direct', 'What day comes after Monday?', 'Tuesday', ['Friday', 'Sunday'], 'Tuesday adalah hari Selasa, setelah Monday atau Senin.'),
      englishEntry('b-under-table', 'prepositions', 'story', 'The cat is … the table.', 'under', ['on', 'between'], 'Under berarti di bawah.'),
      englishEntry('b-children', 'plural-nouns', 'direct', 'The plural form of “child” is …', 'children', ['childs', 'childes'], 'Bentuk jamak tidak beraturan dari child adalah children.'),
      englishEntry('b-bird-fly', 'can-cannot', 'story', 'A bird can …', 'fly', ['swim under the sea', 'read a book'], 'Fly berarti terbang. Burung dapat terbang.'),
      englishEntry('b-fish-swim', 'can-cannot', 'direct', 'A fish can …', 'swim', ['walk to school', 'drive a car'], 'Swim berarti berenang. Ikan dapat berenang.'),
      englishEntry('b-hobby-reading', 'hobbies', 'story', 'Which sentence tells a hobby?', 'I like reading books.', ['I am in the classroom.', 'This is my ruler.'], 'I like reading books berarti Saya suka membaca buku dan menyatakan hobi.'),
      englishEntry('b-where-live', 'questions', 'direct', '“Where do you live?” The correct answer is …', 'I live in Bandung.', ['I am twelve.', 'It is Monday.'], 'Where do you live menanyakan tempat tinggal.'),
      englishEntry('b-taller', 'adjectives', 'story', 'A giraffe is … than a goat.', 'taller', ['short', 'shorter'], 'Taller berarti lebih tinggi. Jerapah lebih tinggi daripada kambing.'),
      englishEntry('b-goes-school', 'simple-present', 'direct', 'He … to school by bicycle.', 'goes', ['go', 'going'], 'He berpasangan dengan goes dalam kalimat simple present.'),
      englishEntry('b-do-not-like', 'simple-present', 'story', 'Choose the correct sentence.', 'I do not like spicy food.', ['I does not like spicy food.', 'I not likes spicy food.'], 'Untuk I, bentuk negatif simple present menggunakan do not.'),
      englishEntry('b-cloudy', 'weather', 'direct', 'The sky is full of clouds. It is …', 'cloudy', ['sunny', 'windy'], 'Cloudy berarti berawan.'),
      englishEntry('b-there-are', 'there-is-are', 'story', 'There … three books on the desk.', 'are', ['is', 'am'], 'Three books berjumlah lebih dari satu sehingga menggunakan there are.'),
      englishEntry('b-first', 'ordinal-numbers', 'direct', 'The ordinal number for 1 is …', 'first', ['second', 'third'], 'First berarti urutan pertama.'),
      englishEntry('b-tea', 'expressions', 'story', '“Would you like some tea?” The best answer is …', 'Yes, please.', ['I am tea.', 'No, I do.'], 'Yes, please adalah jawaban sopan untuk menerima tawaran.'),
      englishEntry('b-hospital', 'places', 'direct', 'You go to a … when you are sick.', 'hospital', ['library', 'market'], 'Hospital berarti rumah sakit.'),
      englishEntry('b-blue-bag', 'reading', 'story', 'Rina has a blue bag. What color is Rina’s bag?', 'blue', ['green', 'brown'], 'Jawaban blue diambil langsung dari kalimat Rina has a blue bag.')
    ],
    C: [
      englishEntry('c-plays-football', 'simple-present', 'story', 'My brother … football every Sunday.', 'plays', ['play', 'playing'], 'My brother adalah orang ketiga tunggal sehingga play menjadi plays.'),
      englishEntry('c-are-playing', 'present-continuous', 'direct', 'They … playing in the garden.', 'are', ['is', 'am'], 'They berpasangan dengan are dalam present continuous.'),
      englishEntry('c-went-library', 'simple-past', 'story', 'Yesterday, I … to the library.', 'went', ['go', 'goes'], 'Went adalah bentuk lampau dari go.'),
      englishEntry('c-will-visit', 'future', 'direct', 'Tomorrow, we … visit Grandma.', 'will', ['are', 'did'], 'Will digunakan untuk menyatakan kegiatan yang akan datang.'),
      englishEntry('c-between', 'prepositions', 'story', 'The library is … the bank and the post office.', 'between', ['under', 'inside'], 'Between berarti di antara dua tempat.'),
      englishEntry('c-bigger-elephant', 'comparisons', 'direct', 'An elephant is … than a cat.', 'bigger', ['big', 'small'], 'Bigger berarti lebih besar.'),
      englishEntry('c-highest', 'comparisons', 'story', 'Mount Everest is the … mountain in the world.', 'highest', ['high', 'higher'], 'Highest adalah bentuk paling dari high atau tinggi.'),
      englishEntry('c-we-pronoun', 'pronouns', 'direct', 'Sinta and I can sing. … can sing well.', 'We', ['He', 'It'], 'Sinta and I berarti Sinta dan saya, sehingga kata gantinya adalah We.'),
      englishEntry('c-his-book', 'possessives', 'story', 'This book belongs to Rafi. It is … book.', 'his', ['her', 'their'], 'His berarti milik dia laki-laki, sesuai dengan Rafi.'),
      englishEntry('c-there-are-apples', 'there-is-are', 'direct', 'There … some apples in the basket.', 'are', ['is', 'am'], 'Some apples berjumlah lebih dari satu sehingga menggunakan there are.'),
      englishEntry('c-reading-library', 'reading', 'story', 'Dina goes to the library every Saturday. She borrows books there. Where does Dina go?', 'the library', ['the hospital', 'the playground'], 'Jawaban the library terdapat pada kalimat pertama.'),
      englishEntry('c-happy-glad', 'synonyms', 'direct', 'The word that has a similar meaning to happy is …', 'glad', ['angry', 'tired'], 'Glad memiliki arti yang mirip dengan happy, yaitu senang.'),
      englishEntry('c-opposite-difficult', 'opposites', 'story', 'The opposite of difficult is …', 'easy', ['heavy', 'early'], 'Easy adalah lawan kata dari difficult atau sulit.'),
      englishEntry('c-invitation', 'expressions', 'direct', '“Would you like to join us?” The best answer is …', 'Yes, I’d love to.', ['I am twelve years old.', 'It is behind the door.'], 'Yes, I’d love to adalah jawaban yang tepat untuk menerima ajakan.'),
      englishEntry('c-turn-left', 'directions', 'story', '“Turn left” means …', 'Belok kiri.', ['Belok kanan.', 'Jalan lurus.'], 'Turn left berarti belok kiri.'),
      englishEntry('c-should-wash', 'health', 'direct', 'You should … your hands before eating.', 'wash', ['washes', 'washing'], 'You should wash your hands berarti Kamu sebaiknya mencuci tangan.'),
      englishEntry('c-read-past', 'simple-past', 'story', 'Last night, she … a story before bed.', 'read', ['reads', 'reading'], 'Read tetap ditulis read dalam bentuk lampau, tetapi dibaca red.'),
      englishEntry('c-where-does', 'questions', 'direct', 'Where … your father work?', 'does', ['do', 'is'], 'Your father adalah orang ketiga tunggal sehingga menggunakan does.'),
      englishEntry('c-no-littering', 'notices', 'story', '“No littering” means …', 'Do not throw rubbish.', ['Please open the window.', 'You may play here.'], 'No littering berarti dilarang membuang sampah sembarangan.'),
      englishEntry('c-sunny-hat', 'weather', 'direct', 'If it is sunny, I will wear a …', 'hat', ['raincoat', 'scarf'], 'Hat berarti topi, yang dapat dipakai saat cuaca cerah.')
    ]
  };

  const indonesianBanks = {
    A: [
      indonesianEntry('a-huruf-kapital', 'ejaan', 'direct', 'Penulisan nama orang yang tepat adalah …', 'Rina', ['rina', 'RINA'], 'Nama orang diawali huruf kapital, sehingga penulisan yang tepat adalah Rina.'),
      indonesianEntry('a-tanda-titik', 'tanda-baca', 'direct', 'Tanda baca yang digunakan di akhir kalimat berita adalah …', 'titik (.)', ['tanya (?)', 'seru (!)'], 'Kalimat berita biasanya diakhiri tanda titik.'),
      indonesianEntry('a-tanda-tanya', 'tanda-baca', 'story', 'Kalimat yang tepat untuk bertanya adalah …', 'Di mana rumahmu?', ['Di mana rumahmu.', 'Di mana rumahmu!'], 'Kalimat tanya diakhiri tanda tanya (?).'),
      indonesianEntry('a-kata-benda', 'kosakata', 'direct', 'Benda yang digunakan untuk menulis adalah …', 'pensil', ['berlari', 'menyanyi'], 'Pensil adalah kata benda dan digunakan untuk menulis.'),
      indonesianEntry('a-kata-kerja', 'kosakata', 'story', 'Beni sedang … bola di halaman.', 'menendang', ['biru', 'lapangan'], 'Menendang adalah kata kerja yang sesuai dengan kegiatan Beni.'),
      indonesianEntry('a-suku-kata-buku', 'suku-kata', 'direct', 'Kata “buku” terdiri atas … suku kata.', 'dua', ['satu', 'tiga'], 'Bu-ku terdiri atas dua suku kata.'),
      indonesianEntry('a-suku-kata-matahari', 'suku-kata', 'direct', 'Kata “matahari” terdiri atas … suku kata.', 'empat', ['dua', 'tiga'], 'Ma-ta-ha-ri terdiri atas empat suku kata.'),
      indonesianEntry('a-sinonim-senang', 'kosakata', 'direct', 'Persamaan kata “senang” adalah …', 'gembira', ['sedih', 'marah'], 'Gembira memiliki arti yang sama atau hampir sama dengan senang.'),
      indonesianEntry('a-antonim-panjang', 'kosakata', 'direct', 'Lawan kata “panjang” adalah …', 'pendek', ['lebar', 'tinggi'], 'Pendek adalah lawan kata dari panjang.'),
      indonesianEntry('a-susun-kalimat', 'kalimat', 'story', 'Susunan kata yang tepat adalah …', 'Ibu memasak nasi.', ['Memasak nasi Ibu.', 'Nasi Ibu memasak.'], 'Susunan kalimat yang tepat adalah Ibu memasak nasi.'),
      indonesianEntry('a-sapaan-pagi', 'ungkapan', 'story', 'Ungkapan yang tepat saat bertemu guru pada pagi hari adalah …', 'Selamat pagi, Bu.', ['Selamat tidur, Bu.', 'Sampai jumpa, Bu.'], 'Selamat pagi digunakan untuk menyapa pada pagi hari.'),
      indonesianEntry('a-petunjuk-makan', 'petunjuk', 'direct', 'Sebelum makan, sebaiknya kita …', 'mencuci tangan', ['membuang buku', 'berlari di jalan'], 'Mencuci tangan sebelum makan membantu menjaga kebersihan.'),
      indonesianEntry('a-bacaan-miu', 'membaca', 'story', 'Rani memiliki kucing putih. Nama kucing itu Miu. Siapa nama kucing Rani?', 'Miu', ['Rani', 'Putih'], 'Nama kucing Rani adalah Miu, sesuai informasi dalam bacaan.'),
      indonesianEntry('a-bacaan-pasar', 'membaca', 'story', 'Ayah pergi ke pasar membeli sayur. Ke mana Ayah pergi?', 'pasar', ['sekolah', 'taman'], 'Bacaan menyebutkan bahwa Ayah pergi ke pasar.'),
      indonesianEntry('a-awalan-m', 'huruf', 'direct', 'Kata yang diawali huruf “m” adalah …', 'meja', ['bola', 'sapi'], 'Meja diawali huruf m.'),
      indonesianEntry('a-nama-kota', 'huruf-kapital', 'direct', 'Penulisan nama kota yang benar adalah …', 'Bandung', ['bandung', 'BANDUNGAN'], 'Nama kota diawali huruf kapital dan ditulis Bandung.'),
      indonesianEntry('a-kalimat-perintah', 'jenis-kalimat', 'story', '“Tolong tutup pintu!” termasuk kalimat …', 'perintah', ['tanya', 'berita'], 'Kalimat tersebut meminta seseorang melakukan sesuatu, sehingga termasuk kalimat perintah.'),
      indonesianEntry('a-kalimat-berita', 'jenis-kalimat', 'direct', '“Adik tidur di kamar.” termasuk kalimat …', 'berita', ['perintah', 'tanya'], 'Kalimat berita menyampaikan informasi.'),
      indonesianEntry('a-antonim-panas', 'kosakata', 'direct', 'Lawan kata “panas” adalah …', 'dingin', ['terang', 'ramai'], 'Dingin adalah lawan kata dari panas.'),
      indonesianEntry('a-kata-sopan', 'ungkapan', 'story', 'Saat menerima bantuan, kita mengucapkan …', 'terima kasih', ['selamat malam', 'sampai jumpa'], 'Terima kasih diucapkan untuk menghargai bantuan orang lain.')
    ],
    B: [
      indonesianEntry('b-ide-pokok-tanaman', 'membaca', 'story', 'Setiap pagi, Edo menyiram tanaman di halaman. Ia juga membersihkan rumput di sekitarnya. Apa ide pokok bacaan tersebut?', 'Edo merawat tanaman', ['Edo bermain di halaman', 'Edo membeli tanaman'], 'Bacaan membahas kegiatan Edo merawat tanaman setiap pagi.'),
      indonesianEntry('b-informasi-bacaan', 'membaca', 'story', 'Lina membawa payung karena langit terlihat mendung. Mengapa Lina membawa payung?', 'Karena langit mendung', ['Karena ingin bermain', 'Karena hari sangat panas'], 'Alasan Lina membawa payung disebutkan dalam bacaan, yaitu langit terlihat mendung.'),
      indonesianEntry('b-kalimat-utama', 'paragraf', 'story', '“Perpustakaan sekolah sangat bermanfaat. Siswa dapat membaca berbagai buku di sana.” Kalimat utama paragraf itu adalah …', 'Perpustakaan sekolah sangat bermanfaat.', ['Siswa membawa tas ke sekolah.', 'Buku berada di dalam kelas.'], 'Kalimat pertama menjadi kalimat utama yang didukung kalimat kedua.'),
      indonesianEntry('b-kata-baku-apotek', 'kata-baku', 'direct', 'Kata baku yang tepat adalah …', 'apotek', ['apotik', 'apoteg'], 'Menurut ejaan bahasa Indonesia, bentuk bakunya adalah apotek.'),
      indonesianEntry('b-sinonim-cerdas', 'kosakata', 'direct', 'Persamaan kata “cerdas” adalah …', 'pandai', ['malas', 'lemah'], 'Pandai memiliki arti yang sama atau hampir sama dengan cerdas.'),
      indonesianEntry('b-antonim-hemat', 'kosakata', 'direct', 'Lawan kata “hemat” adalah …', 'boros', ['rajin', 'sopan'], 'Boros adalah lawan kata dari hemat.'),
      indonesianEntry('b-kata-tanya-alasan', 'kalimat-tanya', 'direct', 'Kata tanya untuk menanyakan alasan adalah …', 'mengapa', ['kapan', 'siapa'], 'Mengapa digunakan untuk menanyakan alasan atau sebab.'),
      indonesianEntry('b-tanda-koma', 'tanda-baca', 'direct', 'Penulisan kalimat dengan tanda koma yang tepat adalah …', 'Ibu membeli apel, jeruk, dan mangga.', ['Ibu membeli apel jeruk dan mangga.', 'Ibu membeli, apel jeruk dan mangga.'], 'Tanda koma memisahkan unsur-unsur dalam perincian.'),
      indonesianEntry('b-tanda-petik', 'tanda-baca', 'story', 'Penulisan kalimat langsung yang tepat adalah …', 'Ibu berkata, “Ayo belajar!”', ['Ibu berkata “Ayo belajar”.', 'Ibu berkata, Ayo belajar!'], 'Kalimat langsung ditulis di antara tanda petik dan didahului tanda koma setelah kata berkata.'),
      indonesianEntry('b-awalan-me', 'imbuhan', 'story', 'Siti sedang … halaman dengan sapu.', 'menyapu', ['tersapu', 'penyapu'], 'Kata menyapu berarti melakukan kegiatan menyapu dan tepat melengkapi kalimat.'),
      indonesianEntry('b-awalan-ber', 'imbuhan', 'story', 'Budi … sepeda ke sekolah.', 'bersepeda', ['pesepeda', 'disepeda'], 'Ber + sepeda menjadi bersepeda, yaitu mengendarai sepeda.'),
      indonesianEntry('b-kalimat-efektif', 'kalimat', 'direct', 'Kalimat yang paling efektif adalah …', 'Para siswa sedang belajar.', ['Para siswa-siswa sedang belajar.', 'Para siswa sedang belajar-belajar.'], 'Kata para sudah menunjukkan jumlah banyak, sehingga tidak perlu mengulang kata siswa.'),
      indonesianEntry('b-urutan-paragraf', 'paragraf', 'story', 'Urutan yang tepat untuk membuat jus adalah: (1) Masukkan buah ke blender. (2) Cuci buah. (3) Tuang jus ke gelas.', '2–1–3', ['1–2–3', '3–1–2'], 'Buah dicuci terlebih dahulu, lalu diblender, kemudian jus dituang ke gelas.'),
      indonesianEntry('b-pantun-baris', 'pantun', 'direct', 'Satu bait pantun biasanya terdiri atas … baris.', 'empat', ['dua', 'tiga'], 'Satu bait pantun terdiri atas empat baris.'),
      indonesianEntry('b-pesan-cerita', 'cerita', 'story', 'Lani menemukan pensil di lantai kelas. Ia menyerahkannya kepada guru. Pesan cerita itu adalah …', 'Mengembalikan barang yang ditemukan', ['Menyimpan barang orang lain', 'Meninggalkan barang di lantai'], 'Cerita mengajarkan agar kita mengembalikan barang yang bukan milik kita.'),
      indonesianEntry('b-pengumuman', 'pengumuman', 'story', '“Lomba membaca puisi dilaksanakan Jumat, 10 Mei, di aula sekolah.” Kapan lomba dilaksanakan?', 'Jumat, 10 Mei', ['Senin, 10 Mei', 'Jumat, 10 Juni'], 'Waktu pelaksanaan tertulis langsung dalam pengumuman.'),
      indonesianEntry('b-petunjuk-menjadi', 'petunjuk', 'direct', 'Kata yang tepat untuk melengkapi petunjuk “... barisan dengan tertib!” adalah …', 'Berbarislah', ['Tidurlah', 'Bacalah'], 'Berbarislah merupakan kata perintah yang sesuai dengan petunjuk tersebut.'),
      indonesianEntry('b-makna-lebat', 'kosakata', 'story', 'Hujan turun dengan lebat. Arti kata “lebat” pada kalimat tersebut adalah …', 'sangat deras', ['sangat pelan', 'sebentar saja'], 'Lebat pada hujan berarti turun sangat deras.'),
      indonesianEntry('b-kata-depan-di', 'kata-depan', 'direct', 'Penulisan kata depan yang tepat terdapat pada kalimat …', 'Rina belajar di sekolah.', ['Rina belajar disekolah.', 'Rina belajar diSekolah.'], 'Kata depan di yang menunjukkan tempat ditulis terpisah dari kata sekolah.'),
      indonesianEntry('b-kalimat-ajakan', 'jenis-kalimat', 'story', 'Kalimat yang menyatakan ajakan adalah …', 'Ayo kita menjaga kebersihan!', ['Kapan kamu datang?', 'Dina membaca buku.'], 'Kata ayo menunjukkan ajakan untuk melakukan sesuatu bersama.')
    ],
    C: [
      indonesianEntry('c-ide-pokok-energi', 'membaca', 'story', 'Matahari merupakan sumber energi terbesar bagi Bumi. Cahaya dan panas Matahari bermanfaat bagi makhluk hidup. Ide pokok bacaan tersebut adalah …', 'Manfaat Matahari bagi kehidupan', ['Bumi mengelilingi Bulan', 'Makhluk hidup tidak membutuhkan energi'], 'Kedua kalimat membahas Matahari sebagai sumber energi dan manfaatnya bagi kehidupan.'),
      indonesianEntry('c-simpulan-bacaan', 'membaca', 'story', 'Setiap hari, Damar membawa botol minum dari rumah. Ia mengisi ulang botol itu ketika airnya habis. Simpulan yang tepat adalah …', 'Damar mengurangi penggunaan botol sekali pakai.', ['Damar tidak pernah minum air.', 'Damar selalu membeli minuman kemasan.'], 'Membawa dan mengisi ulang botol membantu mengurangi sampah botol sekali pakai.'),
      indonesianEntry('c-inferensi-bacaan', 'membaca', 'story', 'Pagi itu jalanan basah dan beberapa orang membawa payung. Kemungkinan cuaca pagi itu adalah …', 'hujan', ['sangat panas', 'cerah tanpa awan'], 'Jalanan basah dan payung menunjukkan kemungkinan baru saja turun hujan.'),
      indonesianEntry('c-kata-baku-aktivitas', 'kata-baku', 'direct', 'Kata baku yang tepat adalah …', 'aktivitas', ['aktifitas', 'aktipitas'], 'Bentuk baku yang tepat menurut ejaan adalah aktivitas.'),
      indonesianEntry('c-awalan-me-tulis', 'imbuhan', 'direct', 'Bentuk kata berimbuhan me- yang tepat dari kata “tulis” adalah …', 'menulis', ['mentulis', 'metulis'], 'Imbuhan me- pada kata tulis berubah menjadi menulis.'),
      indonesianEntry('c-awalan-pe-sapu', 'imbuhan', 'story', 'Orang yang pekerjaannya menyapu disebut …', 'penyapu', ['mensapu', 'tersapu'], 'Kata penyapu berarti orang atau alat yang menyapu.'),
      indonesianEntry('c-kata-depan-di', 'kata-depan', 'direct', 'Kalimat yang menggunakan kata depan di dengan tepat adalah …', 'Buku itu ada di atas meja.', ['Buku itu berada diatas meja.', 'Buku itu berada di atasmeja.'], 'Kata depan di pada di atas ditulis terpisah karena menunjukkan tempat.'),
      indonesianEntry('c-konjungsi-sebab', 'konjungsi', 'story', 'Rafi tidak masuk sekolah … sedang sakit.', 'karena', ['tetapi', 'atau'], 'Karena menghubungkan peristiwa dengan sebabnya.'),
      indonesianEntry('c-kalimat-efektif', 'kalimat', 'direct', 'Kalimat efektif yang tepat adalah …', 'Siswa kelas enam mengikuti upacara.', ['Para siswa kelas enam semuanya mengikuti upacara bersama-sama.', 'Siswa-siswa kelas enam mengikuti upacara-upacara.'], 'Kalimat pertama menyampaikan gagasan secara jelas tanpa kata yang berlebihan.'),
      indonesianEntry('c-kalimat-langsung', 'tanda-baca', 'story', 'Penulisan kalimat langsung yang tepat adalah …', '“Jangan lupa membawa buku,” kata Raka.', ['“Jangan lupa membawa buku” kata Raka.', 'Jangan lupa membawa buku, “kata Raka.”'], 'Kalimat langsung diapit tanda petik dan diikuti keterangan pengucap.'),
      indonesianEntry('c-tokoh-cerita', 'cerita', 'story', 'Siti tetap berlatih meskipun gerakannya belum sempurna. Sifat Siti adalah …', 'pantang menyerah', ['sombong', 'ceroboh'], 'Siti terus berlatih sehingga menunjukkan sifat pantang menyerah.'),
      indonesianEntry('c-latar-cerita', 'cerita', 'direct', '“Suara ombak terdengar dari kejauhan. Pasir membentang di bawah kaki.” Latar tempat cerita tersebut adalah …', 'pantai', ['pasar', 'pegunungan'], 'Ombak dan pasir merupakan ciri latar pantai.'),
      indonesianEntry('c-amanat-cerita', 'cerita', 'story', 'Kancil meminta maaf setelah menyadari kesalahannya. Amanat cerita itu adalah …', 'Berani mengakui kesalahan', ['Menyalahkan orang lain', 'Menyembunyikan kesalahan'], 'Cerita mengajarkan pentingnya mengakui kesalahan dan meminta maaf.'),
      indonesianEntry('c-pantun-rima', 'pantun', 'direct', 'Pola rima akhir pantun yang umum adalah …', 'a-b-a-b', ['a-a-a-a', 'a-b-b-a'], 'Bunyi akhir baris pertama sama dengan baris ketiga, dan baris kedua sama dengan baris keempat.'),
      indonesianEntry('c-majas-personifikasi', 'majas', 'story', 'Kalimat “Angin berbisik di antara pepohonan” menggunakan majas …', 'personifikasi', ['hiperbola', 'perbandingan'], 'Angin diberi sifat seperti manusia, yaitu dapat berbisik. Ini disebut personifikasi.'),
      indonesianEntry('c-tujuan-iklan', 'iklan', 'direct', 'Tujuan utama iklan adalah …', 'membujuk orang agar tertarik pada barang atau jasa', ['menceritakan dongeng', 'menjelaskan jadwal pelajaran'], 'Iklan dibuat untuk memperkenalkan dan membujuk orang agar tertarik pada barang atau jasa.'),
      indonesianEntry('c-fakta-opini', 'fakta-opini', 'direct', 'Kalimat yang merupakan fakta adalah …', 'Air membeku pada suhu 0 derajat Celsius.', ['Es krim cokelat paling enak.', 'Cuaca hari ini sangat menyenangkan.'], 'Fakta dapat dibuktikan kebenarannya, sedangkan dua pilihan lain berisi pendapat.'),
      indonesianEntry('c-laporan-pengamatan', 'laporan', 'story', 'Teks laporan hasil pengamatan sebaiknya berisi …', 'informasi berdasarkan pengamatan', ['cerita khayalan seluruhnya', 'percakapan tanpa topik'], 'Laporan pengamatan menyajikan informasi berdasarkan objek yang diamati.'),
      indonesianEntry('c-surat-undangan', 'surat', 'direct', 'Bagian surat undangan yang berisi waktu dan tempat kegiatan adalah …', 'isi undangan', ['salam penutup', 'nama pengirim saja'], 'Waktu, tempat, dan kegiatan dituliskan pada isi undangan.'),
      indonesianEntry('c-ringkasan', 'ringkasan', 'story', 'Ringkasan yang baik harus …', 'memuat gagasan pokok dengan singkat', ['menyalin semua kalimat', 'menambahkan tokoh baru'], 'Ringkasan memuat gagasan pokok secara singkat dengan bahasa sendiri.')
    ]
  };

  const paiBanks = {
    A: [
      paiEntry('a-hijaiyah-ba', 'al-quran-hadis', 'direct', 'Huruf hijaiah yang dibaca “ba” adalah …', 'ب', ['ت', 'ن'], 'Huruf ب adalah ba, sedangkan ت dibaca ta dan ن dibaca nun.'),
      paiEntry('a-harakat-fathah', 'al-quran-hadis', 'direct', 'Tanda baca yang terletak di atas huruf hijaiah dan berbunyi “a” disebut …', 'fathah', ['kasrah', 'dammah'], 'Fathah berbunyi a, kasrah berbunyi i, dan dammah berbunyi u.'),
      paiEntry('a-surah-pembuka', 'al-quran-hadis', 'direct', 'Surah pembuka dalam Al-Qur’an adalah …', 'Al-Fatihah', ['Al-Ikhlas', 'An-Nas'], 'Al-Fatihah adalah surah pertama dan menjadi pembuka Al-Qur’an.'),
      paiEntry('a-hadis-kebersihan', 'al-quran-hadis', 'story', 'Pesan hadis tentang kebersihan mengajarkan kita untuk …', 'menjaga kebersihan', ['membiarkan sampah berserakan', 'mengotori tempat ibadah'], 'Kebersihan perlu dijaga sebagai bagian dari perilaku baik seorang muslim.'),
      paiEntry('a-rukun-iman', 'akidah', 'direct', 'Jumlah rukun iman ada …', 'enam', ['empat', 'lima'], 'Rukun iman ada enam, yaitu iman kepada Allah, malaikat, kitab, rasul, hari akhir, serta qada dan qadar.'),
      paiEntry('a-iman-allah', 'akidah', 'direct', 'Beriman kepada Allah berarti …', 'meyakini Allah satu-satunya Tuhan', ['menyamakan Allah dengan makhluk', 'tidak percaya kepada Allah'], 'Iman kepada Allah berarti meyakini keesaan dan kekuasaan Allah Swt.'),
      paiEntry('a-ar-rahman', 'akidah', 'direct', 'Ar-Rahman adalah salah satu Asmaul Husna yang berarti Allah Maha …', 'Pengasih', ['Pendendam', 'Pelupa'], 'Ar-Rahman berarti Allah Maha Pengasih.'),
      paiEntry('a-malaikat-jibril', 'akidah', 'story', 'Malaikat yang bertugas menyampaikan wahyu kepada para nabi adalah …', 'Jibril', ['Mikail', 'Israfil'], 'Malaikat Jibril bertugas menyampaikan wahyu Allah kepada para nabi dan rasul.'),
      paiEntry('a-adab-makan', 'akhlak', 'story', 'Sebelum makan, sebaiknya kita mengucapkan …', 'basmalah', ['takbiratul ihram', 'salam perpisahan'], 'Basmalah diucapkan sebelum memulai kegiatan baik, termasuk makan.'),
      paiEntry('a-hormat-orang-tua', 'akhlak', 'story', 'Contoh berbakti kepada orang tua adalah …', 'membantu dengan sopan', ['membantah dengan kasar', 'mengabaikan nasihat'], 'Membantu dan berbicara sopan kepada orang tua merupakan akhlak terpuji.'),
      paiEntry('a-jujur-barang-temuan', 'akhlak', 'story', 'Dina menemukan pensil milik teman. Sikap yang tepat adalah …', 'mengembalikannya kepada pemilik', ['menyimpannya diam-diam', 'membuangnya'], 'Mengembalikan barang kepada pemilik menunjukkan kejujuran dan amanah.'),
      paiEntry('a-alhamdulillah', 'akhlak', 'direct', 'Ucapan yang tepat saat mendapat nikmat dari Allah adalah …', 'Alhamdulillah', ['Astaghfirullah', 'Innalillah'], 'Alhamdulillah berarti segala puji bagi Allah dan diucapkan sebagai rasa syukur.'),
      paiEntry('a-rukun-islam', 'fikih', 'direct', 'Jumlah rukun Islam ada …', 'lima', ['tiga', 'enam'], 'Rukun Islam ada lima, yaitu syahadat, salat, zakat, puasa, dan haji bagi yang mampu.'),
      paiEntry('a-syahadatain', 'fikih', 'direct', 'Syahadatain berarti …', 'dua kalimat syahadat', ['dua rakaat salat', 'dua jenis zakat'], 'Syahadatain berarti dua kalimat syahadat.'),
      paiEntry('a-wudu-salat', 'fikih', 'story', 'Sebelum melaksanakan salat, kita bersuci dengan …', 'wudu', ['tidur', 'bermain'], 'Wudu dilakukan untuk bersuci sebelum salat ketika tidak berhalangan.'),
      paiEntry('a-salat-fardu', 'fikih', 'direct', 'Salat fardu dalam sehari semalam berjumlah … waktu.', 'lima', ['tiga', 'tujuh'], 'Salat fardu terdiri atas Subuh, Zuhur, Asar, Magrib, dan Isya.'),
      paiEntry('a-nabi-teladan', 'sejarah', 'story', 'Nabi dan rasul yang menjadi teladan utama umat Islam adalah …', 'Nabi Muhammad SAW.', ['Nabi Nuh AS.', 'Nabi Musa AS.'], 'Nabi Muhammad SAW. adalah teladan utama bagi umat Islam.'),
      paiEntry('a-nabi-nuh', 'sejarah', 'story', 'Nabi yang membuat kapal besar atas perintah Allah adalah …', 'Nabi Nuh AS.', ['Nabi Yunus AS.', 'Nabi Yusuf AS.'], 'Nabi Nuh AS. membuat kapal untuk menyelamatkan orang beriman dari banjir besar.'),
      paiEntry('a-nabi-ibrahim', 'sejarah', 'story', 'Nabi yang bersama Nabi Ismail membangun Ka’bah adalah …', 'Nabi Ibrahim AS.', ['Nabi Zakaria AS.', 'Nabi Sulaiman AS.'], 'Nabi Ibrahim AS. dan Nabi Ismail AS. membangun Ka’bah atas perintah Allah.'),
      paiEntry('a-kisah-nabi', 'sejarah', 'story', 'Pelajaran yang dapat diambil dari kisah para nabi adalah …', 'meneladani kesabaran dan ketaatan', ['menjadi sombong', 'berbuat curang'], 'Kisah para nabi mengajarkan kesabaran, ketaatan, dan akhlak mulia.')
    ],
    B: [
      paiEntry('b-surah-asr', 'al-quran-hadis', 'story', 'Pesan utama Surah Al-‘Asr adalah pentingnya memanfaatkan waktu untuk …', 'beriman dan beramal saleh', ['bermalas-malasan', 'menunda semua pekerjaan'], 'Surah Al-‘Asr mengingatkan manusia agar beriman, beramal saleh, saling menasihati dalam kebenaran, dan kesabaran.'),
      paiEntry('b-hadis-salat', 'al-quran-hadis', 'direct', 'Hadis tentang kewajiban salat mengajarkan kita untuk …', 'melaksanakan salat dengan tertib', ['meninggalkan salat', 'salat hanya ketika ingin'], 'Salat merupakan kewajiban yang perlu dilaksanakan dengan tertib.'),
      paiEntry('b-hubungan-sesama', 'al-quran-hadis', 'story', 'Contoh menjaga hubungan baik dengan sesama adalah …', 'menyapa dan menolong teman', ['mengejek teman', 'memutus persahabatan'], 'Menyapa dan menolong teman menunjukkan hubungan baik dengan sesama.'),
      paiEntry('b-baca-hijaiyah-sambung', 'al-quran-hadis', 'direct', 'Kegiatan yang sesuai dengan kemampuan membaca Al-Qur’an adalah …', 'membaca huruf hijaiah bersambung', ['mengubah isi ayat', 'mengabaikan tanda baca'], 'Membaca huruf hijaiah bersambung merupakan bagian dari kemampuan membaca Al-Qur’an.'),
      paiEntry('b-al-alim', 'akidah', 'direct', 'Al-‘Alim adalah Asmaul Husna yang berarti Allah Maha …', 'Mengetahui', ['Lemah', 'Tidur'], 'Al-‘Alim berarti Allah Maha Mengetahui segala sesuatu.'),
      paiEntry('b-kitab-zabur', 'akidah', 'direct', 'Kitab Zabur diturunkan kepada Nabi …', 'Dawud AS.', ['Musa AS.', 'Isa AS.'], 'Kitab Zabur diturunkan kepada Nabi Dawud AS.'),
      paiEntry('b-iman-rasul', 'akidah', 'direct', 'Beriman kepada rasul berarti …', 'meyakini rasul sebagai utusan Allah', ['menolak semua ajaran rasul', 'menganggap rasul sebagai Tuhan'], 'Rasul adalah manusia pilihan yang menerima wahyu dan menyampaikan ajaran Allah.'),
      paiEntry('b-siddiq', 'akidah', 'direct', 'Siddiq, salah satu sifat wajib rasul, berarti …', 'jujur', ['menyembunyikan kebenaran', 'malas'], 'Siddiq berarti jujur atau benar dalam perkataan dan perbuatan.'),
      paiEntry('b-husnuzan', 'akhlak', 'story', 'Husnuzan berarti …', 'berprasangka baik', ['berprasangka buruk', 'suka menghina'], 'Husnuzan berarti berprasangka baik kepada Allah dan sesama.'),
      paiEntry('b-akhlak-orang-tua', 'akhlak', 'story', 'Saat orang tua memberi nasihat, sikap yang baik adalah …', 'mendengarkan dengan sopan', ['memotong pembicaraan', 'membentak'], 'Mendengarkan nasihat dengan sopan merupakan akhlak kepada orang tua.'),
      paiEntry('b-akhlak-guru', 'akhlak', 'story', 'Contoh menghormati guru adalah …', 'menyimak pelajaran dengan tertib', ['berbicara saat guru menjelaskan', 'mengejek guru'], 'Menyimak pelajaran dengan tertib menunjukkan rasa hormat kepada guru.'),
      paiEntry('b-akhlak-keluarga', 'akhlak', 'story', 'Ketika terjadi perbedaan pendapat dalam keluarga, sebaiknya kita …', 'berbicara dengan santun', ['berteriak', 'memaksakan kehendak'], 'Berbicara santun membantu menyelesaikan perbedaan dengan baik.'),
      paiEntry('b-azan', 'fikih', 'direct', 'Azan dikumandangkan sebagai tanda …', 'masuk waktu salat', ['selesai waktu belajar', 'dimulainya perlombaan'], 'Azan menandai masuknya waktu salat fardu.'),
      paiEntry('b-iqamah', 'fikih', 'direct', 'Iqamah dikumandangkan sebagai tanda …', 'salat segera dimulai', ['waktu salat telah berakhir', 'jamaah boleh pulang'], 'Iqamah menandai bahwa salat berjamaah segera dimulai.'),
      paiEntry('b-salat-jumat', 'fikih', 'direct', 'Salat Jumat dilaksanakan pada hari …', 'Jumat', ['Senin', 'Minggu'], 'Salat Jumat dilaksanakan pada hari Jumat dan menggantikan salat Zuhur bagi yang memenuhi ketentuannya.'),
      paiEntry('b-salat-sunah', 'fikih', 'direct', 'Contoh salat sunah adalah salat …', 'Dhuha', ['Subuh', 'Magrib'], 'Salat Dhuha merupakan salah satu salat sunah.'),
      paiEntry('b-balig', 'fikih', 'story', 'Balig berarti seseorang mulai …', 'memiliki tanggung jawab sebagai mukalaf', ['bebas meninggalkan ibadah', 'tidak perlu belajar'], 'Balig menandai dimulainya tanggung jawab melaksanakan ketentuan agama sesuai kemampuan.'),
      paiEntry('b-al-amin', 'sejarah', 'story', 'Sebelum menjadi rasul, Nabi Muhammad SAW. dikenal dengan gelar …', 'Al-Amin', ['Al-Faruq', 'Dzun Nurain'], 'Al-Amin berarti orang yang dapat dipercaya.'),
      paiEntry('b-wahyu-pertama', 'sejarah', 'story', 'Wahyu pertama kepada Nabi Muhammad SAW. diterima di …', 'Gua Hira', ['Gua Tsur', 'Masjid Nabawi'], 'Wahyu pertama diterima Nabi Muhammad SAW. di Gua Hira.'),
      paiEntry('b-dakwah-makkah', 'sejarah', 'story', 'Salah satu ajaran utama dakwah Nabi Muhammad SAW. di Makkah adalah …', 'mengesakan Allah', ['menyembah banyak berhala', 'berbuat curang'], 'Dakwah di Makkah menekankan tauhid, yaitu mengesakan Allah.')
    ],
    C: [
      paiEntry('c-surah-maun', 'al-quran-hadis', 'story', 'Salah satu pesan Surah Al-Ma’un adalah …', 'peduli kepada anak yatim dan orang miskin', ['menyombongkan harta', 'mengabaikan tetangga'], 'Surah Al-Ma’un mengajarkan kepedulian kepada anak yatim, orang miskin, dan orang yang membutuhkan.'),
      paiEntry('c-hadis-orang-tua', 'al-quran-hadis', 'story', 'Contoh mengamalkan hadis tentang berbuat baik kepada orang tua, guru, dan teman adalah …', 'berbicara santun dan suka menolong', ['mengejek dan mengganggu', 'memutus silaturahmi'], 'Berbicara santun dan suka menolong merupakan bentuk berbuat baik kepada sesama.'),
      paiEntry('c-hijaiyah-bersambung', 'al-quran-hadis', 'direct', 'Kemampuan yang termasuk pembelajaran Al-Qur’an Hadis adalah …', 'membaca dan menulis huruf hijaiah bersambung', ['menghapus ayat', 'mengubah arti surah'], 'Membaca dan menulis huruf hijaiah bersambung termasuk kemampuan pada elemen Al-Qur’an Hadis.'),
      paiEntry('c-al-quran-petunjuk', 'al-quran-hadis', 'direct', 'Al-Qur’an bagi umat Islam berfungsi sebagai …', 'petunjuk kehidupan', ['buku cerita tanpa pesan', 'hiasan semata'], 'Al-Qur’an menjadi petunjuk bagi manusia dalam menjalani kehidupan.'),
      paiEntry('c-hari-akhir', 'akidah', 'direct', 'Iman kepada hari akhir berarti meyakini adanya …', 'kehidupan setelah kematian', ['kehidupan tanpa pertanggungjawaban', 'kekekalan dunia'], 'Hari akhir adalah kehidupan setelah dunia berakhir, saat amal manusia dipertanggungjawabkan.'),
      paiEntry('c-qada-qadar', 'akidah', 'story', 'Sikap yang tepat terhadap qada dan qadar adalah …', 'berusaha, berdoa, lalu bertawakal', ['pasrah tanpa berusaha', 'sombong atas keberhasilan'], 'Beriman kepada qada dan qadar mendorong kita berusaha dan berdoa, kemudian bertawakal kepada Allah.'),
      paiEntry('c-al-adl', 'akidah', 'direct', 'Al-‘Adl adalah Asmaul Husna yang berarti Allah Maha …', 'Adil', ['Lalai', 'Lemah'], 'Al-‘Adl berarti Allah Maha Adil.'),
      paiEntry('c-tawakal', 'akidah', 'story', 'Setelah belajar sungguh-sungguh sebelum ujian, sikap tawakal ditunjukkan dengan …', 'menyerahkan hasil kepada Allah', ['tidak mau belajar lagi', 'menyontek'], 'Tawakal dilakukan setelah berusaha dengan sungguh-sungguh.'),
      paiEntry('c-akhlak-tetangga', 'akhlak', 'story', 'Contoh akhlak baik kepada tetangga adalah …', 'menjenguk saat tetangga sakit', ['mengganggu waktu istirahat', 'membuang sampah ke halaman'], 'Menjenguk tetangga yang sakit menunjukkan kepedulian dan kasih sayang.'),
      paiEntry('c-toleransi', 'akhlak', 'story', 'Sikap yang tepat kepada teman yang berbeda agama adalah …', 'menghormati dan tetap berteman dengan baik', ['memaksa mengikuti ibadah kita', 'mengejek keyakinannya'], 'Islam mengajarkan penghormatan dan hidup rukun dengan sesama.'),
      paiEntry('c-akhlak-hewan', 'akhlak', 'story', 'Bentuk kasih sayang kepada hewan adalah …', 'memberi makan dan tidak menyakitinya', ['menyiksa hewan', 'membiarkannya kelaparan'], 'Hewan juga makhluk Allah sehingga harus diperlakukan dengan kasih sayang.'),
      paiEntry('c-akhlak-tumbuhan', 'akhlak', 'story', 'Menjaga tumbuhan sebagai ciptaan Allah dapat dilakukan dengan …', 'merawat dan tidak merusaknya', ['menebang sembarangan', 'membuang sampah di tanah'], 'Merawat tumbuhan merupakan bentuk tanggung jawab terhadap lingkungan.'),
      paiEntry('c-puasa-wajib', 'fikih', 'direct', 'Puasa wajib bagi umat Islam dilaksanakan pada bulan …', 'Ramadan', ['Muharam', 'Syawal'], 'Puasa Ramadan merupakan puasa wajib bagi umat Islam.'),
      paiEntry('c-makanan-halal', 'fikih', 'story', 'Contoh makanan halal adalah …', 'ikan yang dimasak dengan baik', ['daging babi', 'minuman keras'], 'Ikan termasuk makanan yang halal, sedangkan babi dan minuman keras haram.'),
      paiEntry('c-sedekah', 'fikih', 'story', 'Memberikan bantuan dengan ikhlas kepada orang yang membutuhkan disebut …', 'sedekah', ['riba', 'sumpah'], 'Sedekah adalah pemberian atau bantuan yang dilakukan dengan ikhlas.'),
      paiEntry('c-wakaf', 'fikih', 'direct', 'Wakaf adalah memberikan harta untuk …', 'manfaat yang terus digunakan untuk kebaikan', ['dihabiskan untuk kesombongan', 'disembunyikan dari semua orang'], 'Wakaf ditujukan untuk kemaslahatan dan manfaat yang berkelanjutan.'),
      paiEntry('c-hijrah-madinah', 'sejarah', 'story', 'Nabi Muhammad SAW. hijrah dari Makkah ke …', 'Madinah', ['Thaif', 'Mesir'], 'Nabi Muhammad SAW. hijrah dari Makkah ke Madinah.'),
      paiEntry('c-muhajirin-ansar', 'sejarah', 'story', 'Di Madinah, Nabi Muhammad SAW. mempersaudarakan kaum Muhajirin dan …', 'Ansar', ['Quraisy', 'Romawi'], 'Kaum Muhajirin dan Ansar dipersaudarakan untuk memperkuat ukhuwah.'),
      paiEntry('c-khalifah-abu-bakar', 'sejarah', 'direct', 'Khalifah pertama setelah Nabi Muhammad SAW. adalah …', 'Abu Bakar ash-Shiddiq', ['Umar bin Khattab', 'Ali bin Abi Talib'], 'Abu Bakar ash-Shiddiq adalah khalifah pertama dari Khulafaurasyidin.'),
      paiEntry('c-khulafaurasyidin', 'sejarah', 'direct', 'Khulafaurasyidin adalah para …', 'pemimpin umat Islam setelah Nabi Muhammad SAW.', ['malaikat pencatat amal', 'pedagang dari Makkah'], 'Khulafaurasyidin adalah empat khalifah yang memimpin umat Islam setelah Rasulullah SAW.')
    ]
  };

  const pancasilaBanks = {
    A: [
      pancasilaEntry('a-bendera-negara', 'pancasila', 'direct', 'Bendera negara Indonesia adalah …', 'Merah Putih', ['Merah Biru', 'Putih Hijau'], 'Bendera negara Indonesia berwarna merah dan putih.'),
      pancasilaEntry('a-lagu-kebangsaan', 'pancasila', 'direct', 'Lagu kebangsaan Indonesia adalah …', 'Indonesia Raya', ['Bagimu Negeri', 'Hari Merdeka'], 'Indonesia Raya adalah lagu kebangsaan Indonesia.'),
      pancasilaEntry('a-lambang-negara', 'pancasila', 'direct', 'Lambang negara Indonesia adalah …', 'Garuda Pancasila', ['Harimau Nusantara', 'Burung Merak'], 'Garuda Pancasila merupakan lambang negara Indonesia.'),
      pancasilaEntry('a-sila-pertama', 'pancasila', 'direct', 'Lambang sila pertama Pancasila adalah …', 'bintang', ['rantai', 'pohon beringin'], 'Bintang melambangkan sila pertama, Ketuhanan Yang Maha Esa.'),
      pancasilaEntry('a-pancasila-keluarga', 'pancasila', 'story', 'Contoh menerapkan nilai Pancasila di rumah adalah …', 'menyayangi anggota keluarga', ['bertengkar setiap hari', 'mengambil barang tanpa izin'], 'Menyayangi keluarga merupakan contoh perilaku sesuai nilai Pancasila.'),
      pancasilaEntry('a-aturan-rumah', 'uud-1945', 'story', 'Contoh aturan di rumah adalah …', 'merapikan tempat tidur setelah bangun', ['berteriak kepada orang tua', 'membuang sampah di kamar'], 'Aturan membantu kehidupan keluarga menjadi tertib.'),
      pancasilaEntry('a-patuhi-aturan', 'uud-1945', 'story', 'Jika aturan keluarga meminta kita meminta izin, maka kita harus …', 'meminta izin sebelum pergi', ['pergi diam-diam', 'mengabaikan aturan'], 'Meminta izin menunjukkan sikap mematuhi aturan keluarga.'),
      pancasilaEntry('a-tugas-rumah', 'uud-1945', 'story', 'Setelah bermain, sikap bertanggung jawab adalah …', 'mengembalikan mainan ke tempatnya', ['meninggalkan mainan berserakan', 'menyuruh orang lain selalu membereskan'], 'Membereskan mainan adalah bentuk tanggung jawab di rumah.'),
      pancasilaEntry('a-bhinneka', 'bhinneka-tunggal-ika', 'direct', 'Semboyan bangsa Indonesia adalah …', 'Bhinneka Tunggal Ika', ['Tut Wuri Handayani', 'Ing Ngarsa Sung Tulada'], 'Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu.'),
      pancasilaEntry('a-identitas-hobi', 'bhinneka-tunggal-ika', 'story', 'Setiap anak boleh memiliki hobi yang berbeda. Sikap kita sebaiknya …', 'menghargai hobi teman', ['mengejek hobi teman', 'memaksa semua teman mengikuti hobi kita'], 'Perbedaan hobi merupakan bagian dari identitas yang perlu dihargai.'),
      pancasilaEntry('a-identitas-bahasa', 'bhinneka-tunggal-ika', 'story', 'Temanmu menggunakan bahasa daerah saat berbicara dengan keluarganya. Sikap yang tepat adalah …', 'menghormatinya', ['menertawakannya', 'melarangnya memakai bahasa daerah'], 'Bahasa daerah merupakan bagian dari keberagaman identitas bangsa.'),
      pancasilaEntry('a-beda-agama', 'bhinneka-tunggal-ika', 'story', 'Teman yang berbeda agama harus kita …', 'hormati', ['ganggu saat beribadah', 'paksa mengikuti ibadah kita'], 'Menghormati perbedaan agama membantu hidup rukun.'),
      pancasilaEntry('a-lingkungan-sekolah', 'nkri', 'direct', 'Sekolah dan rumah merupakan bagian dari wilayah …', 'Negara Kesatuan Republik Indonesia', ['negara lain', 'luar Indonesia'], 'Rumah dan sekolah berada di wilayah Negara Kesatuan Republik Indonesia.'),
      pancasilaEntry('a-kerja-sama-bersih', 'nkri', 'story', 'Membersihkan halaman bersama-sama merupakan contoh …', 'gotong royong', ['perselisihan', 'persaingan tidak sehat'], 'Gotong royong berarti bekerja bersama untuk tujuan yang baik.'),
      pancasilaEntry('a-jaga-lingkungan', 'nkri', 'story', 'Contoh menjaga lingkungan sekolah adalah …', 'membuang sampah pada tempatnya', ['mencoret dinding', 'merusak tanaman'], 'Menjaga kebersihan sekolah merupakan tanggung jawab bersama.'),
      pancasilaEntry('a-kerja-sama-beda', 'nkri', 'story', 'Saat kerja kelompok, teman yang berbeda suku tetap harus …', 'bekerja sama', ['dijauhi', 'tidak diberi tugas'], 'Kerja sama dapat dilakukan bersama siapa saja dalam keberagaman.'),
      pancasilaEntry('a-warna-merah', 'pancasila', 'direct', 'Warna merah pada bendera Indonesia melambangkan …', 'keberanian', ['kesedihan', 'kegelapan'], 'Warna merah sering dimaknai sebagai keberanian dan warna putih sebagai kesucian.'),
      pancasilaEntry('a-giliran', 'uud-1945', 'story', 'Saat bermain bersama, kita sebaiknya …', 'menunggu giliran', ['menyerobot giliran', 'merebut semua alat permainan'], 'Menunggu giliran menunjukkan sikap tertib dan menghargai orang lain.'),
      pancasilaEntry('a-teman-berbeda', 'bhinneka-tunggal-ika', 'story', 'Jika teman memiliki kesukaan yang berbeda, kita tetap dapat …', 'bermain bersama dengan rukun', ['memusuhinya', 'menolak semua ajakannya'], 'Perbedaan kesukaan tidak menghalangi persahabatan yang rukun.'),
      pancasilaEntry('a-lingkungan-aman', 'nkri', 'story', 'Menjaga lingkungan sekitar dapat dilakukan dengan …', 'bekerja sama menjaga kebersihan', ['membuang sampah ke sungai', 'merusak fasilitas umum'], 'Kerja sama menjaga kebersihan membuat lingkungan lebih aman dan nyaman.')
    ],
    B: [
      pancasilaEntry('b-sila-ketuhanan', 'pancasila', 'story', 'Contoh penerapan sila Ketuhanan Yang Maha Esa adalah …', 'menghormati teman yang sedang beribadah', ['memaksa orang lain beribadah sama', 'mengganggu kegiatan ibadah'], 'Sila pertama mengajarkan sikap beriman dan menghormati kebebasan beribadah.'),
      pancasilaEntry('b-sila-kemanusiaan', 'pancasila', 'story', 'Menolong korban bencana tanpa membedakan asalnya sesuai dengan sila …', 'Kemanusiaan yang Adil dan Beradab', ['Persatuan Indonesia', 'Keadilan Sosial'], 'Menolong sesama dengan adil mencerminkan sila kedua.'),
      pancasilaEntry('b-sila-persatuan', 'pancasila', 'story', 'Mengutamakan persatuan saat bekerja kelompok merupakan penerapan sila …', 'Persatuan Indonesia', ['Ketuhanan Yang Maha Esa', 'Keadilan Sosial'], 'Sila ketiga mengajarkan pentingnya menjaga persatuan.'),
      pancasilaEntry('b-bahasa-persatuan', 'pancasila', 'direct', 'Bahasa persatuan bangsa Indonesia adalah …', 'bahasa Indonesia', ['bahasa daerah saja', 'bahasa asing'], 'Bahasa Indonesia digunakan sebagai bahasa persatuan.'),
      pancasilaEntry('b-perumus-pancasila', 'pancasila', 'story', 'Sikap yang dapat diteladani dari para perumus Pancasila adalah …', 'mengutamakan persatuan', ['memaksakan pendapat', 'menolak musyawarah'], 'Para perumus Pancasila mengutamakan persatuan dan kepentingan bangsa.'),
      pancasilaEntry('b-aturan-sekolah', 'uud-1945', 'story', 'Contoh aturan di sekolah adalah …', 'datang tepat waktu', ['datang sesuka hati', 'mengganggu pelajaran'], 'Datang tepat waktu membantu kegiatan sekolah berjalan tertib.'),
      pancasilaEntry('b-hak-belajar', 'uud-1945', 'story', 'Hak siswa di sekolah adalah …', 'mendapatkan pelajaran', ['merusak meja', 'mengabaikan guru'], 'Setiap siswa berhak memperoleh pendidikan dan pelajaran.'),
      pancasilaEntry('b-kewajiban-belajar', 'uud-1945', 'story', 'Kewajiban siswa setelah mendapat tugas adalah …', 'mengerjakan dengan tanggung jawab', ['menyalin tanpa memahami', 'mengumpulkan kosong'], 'Mengerjakan tugas merupakan kewajiban siswa.'),
      pancasilaEntry('b-akibat-melanggar', 'uud-1945', 'story', 'Aturan dibuat agar kehidupan menjadi …', 'tertib dan aman', ['kacau dan berbahaya', 'bebas tanpa tanggung jawab'], 'Aturan membantu menjaga ketertiban dan keamanan bersama.'),
      pancasilaEntry('b-hak-kewajiban', 'uud-1945', 'direct', 'Hak dan kewajiban sebaiknya dilaksanakan secara …', 'seimbang', ['berat sebelah', 'sesuka hati'], 'Hak perlu diterima dan kewajiban perlu dilaksanakan secara seimbang.'),
      pancasilaEntry('b-berbeda-suku', 'bhinneka-tunggal-ika', 'story', 'Indonesia memiliki banyak suku bangsa. Sikap yang tepat adalah …', 'menghargai semuanya', ['menganggap satu suku paling baik', 'mengejek suku lain'], 'Keberagaman suku merupakan kekayaan bangsa yang harus dihargai.'),
      pancasilaEntry('b-budaya-daerah', 'bhinneka-tunggal-ika', 'story', 'Mempelajari tarian daerah membantu kita …', 'menghargai budaya Indonesia', ['melupakan budaya sendiri', 'merendahkan budaya lain'], 'Budaya daerah merupakan bagian dari kekayaan Indonesia.'),
      pancasilaEntry('b-kerukunan-agama', 'bhinneka-tunggal-ika', 'story', 'Kerukunan antarumat beragama dapat diwujudkan dengan …', 'menghormati ibadah masing-masing', ['mengganggu perayaan agama lain', 'menyebarkan ejekan'], 'Menghormati ibadah masing-masing membantu menjaga kerukunan.'),
      pancasilaEntry('b-kerja-sama-beragam', 'bhinneka-tunggal-ika', 'story', 'Kerja kelompok dengan teman yang berbeda budaya sebaiknya dilakukan dengan …', 'saling mendengarkan', ['saling merendahkan', 'hanya memilih teman yang sama'], 'Saling mendengarkan membuat kerja sama dalam keberagaman berjalan baik.'),
      pancasilaEntry('b-identitas-teman', 'bhinneka-tunggal-ika', 'direct', 'Identitas seseorang dapat berupa suku, bahasa, agama, dan …', 'budaya', ['warna papan tulis', 'nomor sepatu saja'], 'Suku, bahasa, agama, dan budaya merupakan bagian dari identitas.'),
      pancasilaEntry('b-rt-rw', 'nkri', 'direct', 'RT dan RW merupakan bagian dari lingkungan …', 'tempat tinggal', ['negara lain', 'lautan'], 'RT dan RW adalah bagian dari lingkungan administratif tempat tinggal.'),
      pancasilaEntry('b-gotong-royong', 'nkri', 'story', 'Warga bekerja sama membersihkan selokan. Kegiatan itu menunjukkan …', 'gotong royong', ['individualisme', 'permusuhan'], 'Gotong royong berarti bekerja bersama demi kepentingan lingkungan.'),
      pancasilaEntry('b-jaga-persatuan', 'nkri', 'story', 'Cara menjaga persatuan di lingkungan sekitar adalah …', 'menyelesaikan masalah dengan musyawarah', ['menyebarkan pertengkaran', 'memaksakan kehendak'], 'Musyawarah membantu menjaga persatuan saat menghadapi masalah.'),
      pancasilaEntry('b-lingkungan-kecamatan', 'nkri', 'direct', 'Desa atau kelurahan dan kecamatan merupakan bagian dari wilayah …', 'Indonesia', ['negara tanpa aturan', 'luar negeri'], 'Desa, kelurahan, dan kecamatan berada dalam wilayah Indonesia.'),
      pancasilaEntry('b-bangga-indonesia', 'nkri', 'story', 'Sikap bangga menjadi anak Indonesia dapat ditunjukkan dengan …', 'menggunakan bahasa Indonesia dengan baik', ['meremehkan bangsa lain', 'menolak budaya sendiri'], 'Menggunakan bahasa Indonesia dengan baik dapat menunjukkan kebanggaan sebagai anak Indonesia.')
    ],
    C: [
      pancasilaEntry('c-kelahiran-pancasila', 'pancasila', 'direct', 'Hari Lahir Pancasila diperingati setiap tanggal …', '1 Juni', ['17 Agustus', '28 Oktober'], 'Hari Lahir Pancasila diperingati setiap 1 Juni.'),
      pancasilaEntry('c-dasar-negara', 'pancasila', 'direct', 'Pancasila berkedudukan sebagai …', 'dasar negara Indonesia', ['lagu kebangsaan', 'nama ibu kota'], 'Pancasila merupakan dasar negara Indonesia.'),
      pancasilaEntry('c-pandangan-hidup', 'pancasila', 'story', 'Pancasila sebagai pandangan hidup berarti nilai-nilainya menjadi …', 'pedoman dalam kehidupan', ['hiasan kelas saja', 'aturan untuk satu orang saja'], 'Pancasila menjadi pedoman dalam bersikap dan bertindak.'),
      pancasilaEntry('c-kesatuan-sila', 'pancasila', 'story', 'Sila-sila Pancasila harus dipahami sebagai …', 'satu kesatuan yang utuh', ['lima aturan yang saling bertentangan', 'sila yang boleh dipilih sesuka hati'], 'Kelima sila saling berkaitan dan menjadi satu kesatuan.'),
      pancasilaEntry('c-sikap-perumus', 'pancasila', 'story', 'Sikap para perumus Pancasila yang dapat diteladani adalah …', 'bermusyawarah untuk kepentingan bangsa', ['mementingkan diri sendiri', 'menolak perbedaan pendapat'], 'Musyawarah dan mengutamakan kepentingan bangsa merupakan teladan para perumus Pancasila.'),
      pancasilaEntry('c-norma', 'uud-1945', 'direct', 'Norma adalah …', 'aturan atau pedoman perilaku', ['hadiah perlombaan', 'nama sebuah wilayah'], 'Norma menjadi pedoman untuk mengatur perilaku dalam kehidupan bersama.'),
      pancasilaEntry('c-hak-warga', 'uud-1945', 'story', 'Contoh hak sebagai warga negara adalah …', 'mendapatkan perlindungan hukum', ['melanggar aturan lalu lintas', 'merusak fasilitas umum'], 'Warga negara berhak mendapatkan perlindungan hukum.'),
      pancasilaEntry('c-kewajiban-warga', 'uud-1945', 'story', 'Contoh kewajiban sebagai warga negara adalah …', 'menaati peraturan', ['mengabaikan aturan', 'mengambil hak orang lain'], 'Menaati peraturan merupakan kewajiban setiap warga negara.'),
      pancasilaEntry('c-musyawarah', 'uud-1945', 'story', 'Keputusan bersama sebaiknya diambil melalui …', 'musyawarah untuk mufakat', ['paksaan', 'pertengkaran'], 'Musyawarah memberi kesempatan kepada anggota untuk menyampaikan pendapat dan mencapai mufakat.'),
      pancasilaEntry('c-aturan-bersama', 'uud-1945', 'story', 'Setelah menyepakati aturan kelas, semua siswa harus …', 'melaksanakannya dengan tanggung jawab', ['mematuhinya hanya saat diawasi', 'mengubahnya sendiri'], 'Kesepakatan bersama harus dilaksanakan dengan tanggung jawab.'),
      pancasilaEntry('c-lestarikan-budaya', 'bhinneka-tunggal-ika', 'story', 'Contoh melestarikan keberagaman budaya adalah …', 'mempelajari dan menghargai budaya daerah', ['menganggap budaya daerah tidak penting', 'menghapus tradisi yang berbeda'], 'Mempelajari dan menghargai budaya daerah membantu melestarikan keberagaman.'),
      pancasilaEntry('c-beda-tetap-rukun', 'bhinneka-tunggal-ika', 'story', 'Semboyan Bhinneka Tunggal Ika mengajarkan kita untuk …', 'tetap bersatu dalam keberagaman', ['menyeragamkan semua budaya', 'memilih teman berdasarkan suku'], 'Bhinneka Tunggal Ika mengajarkan persatuan meskipun berbeda-beda.'),
      pancasilaEntry('c-inklusif', 'bhinneka-tunggal-ika', 'story', 'Sikap inklusif saat kerja kelompok ditunjukkan dengan …', 'memberi kesempatan semua teman berperan', ['memilih teman tertentu saja', 'mengabaikan teman yang berbeda'], 'Sikap inklusif memberi ruang bagi semua teman untuk berpartisipasi.'),
      pancasilaEntry('c-perbedaan-budaya', 'bhinneka-tunggal-ika', 'direct', 'Perbedaan budaya di Indonesia merupakan …', 'kekayaan bangsa', ['alasan untuk bermusuhan', 'hambatan untuk berteman'], 'Keberagaman budaya merupakan kekayaan bangsa Indonesia.'),
      pancasilaEntry('c-hormat-keyakinan', 'bhinneka-tunggal-ika', 'story', 'Saat teman menjalankan ibadah, kita sebaiknya …', 'memberi kesempatan dan menghormatinya', ['mengganggu', 'memaksa berhenti'], 'Menghormati keyakinan orang lain merupakan sikap sesuai Bhinneka Tunggal Ika.'),
      pancasilaEntry('c-wilayah-provinsi', 'nkri', 'direct', 'Kabupaten atau kota merupakan bagian dari wilayah …', 'provinsi', ['benua lain', 'laut internasional'], 'Kabupaten atau kota berada dalam wilayah provinsi.'),
      pancasilaEntry('c-bela-negara', 'nkri', 'story', 'Gotong royong menjaga lingkungan dapat menjadi wujud …', 'bela negara', ['permusuhan', 'pelanggaran aturan'], 'Menjaga lingkungan dan persatuan merupakan bentuk tanggung jawab sebagai warga negara.'),
      pancasilaEntry('c-jaga-keutuhan', 'nkri', 'story', 'Perilaku yang membantu menjaga keutuhan NKRI adalah …', 'mengutamakan persatuan dan menghargai perbedaan', ['menyebarkan kebencian', 'memecah persahabatan'], 'Persatuan dan penghargaan terhadap perbedaan membantu menjaga keutuhan NKRI.'),
      pancasilaEntry('c-kontribusi-warga', 'nkri', 'story', 'Pelajar dapat berkontribusi bagi lingkungan dengan cara …', 'belajar sungguh-sungguh dan menjaga kebersihan', ['merusak fasilitas umum', 'menolak kerja sama'], 'Belajar dan menjaga lingkungan merupakan kontribusi positif bagi bangsa.'),
      pancasilaEntry('c-daerah-nkri', 'nkri', 'direct', 'Kabupaten, kota, dan provinsi di Indonesia merupakan bagian dari …', 'wilayah NKRI', ['wilayah negara lain', 'wilayah tanpa pemerintahan'], 'Kabupaten, kota, dan provinsi merupakan bagian dari wilayah Negara Kesatuan Republik Indonesia.')
    ]
  };

  const pjokBanks = {
    A: [
      pjokEntry('a-gerak-lokomotor', 'terampil-bergerak', 'direct', 'Gerak berpindah tempat seperti berjalan dan berlari disebut gerak …', 'lokomotor', ['nonlokomotor', 'manipulatif'], 'Gerak lokomotor adalah gerak yang membuat tubuh berpindah tempat.'),
      pjokEntry('a-gerak-nonlokomotor', 'terampil-bergerak', 'direct', 'Membungkuk tanpa berpindah tempat merupakan gerak …', 'nonlokomotor', ['lokomotor', 'manipulatif'], 'Gerak nonlokomotor dilakukan tanpa berpindah tempat.'),
      pjokEntry('a-gerak-manipulatif', 'terampil-bergerak', 'direct', 'Melempar dan menangkap bola termasuk gerak …', 'manipulatif', ['lokomotor', 'diam'], 'Gerak manipulatif melibatkan penguasaan atau penggunaan benda seperti bola.'),
      pjokEntry('a-keseimbangan', 'terampil-bergerak', 'story', 'Agar tidak mudah jatuh saat berdiri dengan satu kaki, kita perlu menjaga …', 'keseimbangan', ['kecepatan', 'suara'], 'Keseimbangan membantu tubuh tetap stabil.'),
      pjokEntry('a-mendarat', 'terampil-bergerak', 'story', 'Saat mendarat setelah melompat, lutut sebaiknya …', 'ditekuk', ['dikunci lurus', 'diangkat tinggi'], 'Menekuk lutut membantu meredam benturan saat mendarat.'),
      pjokEntry('a-fair-play', 'belajar-melalui-gerak', 'direct', 'Bermain sesuai aturan dan menerima hasil permainan disebut …', 'fair play', ['curang', 'menyerah sebelum bermain'], 'Fair play berarti bermain jujur, mengikuti aturan, dan menghormati semua pemain.'),
      pjokEntry('a-menunggu-giliran', 'belajar-melalui-gerak', 'story', 'Saat menggunakan alat olahraga bersama, kita harus …', 'menunggu giliran', ['merebut alat', 'mendorong teman'], 'Menunggu giliran menunjukkan sikap tertib dan menghargai teman.'),
      pjokEntry('a-kerja-sama', 'belajar-melalui-gerak', 'story', 'Dalam permainan beregu, agar tujuan tercapai kita perlu …', 'bekerja sama', ['bermain sendiri', 'menyalahkan teman'], 'Kerja sama membantu tim menyelesaikan permainan dengan baik.'),
      pjokEntry('a-semangat-teman', 'belajar-melalui-gerak', 'story', 'Saat teman belum berhasil melakukan gerakan, sikap yang tepat adalah …', 'memberi semangat', ['mengejek', 'meninggalkannya'], 'Memberi semangat membuat kegiatan jasmani menjadi aman dan menyenangkan.'),
      pjokEntry('a-aturan-permainan', 'belajar-melalui-gerak', 'direct', 'Sebelum bermain, kita perlu mengetahui …', 'aturan permainan', ['nama semua penonton', 'warna langit'], 'Mengetahui aturan membantu permainan berjalan tertib dan aman.'),
      pjokEntry('a-manfaat-aktif', 'bergaya-hidup-aktif', 'direct', 'Aktivitas jasmani yang dilakukan teratur dapat membuat tubuh …', 'lebih bugar', ['selalu lemas', 'tidak perlu istirahat'], 'Aktivitas jasmani teratur membantu meningkatkan kebugaran.'),
      pjokEntry('a-bermain-aktif', 'bergaya-hidup-aktif', 'story', 'Contoh gaya hidup aktif adalah …', 'bermain dan bergerak setiap hari', ['duduk sepanjang hari', 'tidur sepanjang waktu'], 'Gaya hidup aktif melibatkan kegiatan bergerak secara teratur.'),
      pjokEntry('a-kurangi-duduk', 'bergaya-hidup-aktif', 'story', 'Jika terlalu lama duduk, sebaiknya kita …', 'berdiri dan bergerak sejenak', ['tetap duduk tanpa jeda', 'tidur di meja'], 'Bergerak sejenak membantu mengurangi kebiasaan duduk terlalu lama.'),
      pjokEntry('a-senang-bergerak', 'bergaya-hidup-aktif', 'story', 'Kegiatan olahraga akan lebih menyenangkan jika dilakukan dengan …', 'gembira', ['terpaksa dan marah', 'saling mengejek'], 'Kegembiraan membuat kita lebih bersemangat untuk aktif bergerak.'),
      pjokEntry('a-ajak-bermain', 'bergaya-hidup-aktif', 'story', 'Mengajak teman bermain di luar dapat membantu kita …', 'lebih banyak bergerak', ['tidak pernah berkeringat', 'selalu duduk'], 'Bermain di luar memberi kesempatan untuk bergerak aktif.'),
      pjokEntry('a-makanan-seimbang', 'memilih-hidup-sehat', 'direct', 'Makanan bergizi seimbang sebaiknya terdiri atas …', 'beragam jenis makanan', ['permen saja', 'minuman bersoda saja'], 'Tubuh membutuhkan beragam zat gizi dari berbagai jenis makanan.'),
      pjokEntry('a-minum-air', 'memilih-hidup-sehat', 'story', 'Setelah beraktivitas dan berkeringat, kita perlu …', 'minum air putih', ['menahan haus', 'minum obat tanpa alasan'], 'Air putih membantu mengganti cairan tubuh.'),
      pjokEntry('a-minta-bantuan', 'memilih-hidup-sehat', 'story', 'Jika terluka saat bermain, kita sebaiknya segera meminta bantuan …', 'orang dewasa yang dipercaya', ['teman yang tidak tahu', 'orang yang tidak dikenal'], 'Panduan PJOK mengajarkan murid mencari bantuan orang dewasa terpercaya saat berisiko.'),
      pjokEntry('a-aman-bermain', 'memilih-hidup-sehat', 'story', 'Tempat yang aman untuk bermain adalah …', 'lapangan yang bebas dari kendaraan', ['jalan raya yang ramai', 'dekat benda tajam'], 'Memilih tempat yang aman membantu mencegah cedera.'),
      pjokEntry('a-cuci-tangan', 'memilih-hidup-sehat', 'story', 'Setelah berolahraga, sebelum makan kita sebaiknya …', 'mencuci tangan', ['menyentuh makanan dengan tangan kotor', 'tidak minum sama sekali'], 'Mencuci tangan membantu menjaga kebersihan dan kesehatan.')
    ],
    B: [
      pjokEntry('b-dribel-tangan', 'terampil-bergerak', 'direct', 'Dalam permainan bola basket, menggiring bola dilakukan dengan …', 'memantulkan bola menggunakan tangan', ['menendang bola', 'memukul bola dengan kepala'], 'Dribel bola basket dilakukan dengan memantulkan bola menggunakan tangan.'),
      pjokEntry('b-menendang-bola', 'terampil-bergerak', 'direct', 'Gerak dasar yang paling banyak digunakan untuk memainkan sepak bola adalah …', 'menendang bola', ['menangkap bola dengan tangan', 'memukul bola dengan raket'], 'Sepak bola dimainkan terutama dengan menendang dan mengontrol bola menggunakan kaki.'),
      pjokEntry('b-lempar-tangkap', 'terampil-bergerak', 'story', 'Agar lemparan kepada teman tepat sasaran, kita perlu memperhatikan …', 'arah dan kekuatan lemparan', ['warna sepatu', 'suara penonton'], 'Arah dan kekuatan memengaruhi ketepatan lemparan.'),
      pjokEntry('b-rangkaian-gerak', 'terampil-bergerak', 'story', 'Rangkaian gerak dapat dilakukan dengan menggabungkan gerak …', 'berjalan, melompat, dan berputar', ['duduk diam saja', 'menutup mata sepanjang waktu'], 'Rangkaian gerak menggabungkan beberapa gerakan secara berurutan.'),
      pjokEntry('b-ubah-arah', 'terampil-bergerak', 'story', 'Saat harus menghindari lawan dalam permainan, kita dapat mengubah …', 'arah gerak', ['warna lapangan', 'ukuran bola'], 'Mengubah arah gerak dapat membantu melewati lawan.'),
      pjokEntry('b-strategi-tim', 'belajar-melalui-gerak', 'story', 'Sebelum permainan beregu dimulai, tim sebaiknya …', 'menyusun strategi sederhana', ['bermain tanpa aturan', 'menyembunyikan bola'], 'Strategi membantu tim bekerja sama mencapai tujuan.'),
      pjokEntry('b-komunikasi-tim', 'belajar-melalui-gerak', 'story', 'Saat bermain beregu, komunikasi diperlukan agar …', 'teman mengetahui rencana permainan', ['semua pemain bingung', 'permainan berhenti terus'], 'Komunikasi membantu anggota tim memahami peran dan rencana.'),
      pjokEntry('b-hasil-permainan', 'belajar-melalui-gerak', 'story', 'Setelah kalah dalam permainan, sikap yang baik adalah …', 'menerima hasil dan tetap berlatih', ['menyalahkan wasit', 'mengejek pemenang'], 'Menerima hasil dengan sportif dan berlatih kembali menunjukkan fair play.'),
      pjokEntry('b-peran-tim', 'belajar-melalui-gerak', 'direct', 'Dalam permainan beregu, setiap pemain sebaiknya …', 'menjalankan perannya', ['meninggalkan tim', 'menguasai semua tugas sendiri'], 'Menjalankan peran membantu tim bekerja secara efektif.'),
      pjokEntry('b-aturan-adil', 'belajar-melalui-gerak', 'story', 'Aturan permainan harus diterapkan secara …', 'adil kepada semua pemain', ['berbeda untuk teman dekat', 'hanya kepada tim lawan'], 'Aturan yang adil mendukung fair play.'),
      pjokEntry('b-aktivitas-teratur', 'bergaya-hidup-aktif', 'direct', 'Aktivitas jasmani yang teratur bermanfaat untuk menjaga …', 'kebugaran tubuh', ['rasa malas', 'kebiasaan duduk terus'], 'Aktivitas teratur membantu menjaga kebugaran.'),
      pjokEntry('b-jeda-duduk', 'bergaya-hidup-aktif', 'story', 'Saat belajar cukup lama, jeda yang baik diisi dengan …', 'berdiri dan melakukan peregangan ringan', ['berbaring sepanjang hari', 'duduk tanpa bergerak'], 'Peregangan ringan membantu mengurangi perilaku terlalu lama duduk.'),
      pjokEntry('b-pilih-aktivitas', 'bergaya-hidup-aktif', 'story', 'Agar senang beraktivitas jasmani, kita dapat memilih kegiatan yang …', 'sesuai minat dan kemampuan', ['selalu berbahaya', 'membuat tubuh dipaksa'], 'Aktivitas yang sesuai minat dan kemampuan lebih menyenangkan dan aman.'),
      pjokEntry('b-pemanasan', 'bergaya-hidup-aktif', 'story', 'Sebelum aktivitas jasmani, pemanasan membantu tubuh …', 'siap bergerak', ['menjadi mengantuk', 'kehilangan tenaga seluruhnya'], 'Pemanasan menyiapkan tubuh sebelum melakukan gerakan.'),
      pjokEntry('b-aktif-bersama', 'bergaya-hidup-aktif', 'story', 'Mengikuti permainan tradisional bersama teman merupakan contoh …', 'aktivitas jasmani yang menyenangkan', ['perilaku sedentari', 'istirahat tanpa gerak'], 'Permainan tradisional dapat membuat kita aktif sekaligus bersosialisasi.'),
      pjokEntry('b-gizi-seimbang', 'memilih-hidup-sehat', 'direct', 'Menu bergizi seimbang sebaiknya mengandung …', 'karbohidrat, protein, sayur, dan buah', ['gula saja', 'garam saja'], 'Tubuh memerlukan beragam zat gizi dari makanan yang seimbang.'),
      pjokEntry('b-cedera-ringan', 'memilih-hidup-sehat', 'story', 'Saat mengalami cedera ringan, langkah pertama yang tepat adalah …', 'beristirahat dan menghentikan aktivitas', ['memaksa terus bermain', 'memijat keras bagian yang sakit'], 'Cedera ringan perlu ditangani dengan menghentikan aktivitas dan meminta bantuan sesuai kebutuhan.'),
      pjokEntry('b-rice-rest', 'memilih-hidup-sehat', 'direct', 'Dalam prinsip RICE, huruf R berarti …', 'Rest atau istirahat', ['Run atau berlari', 'Rise atau melompat'], 'RICE adalah Rest, Ice, Compression, dan Elevation; R berarti istirahat.'),
      pjokEntry('b-alat-pelindung', 'memilih-hidup-sehat', 'story', 'Saat bersepeda, alat yang membantu melindungi kepala adalah …', 'helm', ['syal panjang', 'gelang'], 'Helm membantu melindungi kepala dari benturan.'),
      pjokEntry('b-air-aktivitas', 'memilih-hidup-sehat', 'story', 'Membawa air minum saat berolahraga membantu mencegah …', 'kekurangan cairan', ['bertambahnya tinggi badan', 'lapar sepanjang hari'], 'Minum cukup membantu menjaga cairan tubuh saat beraktivitas.')
    ],
    C: [
      pjokEntry('c-passing-ruang', 'terampil-bergerak', 'story', 'Dalam permainan beregu, teman yang berada di ruang kosong dapat menjadi pilihan …', 'umpan', ['penonton', 'wasit'], 'Mengumpan kepada teman di ruang kosong dapat membantu tim melanjutkan serangan.'),
      pjokEntry('c-gabungan-gerak', 'terampil-bergerak', 'story', 'Menggiring bola lalu mengoper kepada teman merupakan contoh …', 'menggabungkan keterampilan gerak', ['beristirahat total', 'gerak tanpa tujuan'], 'Menggiring dan mengoper merupakan rangkaian keterampilan gerak.'),
      pjokEntry('c-ketepatan-gerak', 'terampil-bergerak', 'direct', 'Agar lemparan tepat sasaran, kita perlu mengatur …', 'arah, kekuatan, dan waktu pelepasan', ['warna bola saja', 'suara penonton'], 'Ketepatan gerak dipengaruhi arah, kekuatan, dan waktu pelepasan.'),
      pjokEntry('c-adaptasi-strategi', 'terampil-bergerak', 'story', 'Jika strategi awal tidak berhasil, pemain sebaiknya …', 'menyesuaikan strategi geraknya', ['berhenti tanpa mencoba', 'menyalahkan teman'], 'Strategi gerak dapat disesuaikan berdasarkan situasi permainan.'),
      pjokEntry('c-keseimbangan-gerak', 'terampil-bergerak', 'direct', 'Saat mengubah arah dengan cepat, keseimbangan membantu kita …', 'tetap mengendalikan tubuh', ['kehilangan arah', 'jatuh dengan sengaja'], 'Keseimbangan membantu pengendalian tubuh dalam berbagai situasi gerak.'),
      pjokEntry('c-evaluasi-strategi', 'belajar-melalui-gerak', 'story', 'Setelah permainan, mengevaluasi strategi berarti …', 'menilai hal yang berhasil dan perlu diperbaiki', ['melupakan semua kejadian', 'menyalahkan satu pemain'], 'Evaluasi membantu tim memperbaiki strategi pada permainan berikutnya.'),
      pjokEntry('c-aturan-inklusif', 'belajar-melalui-gerak', 'story', 'Aturan permainan dapat dimodifikasi agar …', 'semua murid dapat berpartisipasi', ['hanya pemain terkuat yang bermain', 'permainan menjadi tidak aman'], 'Aturan yang inklusif memberi kesempatan kepada semua murid untuk berpartisipasi.'),
      pjokEntry('c-kepemimpinan', 'belajar-melalui-gerak', 'story', 'Pemimpin tim yang baik seharusnya …', 'mendengarkan dan mengarahkan anggota', ['memerintah dengan kasar', 'mengambil semua keputusan sendiri'], 'Kepemimpinan yang baik mendukung komunikasi dan kerja sama.'),
      pjokEntry('c-fair-play', 'belajar-melalui-gerak', 'story', 'Mengakui kesalahan sendiri saat bermain menunjukkan sikap …', 'jujur dan sportif', ['curang', 'sombong'], 'Mengakui kesalahan merupakan bagian dari fair play.'),
      pjokEntry('c-peran-beragam', 'belajar-melalui-gerak', 'story', 'Dalam kegiatan olahraga, keberhasilan kelompok dapat dicapai dengan …', 'menjalankan berbagai peran secara bertanggung jawab', ['menolak semua tugas', 'membiarkan satu orang bekerja'], 'Setiap peran membantu kelompok mencapai tujuan bersama.'),
      pjokEntry('c-aktivitas-kesehatan', 'bergaya-hidup-aktif', 'direct', 'Aktivitas jasmani yang teratur dapat membantu menjaga …', 'kesehatan dan kebugaran', ['kebiasaan tidur sepanjang hari', 'perilaku duduk terus-menerus'], 'Aktivitas jasmani teratur mendukung kesehatan dan kebugaran.'),
      pjokEntry('c-sedentari', 'bergaya-hidup-aktif', 'story', 'Perilaku sedentari adalah kebiasaan …', 'duduk atau berbaring terlalu lama dengan sedikit gerak', ['berjalan setiap pagi', 'berolahraga teratur'], 'Perilaku sedentari berarti terlalu banyak duduk atau berbaring dengan sedikit aktivitas.'),
      pjokEntry('c-tujuan-aktif', 'bergaya-hidup-aktif', 'story', 'Menetapkan tujuan aktivitas jasmani membantu kita …', 'memantau perkembangan kebugaran', ['menghindari semua gerakan', 'berlatih tanpa arah'], 'Tujuan membantu kita memantau dan memperbaiki kebiasaan aktif.'),
      pjokEntry('c-istirahat', 'bergaya-hidup-aktif', 'story', 'Setelah aktivitas jasmani yang cukup berat, tubuh membutuhkan …', 'istirahat dan pemulihan', ['aktivitas berat tanpa henti', 'tidak minum sama sekali'], 'Istirahat membantu tubuh melakukan pemulihan.'),
      pjokEntry('c-aktif-sehari', 'bergaya-hidup-aktif', 'story', 'Contoh menjaga gaya hidup aktif dalam keseharian adalah …', 'memilih berjalan kaki untuk jarak dekat yang aman', ['menggunakan gawai sepanjang hari', 'menghindari semua kegiatan fisik'], 'Berjalan kaki untuk jarak dekat yang aman dapat menambah aktivitas jasmani.'),
      pjokEntry('c-karbohidrat', 'memilih-hidup-sehat', 'direct', 'Zat gizi yang menjadi sumber energi utama saat beraktivitas adalah …', 'karbohidrat', ['air saja', 'serat saja'], 'Karbohidrat merupakan salah satu sumber energi utama tubuh.'),
      pjokEntry('c-baca-label', 'memilih-hidup-sehat', 'story', 'Saat memilih makanan kemasan, kita sebaiknya memperhatikan …', 'informasi kandungan gizi', ['warna bungkus saja', 'ukuran gambar saja'], 'Informasi kandungan gizi membantu memilih makanan dengan lebih bijak.'),
      pjokEntry('c-cedera-sedang', 'memilih-hidup-sehat', 'story', 'Jika cedera terasa cukup berat saat olahraga, kita sebaiknya …', 'menghentikan aktivitas dan meminta bantuan guru atau orang dewasa', ['memaksakan diri bermain', 'menyembunyikan cedera'], 'Cedera yang cukup berat perlu segera ditangani dengan bantuan orang dewasa.'),
      pjokEntry('c-hidrasi', 'memilih-hidup-sehat', 'story', 'Minum air yang cukup saat beraktivitas membantu menjaga …', 'keseimbangan cairan tubuh', ['warna rambut', 'ketajaman suara'], 'Air membantu menjaga keseimbangan cairan tubuh.'),
      pjokEntry('c-tidur-sehat', 'memilih-hidup-sehat', 'story', 'Tidur cukup penting bagi murid yang aktif karena membantu …', 'pemulihan tubuh', ['tubuh tidak perlu bergerak', 'menggantikan semua makanan'], 'Tidur cukup membantu pemulihan tubuh dan kesiapan beraktivitas.')
    ]
  };

  const seniBudayaBanks = {
    A: [
      seniBudayaEntry('a-rupa-titik', 'seni-rupa', 'direct', 'Unsur seni rupa yang paling sederhana adalah …', 'titik', ['nada', 'dialog'], 'Titik merupakan unsur rupa yang paling sederhana.'),
      seniBudayaEntry('a-rupa-garis', 'seni-rupa', 'direct', 'Coretan lurus atau melengkung dalam gambar disebut …', 'garis', ['irama', 'peran'], 'Garis dapat berbentuk lurus, melengkung, atau zig-zag.'),
      seniBudayaEntry('a-rupa-warna', 'seni-rupa', 'story', 'Agar gambar bunga tampak cerah, Rara dapat menggunakan …', 'warna', ['bunyi', 'gerak tari'], 'Warna membuat gambar tampak lebih menarik dan membantu menyampaikan suasana.'),
      seniBudayaEntry('a-rupa-alat', 'seni-rupa', 'direct', 'Alat yang tepat untuk membuat gambar di kertas adalah …', 'pensil', ['peluit', 'panggung'], 'Pensil dapat digunakan untuk membuat garis dan sketsa di kertas.'),
      seniBudayaEntry('a-rupa-apresiasi', 'seni-rupa', 'story', 'Saat melihat gambar buatan teman, sikap yang baik adalah …', 'menghargai dan memberi komentar baik', ['mengejeknya', 'merobek gambarnya'], 'Menghargai karya teman menunjukkan sikap apresiatif.'),
      seniBudayaEntry('a-musik-irama', 'seni-musik', 'direct', 'Pola panjang-pendek bunyi dalam musik disebut …', 'irama', ['warna', 'tokoh'], 'Irama mengatur pola panjang-pendek atau ketukan bunyi.'),
      seniBudayaEntry('a-musik-nada', 'seni-musik', 'direct', 'Tinggi rendahnya bunyi disebut …', 'nada', ['garis', 'latar'], 'Nada menunjukkan tinggi atau rendahnya bunyi.'),
      seniBudayaEntry('a-musik-tubuh', 'seni-musik', 'story', 'Menepuk tangan mengikuti ketukan merupakan kegiatan membuat …', 'irama', ['lukisan', 'dialog'], 'Tepukan tangan dapat digunakan untuk membuat pola irama sederhana.'),
      seniBudayaEntry('a-musik-tempo', 'seni-musik', 'story', 'Lagu yang dinyanyikan dengan cepat memiliki tempo …', 'cepat', ['lambat', 'diam'], 'Tempo adalah cepat atau lambatnya lagu dinyanyikan.'),
      seniBudayaEntry('a-musik-ekspresi', 'seni-musik', 'story', 'Bernyanyi bersama sebaiknya dilakukan dengan …', 'gembira dan percaya diri', ['berteriak sembarangan', 'mengganggu teman'], 'Ekspresi gembira dan percaya diri membuat kegiatan bermusik menyenangkan.'),
      seniBudayaEntry('a-tari-gerak', 'seni-tari', 'direct', 'Seni tari menggunakan unsur utama berupa …', 'gerak tubuh', ['angka hitung', 'warna kertas'], 'Tari menyampaikan gagasan atau perasaan melalui gerak tubuh.'),
      seniBudayaEntry('a-tari-ruang', 'seni-tari', 'story', 'Saat menari, kita perlu memperhatikan ruang agar …', 'tidak bertabrakan', ['suara menjadi keras', 'warna pakaian berubah'], 'Kesadaran terhadap ruang membuat gerakan lebih aman dan teratur.'),
      seniBudayaEntry('a-tari-irama', 'seni-tari', 'direct', 'Gerak tari dapat dilakukan mengikuti …', 'irama musik', ['warna dinding', 'ukuran sepatu'], 'Irama musik dapat menjadi panduan gerak dalam tari.'),
      seniBudayaEntry('a-tari-ekspresi', 'seni-tari', 'story', 'Wajah penari yang tersenyum dapat menunjukkan ekspresi …', 'gembira', ['marah', 'takut'], 'Ekspresi wajah membantu menyampaikan perasaan dalam tari.'),
      seniBudayaEntry('a-tari-budaya', 'seni-tari', 'story', 'Saat melihat tarian daerah, kita sebaiknya …', 'menghargai keberagamannya', ['mengejeknya', 'menganggapnya tidak penting'], 'Tarian daerah merupakan bagian dari budaya yang perlu dihargai.'),
      seniBudayaEntry('a-teater-ekspresi', 'seni-teater', 'direct', 'Dalam bermain peran, perasaan tokoh dapat ditunjukkan melalui …', 'ekspresi wajah', ['warna kertas', 'jumlah kursi'], 'Ekspresi wajah membantu penonton memahami perasaan tokoh.'),
      seniBudayaEntry('a-teater-tokoh', 'seni-teater', 'direct', 'Orang yang diperankan dalam cerita disebut …', 'tokoh', ['irama', 'kanvas'], 'Tokoh adalah orang atau karakter yang ada dalam cerita.'),
      seniBudayaEntry('a-teater-suara', 'seni-teater', 'story', 'Agar dialog terdengar, pemain teater perlu berbicara dengan …', 'jelas', ['sangat pelan', 'membelakangi penonton'], 'Suara yang jelas membantu penonton mengikuti cerita.'),
      seniBudayaEntry('a-teater-cerita', 'seni-teater', 'story', 'Pentas bermain peran akan lebih menarik jika pemain …', 'bekerja sama', ['saling mengganggu', 'melupakan cerita'], 'Kerja sama membantu pemain menyajikan cerita dengan baik.'),
      seniBudayaEntry('a-teater-penonton', 'seni-teater', 'story', 'Saat menonton pertunjukan, kita sebaiknya …', 'menyimak dengan tertib', ['berteriak terus', 'berjalan di depan panggung'], 'Menyimak dengan tertib merupakan sikap menghargai pertunjukan.')
    ],
    B: [
      seniBudayaEntry('b-rupa-dua-dimensi', 'seni-rupa', 'direct', 'Karya yang memiliki panjang dan lebar, tetapi tidak memiliki tinggi disebut karya …', 'dua dimensi', ['tiga dimensi', 'musik vokal'], 'Karya dua dimensi memiliki panjang dan lebar, seperti gambar atau lukisan.'),
      seniBudayaEntry('b-rupa-tekstur', 'seni-rupa', 'story', 'Permukaan kasar atau halus pada suatu benda disebut …', 'tekstur', ['tempo', 'dialog'], 'Tekstur adalah sifat permukaan benda, misalnya kasar, halus, atau licin.'),
      seniBudayaEntry('b-rupa-kolase', 'seni-rupa', 'direct', 'Karya yang dibuat dengan menempelkan potongan kertas atau bahan lain disebut …', 'kolase', ['pantomim', 'ansambel'], 'Kolase dibuat dengan menempelkan berbagai bahan pada bidang dasar.'),
      seniBudayaEntry('b-rupa-komposisi', 'seni-rupa', 'story', 'Penataan unsur gambar agar tampak seimbang disebut …', 'komposisi', ['intonasi', 'pola lantai'], 'Komposisi adalah penataan unsur-unsur karya agar terlihat harmonis.'),
      seniBudayaEntry('b-rupa-refleksi', 'seni-rupa', 'story', 'Setelah membuat karya, kita dapat melakukan refleksi dengan memikirkan …', 'bagian yang disukai dan yang ingin diperbaiki', ['cara mengejek karya teman', 'cara menyembunyikan alat'], 'Refleksi membantu kita mengenali pengalaman dan rencana perbaikan karya.'),
      seniBudayaEntry('b-musik-pola', 'seni-musik', 'direct', 'Susunan ketukan yang berulang dalam musik disebut …', 'pola irama', ['pola lantai', 'latar cerita'], 'Pola irama adalah susunan ketukan yang dapat diulang.'),
      seniBudayaEntry('b-musik-melodi', 'seni-musik', 'direct', 'Rangkaian nada yang terdengar berurutan disebut …', 'melodi', ['tekstur', 'properti'], 'Melodi adalah rangkaian nada yang membentuk bagian lagu.'),
      seniBudayaEntry('b-musik-alat-ritmis', 'seni-musik', 'story', 'Alat musik yang berfungsi mengatur ketukan disebut alat musik …', 'ritmis', ['lukis', 'peran'], 'Alat musik ritmis membantu menjaga ketukan atau irama.'),
      seniBudayaEntry('b-musik-dinamik', 'seni-musik', 'direct', 'Keras lembutnya bunyi dalam musik disebut …', 'dinamika', ['warna', 'arah hadap'], 'Dinamika menunjukkan keras atau lembutnya bunyi.'),
      seniBudayaEntry('b-musik-merawat', 'seni-musik', 'story', 'Setelah menggunakan alat musik, kita sebaiknya …', 'membersihkan dan menyimpannya dengan baik', ['melemparkannya', 'membiarkannya rusak'], 'Merawat alat musik membantu menjaga fungsi dan keawetannya.'),
      seniBudayaEntry('b-tari-level', 'seni-tari', 'direct', 'Gerak tari dengan posisi tubuh berdiri disebut level …', 'tinggi', ['rendah', 'duduk diam'], 'Level tinggi dilakukan dengan posisi tubuh yang lebih tinggi, seperti berdiri atau melompat.'),
      seniBudayaEntry('b-tari-arah', 'seni-tari', 'story', 'Perubahan hadap kanan, kiri, atau belakang dalam tari berkaitan dengan …', 'arah gerak', ['warna suara', 'bahan kolase'], 'Arah gerak menentukan ke mana tubuh atau pandangan penari menghadap.'),
      seniBudayaEntry('b-tari-tempo', 'seni-tari', 'story', 'Gerak tari yang mengikuti musik lambat sebaiknya dilakukan dengan …', 'tempo lambat', ['tergesa-gesa', 'tanpa irama'], 'Tempo gerak perlu disesuaikan dengan tempo musik.'),
      seniBudayaEntry('b-tari-kelompok', 'seni-tari', 'story', 'Agar tari kelompok tampak rapi, para penari perlu …', 'berlatih dan mengikuti pola gerak', ['bergerak sesuka hati', 'saling mendahului'], 'Latihan dan kesamaan pola gerak membuat tari kelompok lebih kompak.'),
      seniBudayaEntry('b-tari-properti', 'seni-tari', 'direct', 'Benda yang digunakan untuk mendukung penampilan tari disebut …', 'properti tari', ['kanvas', 'mikrofon berita'], 'Properti tari adalah benda yang digunakan untuk mendukung gerak atau tema tari.'),
      seniBudayaEntry('b-teater-karakter', 'seni-teater', 'direct', 'Sifat atau watak yang dimiliki tokoh disebut …', 'karakter', ['irama', 'tekstur'], 'Karakter menunjukkan sifat atau watak tokoh dalam cerita.'),
      seniBudayaEntry('b-teater-dialog', 'seni-teater', 'direct', 'Percakapan antartokoh dalam drama disebut …', 'dialog', ['pola lantai', 'kolase'], 'Dialog adalah percakapan yang disampaikan oleh tokoh-tokoh.'),
      seniBudayaEntry('b-teater-latar', 'seni-teater', 'story', 'Tempat dan waktu terjadinya cerita disebut …', 'latar', ['nada', 'garis'], 'Latar menjelaskan tempat dan waktu dalam cerita.'),
      seniBudayaEntry('b-teater-gerak', 'seni-teater', 'story', 'Gerak tubuh tanpa kata untuk menyampaikan pesan disebut …', 'pantomim', ['lukisan', 'ansambel'], 'Pantomim menggunakan gerak dan ekspresi tanpa dialog lisan.'),
      seniBudayaEntry('b-teater-umpan-balik', 'seni-teater', 'story', 'Setelah bermain drama, masukan dari teman sebaiknya …', 'didengarkan untuk memperbaiki penampilan', ['ditolak dengan marah', 'digunakan untuk mengejek'], 'Umpan balik membantu pemain mengembangkan penampilannya.'),
    ],
    C: [
      seniBudayaEntry('c-rupa-unsur', 'seni-rupa', 'direct', 'Unsur rupa yang dapat menunjukkan arah dan gerak dalam gambar adalah …', 'garis', ['tempo', 'dialog'], 'Garis dapat menunjukkan arah, bentuk, dan kesan gerak dalam karya.'),
      seniBudayaEntry('c-rupa-prinsip', 'seni-rupa', 'story', 'Pengulangan unsur rupa secara teratur dalam karya disebut …', 'irama visual', ['intonasi suara', 'tokoh utama'], 'Irama visual muncul dari pengulangan unsur rupa secara teratur.'),
      seniBudayaEntry('c-rupa-fungsi', 'seni-rupa', 'story', 'Karya seni rupa yang dibuat untuk digunakan dalam kehidupan sehari-hari memiliki fungsi …', 'praktis', ['hanya bunyi', 'tanpa tujuan'], 'Fungsi praktis berarti karya memiliki kegunaan selain nilai keindahan.'),
      seniBudayaEntry('c-rupa-lingkungan', 'seni-rupa', 'story', 'Membuat poster ajakan menjaga kebersihan merupakan karya yang …', 'merespons masalah di lingkungan', ['tidak memiliki pesan', 'hanya untuk disembunyikan'], 'Karya seni dapat menyampaikan pesan dan merespons pengalaman di sekitar.'),
      seniBudayaEntry('c-rupa-apresiasi', 'seni-rupa', 'story', 'Saat mengapresiasi karya teman, komentar yang baik sebaiknya berdasarkan …', 'unsur dan gagasan karya', ['suka atau tidak suka saja', 'ejekan terhadap pembuatnya'], 'Apresiasi yang baik membahas unsur, gagasan, dan pengalaman saat melihat karya.'),
      seniBudayaEntry('c-musik-melodi', 'seni-musik', 'direct', 'Gabungan nada yang tersusun menjadi bagian lagu disebut …', 'melodi', ['tekstur', 'properti'], 'Melodi adalah susunan nada yang terdengar sebagai bagian lagu.'),
      seniBudayaEntry('c-musik-tempo', 'seni-musik', 'story', 'Petunjuk untuk memainkan lagu dengan cepat atau lambat disebut …', 'tempo', ['warna', 'latar'], 'Tempo memberi petunjuk kecepatan lagu.'),
      seniBudayaEntry('c-musik-dinamika', 'seni-musik', 'story', 'Perubahan bunyi dari lembut menjadi keras dalam lagu berkaitan dengan …', 'dinamika', ['pola lantai', 'tekstur'], 'Dinamika mengatur perubahan keras dan lembutnya bunyi.'),
      seniBudayaEntry('c-musik-ansambel', 'seni-musik', 'story', 'Bermain musik bersama-sama dengan beberapa alat musik disebut …', 'ansambel', ['monolog', 'sketsa'], 'Ansambel adalah kegiatan bermain musik secara bersama-sama.'),
      seniBudayaEntry('c-musik-kreasi', 'seni-musik', 'story', 'Membuat pola irama baru dari bunyi tepukan merupakan kegiatan …', 'menciptakan karya musik', ['menyalin tanpa mencoba', 'menghapus semua bunyi'], 'Membuat pola irama baru merupakan proses menciptakan karya musik.'),
      seniBudayaEntry('c-tari-pola-lantai', 'seni-tari', 'direct', 'Garis atau formasi yang dilalui penari saat bergerak disebut …', 'pola lantai', ['melodi', 'latar panggung'], 'Pola lantai adalah garis atau formasi perpindahan penari.'),
      seniBudayaEntry('c-tari-ekspresi', 'seni-tari', 'story', 'Ekspresi dalam tari digunakan untuk …', 'menyampaikan perasaan atau makna', ['mengganti warna lantai', 'menghentikan musik'], 'Ekspresi membantu penonton memahami perasaan atau makna tari.'),
      seniBudayaEntry('c-tari-properti', 'seni-tari', 'story', 'Pemilihan properti tari sebaiknya disesuaikan dengan …', 'tema dan gerak tari', ['warna sepatu penonton', 'jumlah lampu kelas'], 'Properti harus mendukung tema dan tidak menghambat gerak penari.'),
      seniBudayaEntry('c-tari-kreasi', 'seni-tari', 'story', 'Menyusun beberapa gerak menjadi satu tarian merupakan kegiatan …', 'menciptakan koreografi', ['menghafal dialog', 'mencampur warna'], 'Koreografi adalah susunan gerak tari yang dirancang menjadi sebuah karya.'),
      seniBudayaEntry('c-tari-budaya', 'seni-tari', 'story', 'Mempelajari tari dari daerah lain dapat menumbuhkan sikap …', 'menghargai keberagaman budaya', ['merendahkan budaya lain', 'menolak semua perbedaan'], 'Tari daerah mengajarkan kita mengenali dan menghargai keberagaman budaya.'),
      seniBudayaEntry('c-teater-naskah', 'seni-teater', 'direct', 'Teks yang berisi cerita, dialog, dan petunjuk pementasan disebut …', 'naskah drama', ['notasi musik', 'sketsa warna'], 'Naskah drama menjadi pedoman cerita dan dialog dalam pementasan.'),
      seniBudayaEntry('c-teater-blocking', 'seni-teater', 'story', 'Pengaturan posisi dan perpindahan pemain di panggung disebut …', 'blocking', ['tempo', 'tekstur'], 'Blocking membantu mengatur posisi serta perpindahan pemain di panggung.'),
      seniBudayaEntry('c-teater-improvisasi', 'seni-teater', 'story', 'Bermain peran secara spontan tanpa menyiapkan semua dialog disebut …', 'improvisasi', ['kolase', 'pola irama'], 'Improvisasi dilakukan secara spontan dengan tetap memperhatikan situasi cerita.'),
      seniBudayaEntry('c-teater-kolaborasi', 'seni-teater', 'story', 'Pementasan teater yang baik membutuhkan kerja sama antara pemain dan …', 'tim pendukung pementasan', ['penonton yang berisik', 'orang yang tidak terlibat'], 'Pemain, penata panggung, penata suara, dan tim lain perlu bekerja sama.'),
      seniBudayaEntry('c-teater-refleksi', 'seni-teater', 'story', 'Refleksi setelah pementasan berguna untuk …', 'mengetahui keberhasilan dan perbaikan berikutnya', ['menyalahkan satu orang', 'menghapus pengalaman bermain'], 'Refleksi membantu kelompok memperbaiki proses dan pementasan selanjutnya.')
    ]
  };

  function shuffled(items, random = Math.random) {
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(random() * (index + 1));
      [result[index], result[swap]] = [result[swap], result[index]];
    }
    return result;
  }

  function randomInt(min, max, random = Math.random) {
    return min + Math.floor(random() * (max - min + 1));
  }

  function formatNumber(value) {
    const absolute = Math.abs(value).toLocaleString('id-ID');
    return value < 0 ? '−' + absolute : absolute;
  }

  function symbol(operation) {
    return { penjumlahan: '+', pengurangan: '−', perkalian: '×', pembagian: '÷' }[operation];
  }

  function canonicalKey(operation, a, b) {
    const values = operation === 'penjumlahan' || operation === 'perkalian' ? [a, b].sort((x, y) => x - y) : [a, b];
    return operation + ':' + values[0] + ':' + values[1];
  }

  function maxFor(phase, operation, tier) {
    if (phase === 'A') return tier === 1 ? 10 : tier === 2 ? 15 : 20;
    if (phase === 'B') {
      if (operation === 'perkalian' || operation === 'pembagian') return tier === 1 ? 25 : tier === 2 ? 50 : 100;
      return tier === 1 ? 100 : tier === 2 ? 500 : 1000;
    }
    return tier === 1 ? 100 : tier === 2 ? 500 : 1000;
  }

  function operationValues(phase, operation, tier, negative, random = Math.random) {
    const cap = maxFor(phase, operation, tier);
    for (let attempt = 0; attempt < 5000; attempt += 1) {
      if (operation === 'penjumlahan') {
        const a = randomInt(0, cap, random);
        const b = randomInt(0, cap - a, random);
        if (a + b > 0) return { a, b, answer: a + b };
      } else if (operation === 'pengurangan') {
        if (negative) {
          const a = randomInt(0, Math.max(0, cap - 1), random);
          const b = randomInt(a + 1, cap, random);
          return { a, b, answer: a - b };
        }
        const a = randomInt(1, cap, random);
        const b = randomInt(0, a, random);
        if (a !== b) return { a, b, answer: a - b };
      } else if (operation === 'perkalian') {
        const a = randomInt(2, Math.min(50, cap), random);
        const b = randomInt(2, Math.min(50, cap), random);
        if (a * b <= cap) return { a, b, answer: a * b };
      } else if (operation === 'pembagian') {
        const divisor = randomInt(2, Math.min(25, Math.max(2, cap)), random);
        const quotient = randomInt(1, Math.max(1, Math.floor(cap / divisor)), random);
        const dividend = divisor * quotient;
        if (dividend <= cap) return { a: dividend, b: divisor, answer: quotient };
      }
    }
    if (operation === 'penjumlahan') return { a: 1, b: Math.max(1, cap - 1), answer: cap };
    if (operation === 'pengurangan') return negative ? { a: 0, b: 1, answer: -1 } : { a: 2, b: 1, answer: 1 };
    if (operation === 'perkalian') return { a: 2, b: 2, answer: 4 };
    return { a: 4, b: 2, answer: 2 };
  }

  function buildOptions(answer, cap, allowNegative, random = Math.random) {
    const candidates = [answer + 1, answer - 1, answer + 2, answer - 2, answer + 10, answer - 10, answer * 2, answer === 0 ? 1 : 0];
    const options = [];
    for (const value of shuffled(candidates, random)) {
      if (value === answer || options.includes(value)) continue;
      if (!allowNegative && value < 0) continue;
      if (Math.abs(value) > Math.max(cap, 20)) continue;
      options.push(value);
      if (options.length === 2) break;
    }
    let fallback = 0;
    while (options.length < 2) {
      const value = allowNegative ? fallback - 1 : fallback;
      fallback += 1;
      if (value !== answer && !options.includes(value)) options.push(value);
    }
    return shuffled([answer, ...options], random).map(formatNumber);
  }

  function storyText(operation, a, b, answer, negative, random = Math.random) {
    if (operation === 'penjumlahan') {
      const variants = [
        `Di tepi ngarai ada ${formatNumber(a)} bunga dan ${formatNumber(b)} bunga lagi. Berapa semuanya?`,
        `Katak mengumpulkan ${formatNumber(a)} batu pagi hari dan ${formatNumber(b)} batu sore hari. Berapa batu seluruhnya?`,
        `Ada ${formatNumber(a)} burung di pohon. Datang lagi ${formatNumber(b)} burung. Berapa burung sekarang?`
      ];
      return variants[randomInt(0, variants.length - 1, random)];
    }
    if (operation === 'pengurangan') {
      if (negative) return `Suhu di puncak ngarai ${formatNumber(a)}°C lalu turun ${formatNumber(b)}°C. Berapa suhu sekarang?`;
      const variants = [
        `Katak membawa ${formatNumber(a)} batu kecil. Ia memberikan ${formatNumber(b)} batu. Sisa batunya …`,
        `Ada ${formatNumber(a)} daun. Tertiup ${formatNumber(b)} daun. Berapa daun yang tersisa?`,
        `Perpustakaan memiliki ${formatNumber(a)} buku. Sebanyak ${formatNumber(b)} dipinjam. Sisa buku …`
      ];
      return variants[randomInt(0, variants.length - 1, random)];
    }
    if (operation === 'perkalian') {
      const variants = [
        `Ada ${formatNumber(a)} kelompok, setiap kelompok berisi ${formatNumber(b)} benda. Berapa jumlah benda?`,
        `${formatNumber(a)} baris masing-masing berisi ${formatNumber(b)} bibit. Berapa bibit seluruhnya?`,
        `Setiap kotak berisi ${formatNumber(b)} pensil. Jika ada ${formatNumber(a)} kotak, berapa pensil semuanya?`
      ];
      return variants[randomInt(0, variants.length - 1, random)];
    }
    return `Sebanyak ${formatNumber(a)} benda dibagi rata ke dalam ${formatNumber(b)} kelompok. Setiap kelompok mendapat …`;
  }

  function directText(operation, a, b) { return `Berapa hasil dari ${formatNumber(a)} ${symbol(operation)} ${formatNumber(b)}?`; }

  function balanceAnswerPosition(question, desiredIndex) {
    const currentIndex = question.answer;
    if (currentIndex === desiredIndex) return question;
    [question.options[currentIndex], question.options[desiredIndex]] = [question.options[desiredIndex], question.options[currentIndex]];
    question.answer = desiredIndex;
    return question;
  }

  function balancedAnswerOrder(count, random) {
    const counts = [0, 0, 0];
    for (let index = 0; index < count; index += 1) counts[index % 3] += 1;
    const result = [];
    while (result.length < count) {
      let candidates = [0, 1, 2].filter(value => counts[value] > 0 && !(result.length >= 2 && result[result.length - 1] === value && result[result.length - 2] === value));
      if (!candidates.length) candidates = [0, 1, 2].filter(value => counts[value] > 0);
      const highest = Math.max(...candidates.map(value => counts[value]));
      candidates = shuffled(candidates.filter(value => counts[value] === highest), random);
      const chosen = candidates[0];
      result.push(chosen);
      counts[chosen] -= 1;
    }
    return result;
  }

  function createQuestion(phase, descriptor, usedKeys = new Set(), random = Math.random) {
    const operation = descriptor.operation;
    let values;
    let key;
    for (let attempt = 0; attempt < 5000; attempt += 1) {
      values = operationValues(phase, operation, descriptor.tier || 1, Boolean(descriptor.negative), random);
      key = canonicalKey(operation, values.a, values.b);
      if (!usedKeys.has(key)) break;
    }
    const cap = maxFor(phase, operation, descriptor.tier || 1);
    const allowNegative = phase === 'C' && operation === 'pengurangan';
    const options = buildOptions(values.answer, cap, allowNegative, random);
    const answerText = formatNumber(values.answer);
    const format = descriptor.format === 'story' ? 'story' : 'direct';
    const text = format === 'story' ? storyText(operation, values.a, values.b, values.answer, Boolean(descriptor.negative), random) : directText(operation, values.a, values.b);
    const explanation = `${formatNumber(values.a)} ${symbol(operation)} ${formatNumber(values.b)} = ${answerText}.`;
    return {
      id: `${phase}-${operation}-${Math.abs(hashCode(key + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey: key,
      phase,
      tingkat: phase,
      operation,
      format,
      a: values.a,
      b: values.b,
      result: values.answer,
      negative: Boolean(descriptor.negative),
      tier: descriptor.tier || 1,
      slotId: descriptor.slotId,
      text,
      options,
      answer: options.indexOf(answerText),
      explanation,
      illustration: operation === 'perkalian' ? 'groups' : operation === 'pembagian' ? 'sharing' : operation === 'pengurangan' ? 'number-line' : 'counting-pebbles'
    };
  }

  function hashCode(value) {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
    return hash;
  }

  function scheduleFor(phase) {
    const schedule = [];
    const order = phase === 'A' ? ['penjumlahan', 'pengurangan'] : operations;
    const max = phase === 'A' ? 10 : 5;
    for (let index = 0; index < max; index += 1) order.forEach(operation => schedule.push(operation));
    return schedule;
  }

  function createIPAQuestion(phase, descriptor, random = Math.random) {
    const bank = ipaBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal IPA untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-ipa-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'ipa',
      topic: source.topic,
      bankId: source.id,
      format: source.format,
      slotId: descriptor.slotId,
      retryNumber,
      text: source.text,
      options,
      answer: options.indexOf(source.correct),
      explanation: source.explanation,
      illustration: source.illustration
    };
  }

  function createIPARoundQuestions(phase, options = {}) {
    const bank = ipaBanks[phase];
    if (!bank?.length) throw new Error('Fase IPA tidak dikenal.');
    const random = options.random || Math.random;
    const target = 20;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry.slice() : [];
    const fresh = bank.filter(item => !excluded.has(item.id));
    const pool = shuffled(fresh.length >= target ? fresh : bank, random);
    const usedBankIds = new Set();
    const answerPlan = balancedAnswerOrder(target, random);
    const questions = [];

    for (let index = 0; index < target; index += 1) {
      const carriedIndex = carried.findIndex(slot => slot.bankId && !usedBankIds.has(slot.bankId) && bank.some(item => item.id === slot.bankId));
      const carriedSlot = carriedIndex >= 0 ? carried.splice(carriedIndex, 1)[0] : null;
      const source = carriedSlot
        ? bank.find(item => item.id === carriedSlot.bankId)
        : pool.find(item => !usedBankIds.has(item.id)) || bank.find(item => !usedBankIds.has(item.id)) || bank[index % bank.length];
      usedBankIds.add(source.id);
      const descriptor = {
        ...carriedSlot,
        bankId: source.id,
        slotId: carriedSlot?.id || `${phase}-ipa-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createIPAQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createIPAQuestion(phase, {
        bankId: slot.bankId || slot.question?.bankId,
        slotId: slot.id,
        retryNumber
      }, random);
      return balanceAnswerPosition(variant, (retryNumber || 1) % 3);
    };
    return { questions, variantFactory, usedKeys: excluded };
  }

  function createIPSQuestion(phase, descriptor, random = Math.random) {
    const bank = ipsBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal IPS untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-ips-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'ips',
      topic: source.topic,
      bankId: source.id,
      format: source.format,
      slotId: descriptor.slotId,
      retryNumber,
      text: source.text,
      options,
      answer: options.indexOf(source.correct),
      explanation: source.explanation,
      illustration: source.illustration
    };
  }

  function createIPSRoundQuestions(phase, options = {}) {
    const bank = ipsBanks[phase];
    if (!bank?.length) throw new Error('Fase IPS tidak dikenal.');
    const random = options.random || Math.random;
    const target = 20;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry.slice() : [];
    const fresh = bank.filter(item => !excluded.has(item.id));
    const pool = shuffled(fresh.length >= target ? fresh : bank, random);
    const usedBankIds = new Set();
    const answerPlan = balancedAnswerOrder(target, random);
    const questions = [];

    for (let index = 0; index < target; index += 1) {
      const carriedIndex = carried.findIndex(slot => slot.bankId && !usedBankIds.has(slot.bankId) && bank.some(item => item.id === slot.bankId));
      const carriedSlot = carriedIndex >= 0 ? carried.splice(carriedIndex, 1)[0] : null;
      const source = carriedSlot
        ? bank.find(item => item.id === carriedSlot.bankId)
        : pool.find(item => !usedBankIds.has(item.id)) || bank.find(item => !usedBankIds.has(item.id)) || bank[index % bank.length];
      usedBankIds.add(source.id);
      const descriptor = {
        ...carriedSlot,
        bankId: source.id,
        slotId: carriedSlot?.id || `${phase}-ips-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createIPSQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createIPSQuestion(phase, {
        bankId: slot.bankId || slot.question?.bankId,
        slotId: slot.id,
        retryNumber
      }, random);
      return balanceAnswerPosition(variant, (retryNumber || 1) % 3);
    };
    return { questions, variantFactory, usedKeys: excluded };
  }

  function createEnglishQuestion(phase, descriptor, random = Math.random) {
    const bank = englishBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal Bahasa Inggris untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-english-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'bahasa-inggris',
      topic: source.topic,
      bankId: source.id,
      format: source.format,
      slotId: descriptor.slotId,
      retryNumber,
      text: source.text,
      options,
      answer: options.indexOf(source.correct),
      explanation: source.explanation,
      illustration: source.illustration
    };
  }

  function createEnglishRoundQuestions(phase, options = {}) {
    const bank = englishBanks[phase];
    if (!bank?.length) throw new Error('Fase Bahasa Inggris tidak dikenal.');
    const random = options.random || Math.random;
    const target = 20;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry.slice() : [];
    const fresh = bank.filter(item => !excluded.has(item.id));
    const pool = shuffled(fresh.length >= target ? fresh : bank, random);
    const usedBankIds = new Set();
    const answerPlan = balancedAnswerOrder(target, random);
    const questions = [];

    for (let index = 0; index < target; index += 1) {
      const carriedIndex = carried.findIndex(slot => slot.bankId && !usedBankIds.has(slot.bankId) && bank.some(item => item.id === slot.bankId));
      const carriedSlot = carriedIndex >= 0 ? carried.splice(carriedIndex, 1)[0] : null;
      const source = carriedSlot
        ? bank.find(item => item.id === carriedSlot.bankId)
        : pool.find(item => !usedBankIds.has(item.id)) || bank.find(item => !usedBankIds.has(item.id)) || bank[index % bank.length];
      usedBankIds.add(source.id);
      const descriptor = {
        ...carriedSlot,
        bankId: source.id,
        slotId: carriedSlot?.id || `${phase}-english-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createEnglishQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createEnglishQuestion(phase, {
        bankId: slot.bankId || slot.question?.bankId,
        slotId: slot.id,
        retryNumber
      }, random);
      return balanceAnswerPosition(variant, (retryNumber || 1) % 3);
    };
    return { questions, variantFactory, usedKeys: excluded };
  }

  function createIndonesianQuestion(phase, descriptor, random = Math.random) {
    const bank = indonesianBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal Bahasa Indonesia untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-indonesian-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'bahasa-indonesia',
      topic: source.topic,
      bankId: source.id,
      format: source.format,
      slotId: descriptor.slotId,
      retryNumber,
      text: source.text,
      options,
      answer: options.indexOf(source.correct),
      explanation: source.explanation,
      illustration: source.illustration
    };
  }

  function createIndonesianRoundQuestions(phase, options = {}) {
    const bank = indonesianBanks[phase];
    if (!bank?.length) throw new Error('Fase Bahasa Indonesia tidak dikenal.');
    const random = options.random || Math.random;
    const target = 20;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry.slice() : [];
    const fresh = bank.filter(item => !excluded.has(item.id));
    const pool = shuffled(fresh.length >= target ? fresh : bank, random);
    const usedBankIds = new Set();
    const answerPlan = balancedAnswerOrder(target, random);
    const questions = [];

    for (let index = 0; index < target; index += 1) {
      const carriedIndex = carried.findIndex(slot => slot.bankId && !usedBankIds.has(slot.bankId) && bank.some(item => item.id === slot.bankId));
      const carriedSlot = carriedIndex >= 0 ? carried.splice(carriedIndex, 1)[0] : null;
      const source = carriedSlot
        ? bank.find(item => item.id === carriedSlot.bankId)
        : pool.find(item => !usedBankIds.has(item.id)) || bank.find(item => !usedBankIds.has(item.id)) || bank[index % bank.length];
      usedBankIds.add(source.id);
      const descriptor = {
        ...carriedSlot,
        bankId: source.id,
        slotId: carriedSlot?.id || `${phase}-indonesian-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createIndonesianQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createIndonesianQuestion(phase, {
        bankId: slot.bankId || slot.question?.bankId,
        slotId: slot.id,
        retryNumber
      }, random);
      return balanceAnswerPosition(variant, (retryNumber || 1) % 3);
    };
    return { questions, variantFactory, usedKeys: excluded };
  }

  function createPaiQuestion(phase, descriptor, random = Math.random) {
    const bank = paiBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal PAI dan Budi Pekerti untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-pai-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'pai-budi-pekerti',
      topic: source.topic,
      bankId: source.id,
      format: source.format,
      slotId: descriptor.slotId,
      retryNumber,
      text: source.text,
      options,
      answer: options.indexOf(source.correct),
      explanation: source.explanation,
      illustration: source.illustration
    };
  }

  function createPaiRoundQuestions(phase, options = {}) {
    const bank = paiBanks[phase];
    if (!bank?.length) throw new Error('Fase PAI dan Budi Pekerti tidak dikenal.');
    const random = options.random || Math.random;
    const target = 20;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry.slice() : [];
    const fresh = bank.filter(item => !excluded.has(item.id));
    const pool = shuffled(fresh.length >= target ? fresh : bank, random);
    const usedBankIds = new Set();
    const answerPlan = balancedAnswerOrder(target, random);
    const questions = [];

    for (let index = 0; index < target; index += 1) {
      const carriedIndex = carried.findIndex(slot => slot.bankId && !usedBankIds.has(slot.bankId) && bank.some(item => item.id === slot.bankId));
      const carriedSlot = carriedIndex >= 0 ? carried.splice(carriedIndex, 1)[0] : null;
      const source = carriedSlot
        ? bank.find(item => item.id === carriedSlot.bankId)
        : pool.find(item => !usedBankIds.has(item.id)) || bank.find(item => !usedBankIds.has(item.id)) || bank[index % bank.length];
      usedBankIds.add(source.id);
      const descriptor = {
        ...carriedSlot,
        bankId: source.id,
        slotId: carriedSlot?.id || `${phase}-pai-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createPaiQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createPaiQuestion(phase, {
        bankId: slot.bankId || slot.question?.bankId,
        slotId: slot.id,
        retryNumber
      }, random);
      return balanceAnswerPosition(variant, (retryNumber || 1) % 3);
    };
    return { questions, variantFactory, usedKeys: excluded };
  }

  function createPancasilaQuestion(phase, descriptor, random = Math.random) {
    const bank = pancasilaBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal Pendidikan Pancasila untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-pancasila-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'pendidikan-pancasila',
      topic: source.topic,
      bankId: source.id,
      format: source.format,
      slotId: descriptor.slotId,
      retryNumber,
      text: source.text,
      options,
      answer: options.indexOf(source.correct),
      explanation: source.explanation,
      illustration: source.illustration
    };
  }

  function createPancasilaRoundQuestions(phase, options = {}) {
    const bank = pancasilaBanks[phase];
    if (!bank?.length) throw new Error('Fase Pendidikan Pancasila tidak dikenal.');
    const random = options.random || Math.random;
    const target = 20;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry.slice() : [];
    const fresh = bank.filter(item => !excluded.has(item.id));
    const pool = shuffled(fresh.length >= target ? fresh : bank, random);
    const usedBankIds = new Set();
    const answerPlan = balancedAnswerOrder(target, random);
    const questions = [];

    for (let index = 0; index < target; index += 1) {
      const carriedIndex = carried.findIndex(slot => slot.bankId && !usedBankIds.has(slot.bankId) && bank.some(item => item.id === slot.bankId));
      const carriedSlot = carriedIndex >= 0 ? carried.splice(carriedIndex, 1)[0] : null;
      const source = carriedSlot
        ? bank.find(item => item.id === carriedSlot.bankId)
        : pool.find(item => !usedBankIds.has(item.id)) || bank.find(item => !usedBankIds.has(item.id)) || bank[index % bank.length];
      usedBankIds.add(source.id);
      const descriptor = {
        ...carriedSlot,
        bankId: source.id,
        slotId: carriedSlot?.id || `${phase}-pancasila-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createPancasilaQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createPancasilaQuestion(phase, {
        bankId: slot.bankId || slot.question?.bankId,
        slotId: slot.id,
        retryNumber
      }, random);
      return balanceAnswerPosition(variant, (retryNumber || 1) % 3);
    };
    return { questions, variantFactory, usedKeys: excluded };
  }

  function createSeniBudayaQuestion(phase, descriptor, random = Math.random) {
    const bank = seniBudayaBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal Seni Budaya untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-seni-budaya-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'seni-budaya',
      topic: source.topic,
      bankId: source.id,
      format: source.format,
      slotId: descriptor.slotId,
      retryNumber,
      text: source.text,
      options,
      answer: options.indexOf(source.correct),
      explanation: source.explanation,
      illustration: source.illustration
    };
  }

  function createSeniBudayaRoundQuestions(phase, options = {}) {
    const bank = seniBudayaBanks[phase];
    if (!bank?.length) throw new Error('Fase Seni Budaya tidak dikenal.');
    const random = options.random || Math.random;
    const target = 20;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry.slice() : [];
    const fresh = bank.filter(item => !excluded.has(item.id));
    const pool = shuffled(fresh.length >= target ? fresh : bank, random);
    const usedBankIds = new Set();
    const answerPlan = balancedAnswerOrder(target, random);
    const questions = [];

    for (let index = 0; index < target; index += 1) {
      const carriedIndex = carried.findIndex(slot => slot.bankId && !usedBankIds.has(slot.bankId) && bank.some(item => item.id === slot.bankId));
      const carriedSlot = carriedIndex >= 0 ? carried.splice(carriedIndex, 1)[0] : null;
      const source = carriedSlot
        ? bank.find(item => item.id === carriedSlot.bankId)
        : pool.find(item => !usedBankIds.has(item.id)) || bank.find(item => !usedBankIds.has(item.id)) || bank[index % bank.length];
      usedBankIds.add(source.id);
      const descriptor = {
        ...carriedSlot,
        bankId: source.id,
        slotId: carriedSlot?.id || `${phase}-seni-budaya-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createSeniBudayaQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createSeniBudayaQuestion(phase, {
        bankId: slot.bankId || slot.question?.bankId,
        slotId: slot.id,
        retryNumber
      }, random);
      return balanceAnswerPosition(variant, (retryNumber || 1) % 3);
    };
    return { questions, variantFactory, usedKeys: excluded };
  }

  function createPjokQuestion(phase, descriptor, random = Math.random) {
    const bank = pjokBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal PJOK untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-pjok-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'pjok',
      topic: source.topic,
      bankId: source.id,
      format: source.format,
      slotId: descriptor.slotId,
      retryNumber,
      text: source.text,
      options,
      answer: options.indexOf(source.correct),
      explanation: source.explanation,
      illustration: source.illustration
    };
  }

  function createPjokRoundQuestions(phase, options = {}) {
    const bank = pjokBanks[phase];
    if (!bank?.length) throw new Error('Fase PJOK tidak dikenal.');
    const random = options.random || Math.random;
    const target = 20;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry.slice() : [];
    const fresh = bank.filter(item => !excluded.has(item.id));
    const pool = shuffled(fresh.length >= target ? fresh : bank, random);
    const usedBankIds = new Set();
    const answerPlan = balancedAnswerOrder(target, random);
    const questions = [];

    for (let index = 0; index < target; index += 1) {
      const carriedIndex = carried.findIndex(slot => slot.bankId && !usedBankIds.has(slot.bankId) && bank.some(item => item.id === slot.bankId));
      const carriedSlot = carriedIndex >= 0 ? carried.splice(carriedIndex, 1)[0] : null;
      const source = carriedSlot
        ? bank.find(item => item.id === carriedSlot.bankId)
        : pool.find(item => !usedBankIds.has(item.id)) || bank.find(item => !usedBankIds.has(item.id)) || bank[index % bank.length];
      usedBankIds.add(source.id);
      const descriptor = {
        ...carriedSlot,
        bankId: source.id,
        slotId: carriedSlot?.id || `${phase}-pjok-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createPjokQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createPjokQuestion(phase, {
        bankId: slot.bankId || slot.question?.bankId,
        slotId: slot.id,
        retryNumber
      }, random);
      return balanceAnswerPosition(variant, (retryNumber || 1) % 3);
    };
    return { questions, variantFactory, usedKeys: excluded };
  }

  function createRoundQuestions(phase, options = {}) {
    const subject = options.subject || 'matematika';
    if (!subjectInfo[subject]?.phaseInfo[phase]) throw new Error('Fase atau mapel tidak dikenal.');
    if (subject === 'ipa') return createIPARoundQuestions(phase, options);
    if (subject === 'ips') return createIPSRoundQuestions(phase, options);
    if (subject === 'bahasa-inggris') return createEnglishRoundQuestions(phase, options);
    if (subject === 'bahasa-indonesia') return createIndonesianRoundQuestions(phase, options);
    if (subject === 'pai-budi-pekerti') return createPaiRoundQuestions(phase, options);
    if (subject === 'pendidikan-pancasila') return createPancasilaRoundQuestions(phase, options);
    if (subject === 'pjok') return createPjokRoundQuestions(phase, options);
    if (subject === 'seni-budaya') return createSeniBudayaRoundQuestions(phase, options);
    const random = options.random || Math.random;
    const excluded = new Set(options.excludeKeys || []);
    const carried = Array.isArray(options.carry) ? options.carry : [];
    const counts = slotCounts[phase];
    const carryByOperation = {};
    carried.forEach(slot => {
      if (!counts[slot.operation]) return;
      (carryByOperation[slot.operation] ||= []).push(slot);
    });
    const schedule = scheduleFor(phase);
    const answerPlan = balancedAnswerOrder(schedule.length, random);
    let storyCount = 0;
    let negativeCount = 0;
    const questions = [];
    schedule.forEach((operation, index) => {
      const carriedSlot = carryByOperation[operation]?.shift();
      const tier = carriedSlot?.tier || (index < 7 ? 1 : index < 14 ? 2 : 3);
      let negative = Boolean(carriedSlot?.negative);
      if (phase === 'C' && operation === 'pengurangan' && !carriedSlot && negativeCount < 2) {
        const remainingNegativeSlots = schedule.slice(index).filter(item => item === operation).length;
        if (negativeCount < 2 && remainingNegativeSlots <= 2 - negativeCount) negative = true;
      }
      if (negative) negativeCount += 1;
      const format = carriedSlot?.format || (storyCount < 8 ? 'story' : 'direct');
      if (format === 'story') storyCount += 1;
      const descriptor = { ...carriedSlot, operation, tier, negative, format, slotId: carriedSlot?.id || `${phase}-slot-${index + 1}` };
      const question = balanceAnswerPosition(createQuestion(phase, descriptor, excluded, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    });
    const variantFactory = (slot, retryNumber, usedKeys) => balanceAnswerPosition(createQuestion(phase, { operation: slot.operation, format: slot.format, negative: slot.negative, tier: slot.tier, slotId: slot.id, retryNumber }, usedKeys, random), (retryNumber || 1) % 3);
    return { questions, variantFactory, usedKeys: excluded };
  }

  const api = { phaseInfo, ipaPhaseInfo, ipsPhaseInfo, englishPhaseInfo, indonesianPhaseInfo, paiPhaseInfo, pancasilaPhaseInfo, pjokPhaseInfo, seniBudayaPhaseInfo, subjects: subjectInfo, ipaBanks, ipsBanks, englishBanks, indonesianBanks, paiBanks, pancasilaBanks, pjokBanks, seniBudayaBanks, slotCounts, createRoundQuestions, canonicalKey, formatNumber };
  root.FROG_LEVELS = phaseInfo;
  root.FROG_SUBJECTS = subjectInfo;
  root.FROG_QUESTIONS = { A: [], B: [], C: [] };
  root.FROG_QUESTION_BANK = [];
  root.FrogQuestions = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
