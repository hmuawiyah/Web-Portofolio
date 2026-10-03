# Design System

Dokumen ini menjadi acuan visual portofolio Husein Muawiyah. Tujuannya adalah mempertahankan karakter yang bersih, ramah, dan memakai aksen oranye dengan surface solid, kedalaman lembut, serta motion yang tenang.

## Prinsip desain

1. **Konten tetap utama.** Surface dan dekorasi harus membantu hierarki, bukan mengambil perhatian dari isi.
2. **Terasa ringan.** Gunakan ruang kosong, border tipis, dan shadow berlapis dengan opacity rendah.
3. **Konsisten.** Gunakan token dan komponen yang tersedia sebelum menambah nilai baru.
4. **Aksesibel.** Teks harus terbaca di atas material transparan, navigasi dapat digunakan dengan keyboard, dan motion menghormati preferensi pengguna.
5. **Responsif sejak awal.** Desain dimulai dari mobile lalu ditingkatkan untuk layar lebih besar.

## Identitas visual

- Primary: `#ff7024`, dipakai untuk CTA, judul penting, dan highlight.
- Page background: `#f9fafb`.
- Component background: putih melalui token `--card` dan `--background`.
- Foreground: `#2d2d2d`.
- Ambient blue: `#27bef5`, hanya sebagai gradient latar ber-opacity rendah.
- Surface: warna solid dengan border neutral tipis dan shadow lembut.

Hindari memakai primary pada area yang terlalu luas. Oranye paling efektif sebagai aksen, bukan sebagai warna dasar seluruh halaman.

## Tipografi

- Body dan UI: Geist Sans melalui `next/font`.
- Monospace: Geist Mono, hanya untuk konten teknis.
- Display: Oswald untuk nama, judul project, dan heading ekspresif.
- Body minimum: `14px` pada mobile; `16px` lebih disukai untuk paragraf panjang.
- Gunakan sentence case untuk UI. Uppercase hanya untuk display heading pendek.

## Spacing dan layout

- Basis spacing mengikuti skala Tailwind: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`.
- Jarak antarseksi utama: `96px` pada mobile dan `128px` pada desktop.
- Lebar konten umum: 70–80% pada desktop dan 100% pada mobile.
- Anchor section memakai `scroll-mt-24` agar tidak tertutup navbar.
- Jangan memakai elemen kosong sebagai spacer; gunakan `gap`, `padding`, atau `margin`.

## Radius, border, dan shadow

- Control kecil: `rounded-md` sampai `rounded-lg`.
- Card: `rounded-2xl`.
- Navbar/floating control: `rounded-full`.
- Border: 1px, tipis dan berkontras rendah.
- Gunakan shadow ringan seperti `shadow-sm` untuk card dan `shadow-md` untuk elemen floating seperti navbar.
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

Card memakai background solid, `rounded-xl`, border neutral, dan `shadow-sm`. Isi card harus tetap memiliki hierarki yang jelas tanpa bergantung pada dekorasi berlebihan.

### Navigation

Navbar bersifat floating dengan background putih solid, border lembut, dan `shadow-md`. Pada mobile, tampilkan hanya aksi terpenting. Setiap target navigasi harus berupa section semantik dengan ID stabil.

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

**Do:** gunakan surface solid, pertahankan whitespace, bedakan elevasi secara halus, dan gunakan primary sebagai aksen.

**Don't:** menambahkan glassmorphism, memakai shadow hitam berat, membuat radius berbeda-beda tanpa alasan, atau menambahkan motion tanpa reduced-motion fallback.
