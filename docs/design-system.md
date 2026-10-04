# Design System

Dokumen ini menjadi acuan visual portofolio Husein Muawiyah. Identitasnya menggabungkan Swiss editorial layout, grid modular, tipografi oversize, dan palet electric blue–orange di atas neutral paper untuk memberi kesan terstruktur, tajam, dan eksperimental.

## Prinsip desain

1. **Grid sebagai struktur.** Setiap section mengikuti kolom dan garis alignment yang konsisten.
2. **Hierarki yang berani.** Tipografi oversize dan perbedaan skala membentuk urutan baca utama.
3. **Asimetri yang terukur.** Komposisi boleh tidak simetris selama tetap menempel pada grid modular.
4. **Aksesibel.** Teks harus terbaca di atas material transparan, navigasi dapat digunakan dengan keyboard, dan motion menghormati preferensi pengguna.
5. **Responsif sejak awal.** Desain dimulai dari mobile lalu ditingkatkan untuk layar lebih besar.

## Identitas visual

- Primary electric blue: `#064bdc`, dipakai untuk CTA, headline, blok identitas, dan interactive emphasis.
- Optional orange: `#f5a300`, disimpan sebagai primitive `--orange-500` untuk penggunaan manual dan belum dipetakan ke komponen.
- Page background: paper gray `#efefeb`.
- Component background: `#f7f6f0` melalui token `--card`.
- Foreground: near-black `#121212`.
- Surface: warna solid, garis hitam, radius minimal, dan tanpa shadow dekoratif.

Gunakan biru untuk identitas dan aksi utama. Oranye tersedia sebagai warna opsional, tetapi tidak diterapkan otomatis melalui token komponen. Informasi tidak boleh dibedakan melalui warna saja.

## Tipografi

- Body dan UI: Geist Sans melalui `next/font`.
- Monospace: Geist Mono, hanya untuk konten teknis.
- Display: Archivo Black untuk hero, judul section, dan heading ekspresif.
- Handwriting accent: Allura Regular melalui `next/font`, khusus untuk headline signature pada Hero. Allura berlisensi SIL Open Font License.
- Body minimum: `14px` pada mobile; `16px` lebih disukai untuk paragraf panjang.
- Gunakan sentence case untuk UI. Uppercase hanya untuk display heading pendek.

## Spacing dan layout

- Basis spacing mengikuti skala Tailwind: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`.
- Jarak antarseksi utama: `96px` pada mobile dan `128px` pada desktop.
- Lebar konten umum: 70–80% pada desktop dan 100% pada mobile.
- Anchor section memakai `scroll-mt-24` agar tidak tertutup navbar.
- Jangan memakai elemen kosong sebagai spacer; gunakan `gap`, `padding`, atau `margin`.

## Radius, border, dan shadow

- Control kecil: `rounded-sm`.
- Card dan blok editorial: `rounded-sm` atau tanpa radius.
- Navbar: tanpa radius agar menyatu dengan grid.
- Border: 1px hitam untuk menyatakan struktur dan pembagian kolom.
- Hindari shadow dekoratif; gunakan garis, ruang kosong, dan blok warna untuk depth.
- Border digunakan untuk memperjelas struktur dan batas antarsurface.
- Jangan memakai `backdrop-filter`, surface translucent, atau glassmorphism tanpa keputusan desain baru yang eksplisit.

## Komponen

### Button

- `default`: aksi utama dengan warna primary.
- `secondary`: aksi pendukung.
- `ghost` atau `link`: navigasi dan aksi berkepadatan rendah.
- `social`: tautan ikon sosial.
- Jika tujuan akhirnya tautan, gunakan `Button asChild` dengan `Link`; jangan menumpuk elemen `<button>` dan `<a>`.

Setiap icon-only button wajib memiliki `aria-label`. Semua state harus terlihat untuk hover, focus-visible, active, dan disabled.

### Card

Card memakai background solid, radius minimal, border hitam, dan tanpa shadow. Dalam kumpulan card, gunakan gap 1px dengan background hitam agar garis tetap konsisten.

### Navigation

Navbar berupa bar paper-gray berborder dengan lebar mengikuti isi. Lapisan gradient full-screen di bawah navbar membuat konten memudar saat mencapai ujung atas layar. Pada mobile, tampilkan hanya aksi terpenting.

### Media

Gunakan `next/image` untuk foto, logo, dan screenshot informatif. Selalu isi `alt`; gunakan `alt=""` hanya jika gambar murni dekoratif.

## Motion

- Motion harus singkat, halus, dan mendukung perubahan hierarki.
- Durasi umum: 180–300ms untuk interaction; 500–900ms untuk entrance.
- Gunakan easing yang lembut; hindari bounce berlebihan.
- Hindari blur besar pada motion karena mahal untuk GPU.
- Semua motion harus memiliki perilaku aman ketika `prefers-reduced-motion: reduce` aktif.
- Marquee harus dapat berhenti atau menjadi daftar statis untuk pengguna reduced-motion.

## Accessibility checklist

- Gunakan landmark `nav`, `main`, `section`, dan `footer`.
- Satu `h1` yang jelas per halaman; heading berikutnya mengikuti urutan.
- Kontras teks minimum WCAG AA.
- Fokus keyboard terlihat jelas.
- Target sentuh idealnya minimal 44×44px.
- Elemen interaktif tidak boleh bersarang.
- Jangan menyampaikan informasi hanya melalui warna atau animasi.

## Do / Don't

**Do:** gunakan grid modular, alignment bersama, whitespace, blok cobalt, dan metadata kecil untuk mendukung tipografi utama.

**Don't:** menambahkan glassmorphism, shadow dekoratif, radius besar, komposisi yang lepas dari grid, atau motion tanpa reduced-motion fallback.
