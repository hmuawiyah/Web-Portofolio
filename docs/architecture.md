# Architecture

## Ringkasan

Proyek ini adalah portofolio satu halaman berbasis Next.js App Router. Halaman utama diprerender secara statis, sementara interaktivitas lokal—navbar, daftar sertifikat, dan animasi—ditangani oleh client component yang relevan.

Stack utama:

- Next.js 16 dan React 19
- TypeScript dengan mode `strict`
- Tailwind CSS 4
- shadcn/ui, Radix UI, dan class-variance-authority
- GSAP untuk entrance animation
- React Icons dan Lucide

## Struktur saat ini

```text
src/
├── app/
│   ├── layout.tsx       # metadata, font, navbar, dan shell aplikasi
│   ├── page.tsx         # komposisi section halaman utama
│   └── globals.css      # token, utility, global style, dan motion fallback
├── components/
│   ├── ui/              # primitive UI reusable
│   ├── shadcn-studio/   # contoh/reference component
│   └── *.tsx            # section dan komponen halaman
└── lib/
    └── utils.ts         # helper penggabungan class
```

Aset statis berada di `public/`. Konfigurasi proyek berada di root.

## Alur rendering

1. `layout.tsx` menyiapkan metadata, font, navbar, gradient latar, dan container global.
2. `page.tsx` tetap menjadi server component dan menyusun section semantik.
3. Section statis dirender di server.
4. Hanya komponen yang memerlukan state, DOM, atau GSAP yang menjadi client component.
5. Build menghasilkan route `/` sebagai static content.

## Batas tanggung jawab

- `app/`: routing, metadata, layout, dan komposisi halaman.
- `components/ui/`: primitive generik tanpa pengetahuan tentang data portofolio.
- `components/`: section dan komponen presentasional khusus portofolio.
- `lib/`: helper yang tidak bergantung pada UI.
- `public/`: gambar dan logo yang dapat disajikan langsung.

## Keputusan arsitektur

### Server component sebagai default

Jangan menambahkan `"use client"` pada page, layout, atau primitive statis. Gunakan hanya jika komponen membutuhkan state, effect, event berbasis browser, atau library client-side.

### Interaktivitas tetap lokal

Portofolio ini belum membutuhkan global state manager. State buka/tutup sertifikat tetap berada di `Certificate`. Jangan menambah Redux/Zustand kecuali muncul state lintas fitur yang nyata.

### Design token terpusat

Warna, radius, material kaca, dan global motion fallback berada di `globals.css`. Variant komponen dikelola dengan CVA pada primitive UI.

### Progressive enhancement

Konten inti harus tetap terbaca tanpa animasi. Surface menggunakan background solid, sedangkan reduced-motion menghilangkan animasi yang tidak diperlukan.

## Temuan audit dan status

- Lint berhasil tanpa error.
- Production build berhasil dan route utama diprerender statis.
- `page.tsx` telah diubah menjadi server component.
- Spacer kosong telah diganti dengan section semantik dan spacing CSS.
- Metadata telah diperjelas.
- Surface solid dan reduced-motion fallback telah diterapkan.
- Pola link/button utama telah diperbaiki memakai `asChild`.
- Tahun footer dibuat dinamis agar tidak perlu diperbarui manual.

## Roadmap refactor

### Prioritas 1

1. Satukan `FadeContent.jsx` dan `Fade.tsx` menjadi satu implementasi TypeScript.
2. Pindahkan data project, experience, certificate, dan skills ke `src/data/`.
3. Gunakan `next/image` untuk gambar informatif dan berikan alternative text.
4. Lengkapi heading semantik pada setiap section.
5. Audit ulang semua link eksternal dan icon-only control.

### Prioritas 2

1. Pindahkan section ke `components/sections/`, layout component ke `components/layout/`, dan motion component ke `components/motion/`.
2. Hapus import serta contoh komponen yang tidak digunakan setelah dipastikan bukan referensi aktif.
3. Gunakan `next/font` untuk seluruh font, termasuk display font.
4. Tambahkan dark mode hanya setelah token light mode stabil.

### Prioritas 3

1. Tambahkan smoke test untuk render halaman dan navigasi anchor.
2. Tambahkan pemeriksaan accessibility otomatis.
3. Pantau ukuran JavaScript GSAP dan Core Web Vitals.

## Struktur target

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── motion/
│   ├── sections/
│   └── ui/
├── data/
├── lib/
└── types/
```

Struktur target bukan alasan untuk memecah file secara prematur. Lakukan perpindahan saat sebuah kelompok sudah memiliki lebih dari satu file atau tanggung jawabnya mulai sulit ditemukan.

## Definition of done

Sebuah perubahan dianggap selesai jika:

- `bun run lint` berhasil.
- `bun run build` berhasil untuk perubahan yang memengaruhi rendering/configuration.
- Tampilan diperiksa pada mobile dan desktop.
- Navigasi keyboard dan focus state tetap bekerja.
- Motion aman untuk reduced-motion.
- Data faktual, tautan, dan tanggal telah diperiksa.
- Dokumentasi diperbarui jika keputusan arsitektur atau design token berubah.
