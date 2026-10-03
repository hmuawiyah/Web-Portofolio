# AI Agent Guide

Panduan ini menjelaskan cara meminta AI coding agent membantu mengembangkan portofolio ini dengan aman dan konsisten. Dokumen ini ditujukan sebagai referensi pribadi; tidak semua agent otomatis membaca `docs/agent.md`, jadi berikan tautan atau minta agent membacanya pada awal tugas.

## Konteks proyek

Proyek adalah portofolio satu halaman milik Husein Muawiyah. Tujuan utamanya adalah memperkenalkan profil, pengalaman, skill, project, sertifikat, layanan, dan cara menghubungi pemilik situs.

Prioritas produk:

1. Informasi faktual dan mudah dipindai.
2. Tampilan profesional dengan surface solid dan identitas oranye yang konsisten.
3. Responsive, accessible, dan cepat.
4. Kode mudah dipahami oleh pemilik proyek di masa depan.

## Yang biasanya dilakukan AI agent

AI agent dapat:

- Mempelajari struktur dan pola kode sebelum mengubahnya.
- Membuat atau memperbarui section portofolio.
- Memperbaiki responsive layout, accessibility, SEO, dan performa.
- Membuat primitive UI reusable jika memang digunakan lebih dari sekali.
- Memindahkan data statis keluar dari komponen ketika file mulai besar.
- Menjalankan lint/build dan menjelaskan hasilnya.
- Memperbarui dokumentasi setelah keputusan penting berubah.

AI agent tidak boleh mengarang pengalaman, sertifikat, tautan, statistik, atau identitas. Jika informasi faktual belum tersedia, agent harus memakai placeholder yang jelas atau bertanya.

## Instruksi sebelum mengedit

1. Baca `README.md`, `docs/design-system.md`, dan `docs/architecture.md`.
2. Periksa `git status` dan jangan menimpa perubahan pengguna.
3. Cari komponen atau token yang sudah ada sebelum membuat yang baru.
4. Jelaskan perubahan besar sebelum mengubah arsitektur atau menambah dependency.
5. Pertahankan scope tugas; jangan melakukan redesign total untuk permintaan kecil.

## Aturan implementasi

- Gunakan TypeScript untuk file baru.
- Server component adalah default; gunakan `"use client"` hanya jika diperlukan.
- Gunakan alias `@/` untuk import lintas folder.
- Gunakan primitive dari `components/ui` sebelum menulis control baru.
- Untuk tautan yang bergaya button, gunakan `Button asChild` dengan `Link`.
- Gunakan elemen HTML semantik dan urutan heading yang benar.
- Gunakan `next/image` untuk media informatif.
- Data portofolio harus mempunyai ID stabil; jangan memakai index sebagai key jika ID tersedia.
- Jangan menambahkan dependency untuk masalah yang dapat diselesaikan dengan API platform atau utilitas yang sudah ada.
- Jangan menghapus aset atau komponen tanpa memastikan tidak digunakan.

## Aturan desain

- Ikuti `docs/design-system.md`.
- Pertahankan primary orange dan karakter visual bersih.
- Gunakan surface solid; jangan menambahkan glassmorphism atau backdrop blur tanpa persetujuan pemilik proyek.
- Gunakan token; hindari hardcoded color/radius baru tanpa alasan.
- Semua interaction memiliki hover dan focus-visible state.
- Semua icon-only control memiliki accessible name.
- Hormati `prefers-reduced-motion`.
- Periksa mobile terlebih dahulu, kemudian tablet dan desktop.

## Keamanan dan privasi

- Jangan membaca atau menampilkan isi `.env`.
- Jangan memasukkan token, credential, atau data pribadi baru ke repository.
- Jangan menjalankan perintah destruktif atau menghapus file tanpa persetujuan dan pemeriksaan target.
- Tautan eksternal dan alamat kontak harus berasal dari data yang sudah disetujui pemilik proyek.

## Verifikasi wajib

Setelah perubahan kode:

```bash
npm run lint
npm run build
```

Untuk perubahan visual, periksa juga:

- Lebar mobile dan desktop.
- Overflow horizontal.
- Navigasi anchor dan focus keyboard.
- Kontras teks pada seluruh surface.
- Tampilan ketika reduced-motion aktif.
- Tidak ada error atau warning penting di browser console.

## Format laporan agent

Laporan akhir sebaiknya ringkas dan mencakup:

1. Hasil utama yang berubah.
2. File penting yang disentuh.
3. Hasil lint/build/test.
4. Hal yang belum dapat diverifikasi secara otomatis.
5. Saran langkah berikutnya hanya jika relevan.

## Contoh permintaan yang baik

> Baca docs terlebih dahulu. Tambahkan satu project baru dari data yang saya berikan, pertahankan surface solid dan identitas oranye, gunakan komponen yang ada, lalu jalankan lint dan build. Jangan mengubah section lain.

> Audit aksesibilitas navbar dan contact section. Perbaiki masalah yang ditemukan tanpa mengubah identitas visual, lalu jelaskan hasil verifikasinya.
