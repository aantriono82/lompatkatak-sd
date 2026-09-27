# Menyeberang Ngarai — Game Belajar SD

Game belajar untuk anak SD. Katak melompati papan kayu yang tersebar di ngarai; setiap lompatan dipicu oleh jawaban soal yang tepat. Matematika dan IPAS tersedia untuk Fase A, B, dan C. Seluruh permainan berjalan di browser tanpa login, tracking, backend, atau koneksi internet.

## Menjalankan

Jalankan server statis dari folder proyek, lalu buka `http://localhost:8085`:

```bash
python3 -m http.server 8085
```

Permainan juga dapat dibuka langsung dari `index.html`, tetapi server lokal lebih konsisten pada browser dengan kebijakan keamanan ketat.

## Cara bermain

1. Pilih mapel Matematika atau IPAS, pilih **Fase A**, **Fase B**, atau **Fase C**, lalu masukkan nama pemain. Targetnya 20 slot soal yang dikuasai.
2. Baca soal pada papan kayu di bagian atas ngarai.
3. Pilih satu dari tiga platform jawaban A, B, atau C. Posisi platform berubah relatif terhadap waypoint katak dan membentuk jalur zig-zag.
4. Jawaban benar membuat katak menetap di platform baru. Jawaban salah atau waktu habis mengurangi satu dari 8 nyawa, mengurangi 5 poin, lalu mengembalikan katak ke waypoint benar terakhir. Slot yang belum dikuasai mendapat soal setara setelah 3–5 soal lain.
5. Jawaban benar memberi 10 poin. Kuasai 20 slot untuk mencapai papan OUT; layar hasil mengelompokkan seluruh percobaan per slot.

Tombol A–C atau angka 1–3 dapat digunakan selain sentuhan dan klik. Menu pengaturan menjeda timer. Berpindah tab juga menjeda permainan. Tombol layar penuh cocok untuk layar sentuh kecil maupun IFP.

## Struktur berkas

- `engine.js` berisi `CONFIG`, aturan fase, pengacakan tiga pilihan, antrean remedial, skor, nyawa, waktu, dan status ronde.
- `questions.js` membuat soal Matematika dan bank soal IPAS per fase dengan tiga pilihan jawaban, ilustrasi, pembahasan, dan latihan ulang.
- `illustrations.js` berisi ilustrasi SVG ringan untuk soal dan ikon tingkat kelas.
- `game.js` menangani rendering papan, timer, lompatan katak, suara, jeda, layar hasil, pembahasan, keyboard, dan layar penuh.
- `styles.css` berisi reskin visual ngarai, papan kayu, tebing, pohon, responsivitas, serta animasi.
- `assets/` berisi latar `ngarai.webp` serta SVG orisinal untuk katak idle/lompat dan platform kayu. `ASSETS.md` mencatat sumber dan brief pembuatannya.

Tidak ada dependensi KaTeX aktif karena soal ditulis sebagai teks matematika biasa, misalnya `1/2`.

## Mengubah aturan

Edit `CONFIG` di `engine.js` untuk mengubah jumlah nyawa, target slot, waktu per fase, jarak remedial, atau nilai skor. Mesin selalu menyajikan tiga pilihan dan mempertahankan jawaban benar. `answer` selalu merupakan indeks mulai dari `0` setelah pilihan diacak.

## Pemeriksaan cepat

```bash
node --check engine.js
node --check questions.js
node --check illustrations.js
node --check game.js
```

Tidak ada proses build. Unggah isi folder proyek ke hosting statis jika ingin dipakai dari jaringan lokal sekolah.
