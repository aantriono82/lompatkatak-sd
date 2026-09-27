/* Generator soal Matematika dan IPAS. Setiap ronde memiliki 20 slot dan tiga pilihan jawaban. */
(function (root) {
  'use strict';

  const operations = ['penjumlahan', 'pengurangan', 'perkalian', 'pembagian'];
  const phaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Tambah dan kurang sampai 20' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Operasi bilangan sampai 1.000' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Operasi bilangan sampai 1.000' }
  };
  const ipasPhaseInfo = {
    A: { label: 'Fase A · Kelas 1–2', shortLabel: 'Fase A', seconds: 45, description: 'Makhluk hidup dan lingkungan sekitar' },
    B: { label: 'Fase B · Kelas 3–4', shortLabel: 'Fase B', seconds: 55, description: 'Tumbuhan, energi, dan perubahan alam' },
    C: { label: 'Fase C · Kelas 5–6', shortLabel: 'Fase C', seconds: 70, description: 'Tubuh, ekosistem, dan tata surya' }
  };
  const subjectInfo = {
    matematika: { label: 'Matematika', phaseInfo },
    ipas: { label: 'IPAS', phaseInfo: ipasPhaseInfo }
  };
  const slotCounts = {
    A: { penjumlahan: 10, pengurangan: 10 },
    B: { penjumlahan: 5, pengurangan: 5, perkalian: 5, pembagian: 5 },
    C: { penjumlahan: 5, pengurangan: 5, perkalian: 5, pembagian: 5 }
  };

  function ipasEntry(id, topic, format, text, correct, distractors, explanation, illustration) {
    return { id, topic, format, text, correct, options: [correct, ...distractors], explanation, illustration };
  }

  const ipasBanks = {
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

  function createIPASQuestion(phase, descriptor, random = Math.random) {
    const bank = ipasBanks[phase] || [];
    const source = descriptor.bankId
      ? bank.find(item => item.id === descriptor.bankId)
      : shuffled(bank, random)[0];
    if (!source) throw new Error('Bank soal IPAS untuk fase ' + phase + ' kosong.');
    const retryNumber = descriptor.retryNumber || 0;
    const uniqueKey = retryNumber ? `${source.id}:retry:${retryNumber}` : source.id;
    const options = shuffled(source.options, random);
    return {
      id: `${phase}-ipas-${Math.abs(hashCode(uniqueKey + ':' + (descriptor.slotId || ''))).toString(36)}`,
      uniqueKey,
      phase,
      tingkat: phase,
      subject: 'ipas',
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

  function createIPASRoundQuestions(phase, options = {}) {
    const bank = ipasBanks[phase];
    if (!bank?.length) throw new Error('Fase IPAS tidak dikenal.');
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
        slotId: carriedSlot?.id || `${phase}-ipas-slot-${index + 1}`
      };
      const question = balanceAnswerPosition(createIPASQuestion(phase, descriptor, random), answerPlan[index]);
      excluded.add(question.uniqueKey);
      questions.push(question);
    }

    const variantFactory = (slot, retryNumber) => {
      const variant = createIPASQuestion(phase, {
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
    if (subject === 'ipas') return createIPASRoundQuestions(phase, options);
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

  const api = { phaseInfo, ipasPhaseInfo, subjects: subjectInfo, ipasBanks, slotCounts, createRoundQuestions, canonicalKey, formatNumber };
  root.FROG_LEVELS = phaseInfo;
  root.FROG_SUBJECTS = subjectInfo;
  root.FROG_QUESTIONS = { A: [], B: [], C: [] };
  root.FROG_QUESTION_BANK = [];
  root.FrogQuestions = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
