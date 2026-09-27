# Menyeberang Ngarai — Matematika SD

Game kuis matematika untuk anak SD. Katak melompati papan kayu yang tersebar di ngarai; setiap lompatan dipicu oleh jawaban soal yang tepat. Seluruh permainan berjalan di browser tanpa login, tracking, backend, atau koneksi internet.

## Menjalankan

Jalankan server statis dari folder proyek, lalu buka `http://localhost:8085`:

```bash
python3 -m http.server 8085
```

Permainan juga dapat dibuka langsung dari `index.html`, tetapi server lokal lebih konsisten pada browser dengan kebijakan keamanan ketat.

## Cara bermain

1. Pilih tingkat **Kelas 1–2**, **Kelas 3–4**, atau **Kelas 5–6** dan masukkan nama pemain.
2. Baca soal pada papan kayu di bagian atas ngarai.
3. Pilih papan jawaban A, B, C, atau D. Kelas 1–2 memakai tiga pilihan agar sesuai dengan tahap belajarnya.
4. Katak melompat mengikuti jalur melengkung menuju papan yang dipilih. Jawaban salah atau waktu habis mengurangi satu dari 8 nyawa.
5. Raih minimal 60% jawaban benar untuk menyelesaikan petualangan. Layar hasil menyediakan pembahasan tiap soal.

Tombol A–D atau angka 1–4 dapat digunakan selain sentuhan dan klik. Menu pengaturan menjeda timer. Berpindah tab juga menjeda permainan. Tombol layar penuh cocok untuk layar sentuh kecil maupun IFP.

## Struktur berkas

- `engine.js` berisi `CONFIG`, pengacakan pilihan, pemilihan soal seimbang, skor, nyawa, waktu, bonus, dan status ronde.
- `questions.js` berisi bank soal dengan format `{ id, tingkat, operation, text, options, answer, explanation }`. Soal dikelompokkan dalam tiga tingkat kelas agar mudah difilter di layar awal.
- `illustrations.js` berisi ilustrasi SVG ringan untuk soal dan ikon tingkat kelas.
- `game.js` menangani rendering papan, timer, lompatan katak, suara, jeda, layar hasil, pembahasan, keyboard, dan layar penuh.
- `styles.css` berisi reskin visual ngarai, papan kayu, tebing, pohon, responsivitas, serta animasi.
- `assets/` berisi latar `ngarai.webp` serta SVG orisinal untuk katak idle/lompat dan platform kayu. `ASSETS.md` mencatat sumber dan brief pembuatannya.

Tidak ada dependensi KaTeX aktif karena soal ditulis sebagai teks matematika biasa, misalnya `1/2`.

## Mengubah aturan

Edit `CONFIG` di `engine.js` untuk mengubah jumlah nyawa, waktu per tingkat, ambang kelulusan, atau bonus. Jika pilihan soal diubah menjadi tiga atau empat pilihan, `engine.js` dan renderer sudah mendukung keduanya. `answer` selalu merupakan indeks mulai dari `0` setelah pilihan asli ditulis.

## Pemeriksaan cepat

```bash
node --check engine.js
node --check questions.js
node --check illustrations.js
node --check game.js
```

Tidak ada proses build. Unggah isi folder proyek ke hosting statis jika ingin dipakai dari jaringan lokal sekolah.
