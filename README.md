# Undangan Website Syukuran Sumpah Dokter - INTERAKTIF
## Dr. Abraham Daniel Boltal S.Ked

Website undangan online modern dan interaktif untuk acara syukuran sumpah dokter dengan fitur lengkap seperti undangan pernikahan digital.

## 🎯 Fitur Utama

- 🎬 **Opening Cover** - Halaman pembuka dengan tombol "Buka Undangan"
- 🎵 **Music Autoplay** - Musik otomatis play setelah membuka undangan
- ⏱️ **Countdown Timer** - Hitung mundur real-time ke hari acara
- 📖 **Timeline Journey** - Perjalanan menjadi dokter
- 🎠 **Photo Carousel** - Gallery foto dengan slider interaktif
- 💬 **RSVP Form** - Form ucapan dan doa dari tamu
- 🎨 **Smooth Animations** - Animasi halus dan profesional
- 📱 **Fully Responsive** - Sempurna di semua perangkat
- 🎯 **Floating Buttons** - Kontrol musik dan scroll to top

## 📁 Struktur File

```
undngan/
├── index.html          # Halaman utama (REDESIGNED)
├── style.css           # Styling modern (REDESIGNED)
├── script.js           # JavaScript interaktif (REDESIGNED)
├── README.md           # Dokumentasi ini
└── assets/
    ├── images/         # Folder untuk foto
    │   ├── hero-photo.jpg
    │   ├── gallery-1.jpg
    │   └── gallery-2.jpg
    └── music/          # Folder untuk musik
        └── background.mp3
```

## 🚀 Cara Menggunakan

### 1. Menambahkan Foto

Copy foto Anda ke folder `assets/images/`:
- `hero-photo.jpg` - Foto untuk hero section dan carousel
- `gallery-1.jpg` - Foto untuk carousel
- `gallery-2.jpg` - Foto untuk carousel

**Untuk menambah lebih banyak foto ke carousel:**
1. Copy foto ke folder `assets/images/` (misal: `gallery-3.jpg`)
2. Edit `index.html` di bagian carousel, tambahkan slide baru:

```html
<div class="carousel-slide">
    <img src="assets/images/gallery-3.jpg" alt="Deskripsi" class="carousel-img">
</div>
```

### 2. Menambahkan Background Music

1. Siapkan file musik MP3
2. Rename menjadi `background.mp3`
3. Copy ke folder `assets/music/`
4. Musik akan auto-play setelah user klik "Buka Undangan"

**Rekomendasi:**
- Format: MP3, bitrate 128kbps
- Durasi: 3-5 menit (akan loop otomatis)
- Jenis: Instrumental, rohani, atau klasik

### 3. Mengubah Detail Acara

#### Tanggal & Waktu
Edit `index.html` di bagian Event Details:
```html
<p>Sabtu, 15 Februari 2026</p>  <!-- Ubah tanggal -->
<p>18.00 WIT - Selesai</p>       <!-- Ubah waktu -->
```

#### Countdown Timer
Edit `script.js` baris 48:
```javascript
const countdownDate = new Date('February 15, 2026 18:00:00').getTime();
```

#### Lokasi
Edit `index.html` di bagian lokasi:
```html
<p>Akan diinformasikan kemudian</p>  <!-- Ubah lokasi -->
```

### 4. Personalisasi Nama Tamu (Opsional)

Website mendukung personalisasi nama tamu via URL parameter:
```
index.html?to=Bapak%20Ahmad
```

Nama tamu akan muncul di opening cover: "Kepada Yth. Bapak Ahmad"

### 5. Membuka Website

**Cara 1: Langsung buka file**
- Double-click `index.html`
- Klik tombol "Buka Undangan"
- Musik akan auto-play (jika sudah ditambahkan)

**Cara 2: Live Server (Recommended)**
- Install VS Code + ekstensi "Live Server"
- Klik kanan `index.html` → "Open with Live Server"
- Auto-reload saat ada perubahan

## 🎨 Kustomisasi

### Mengubah Warna

Edit `style.css` di bagian `:root`:
```css
:root {
    --primary-blue: #0066CC;      /* Warna biru utama */
    --secondary-blue: #4A90E2;    /* Warna biru sekunder */
    --gold: #D4AF37;              /* Warna gold/emas */
    --dark-navy: #1A1A2E;         /* Warna teks gelap */
}
```

### Mengubah Timeline

Edit `index.html` di bagian Timeline Section untuk menambah/mengubah milestone perjalanan.

## 💬 Fitur RSVP/Ucapan

- Tamu dapat mengirim ucapan dan doa
- Data tersimpan di **localStorage** browser
- Ucapan ditampilkan secara real-time
- Tidak perlu database atau backend

**Note:** Data ucapan tersimpan lokal di browser. Untuk deployment production, pertimbangkan menggunakan backend (Firebase, Supabase, dll).

## 🌐 Deploy ke Internet

### Netlify (Paling Mudah - Gratis)
1. Buka [netlify.com](https://netlify.com)
2. Drag & drop folder `undngan`
3. Website langsung online!
4. URL: `your-site.netlify.app`

### GitHub Pages (Gratis)
1. Upload ke GitHub repository
2. Settings → Pages → Deploy
3. URL: `username.github.io/undngan`

### Vercel (Gratis)
1. Buka [vercel.com](https://vercel.com)
2. Import project
3. Deploy otomatis!

## 📱 Fitur Interaktif

### Opening Cover
- Klik "Buka Undangan" untuk membuka
- Musik auto-play setelah dibuka
- Smooth fade-out animation

### Countdown Timer
- Update real-time setiap detik
- Format: Hari, Jam, Menit, Detik
- Auto-stop saat acara dimulai

### Photo Carousel
- Auto-play setiap 5 detik
- Navigation dengan tombol ← →
- Swipe support di mobile
- Klik foto untuk lightbox zoom
- Dots indicator

### RSVP Form
- Input nama dan ucapan
- Submit untuk menyimpan
- Tampil di daftar ucapan
- Data tersimpan di localStorage

### Floating Buttons
- **Music Button**: Toggle play/pause musik
- **Scroll Top**: Muncul saat scroll down, klik untuk ke atas

## 🎓 Teknologi

| Teknologi | Penggunaan |
|-----------|------------|
| **HTML5** | Semantic markup, struktur modern |
| **CSS3** | Flexbox, Grid, Animations, Gradients |
| **JavaScript** | Vanilla JS, DOM manipulation, localStorage |
| **Google Fonts** | Playfair Display, Inter, Cormorant Garamond |

## 🔧 Troubleshooting

### Musik tidak auto-play
- Browser modern memblokir autoplay tanpa user interaction
- Solusi: User harus klik "Buka Undangan" terlebih dahulu
- Musik akan play otomatis setelah itu

### Foto tidak muncul
- Pastikan foto ada di folder `assets/images/`
- Nama file harus sesuai (case-sensitive)
- Format: JPG, JPEG, PNG

### Countdown tidak akurat
- Pastikan tanggal di `script.js` sudah benar
- Format: `'Month Day, Year HH:MM:SS'`
- Contoh: `'February 15, 2026 18:00:00'`

## 💡 Tips

- **Optimasi Foto**: Compress foto (TinyPNG, Squoosh) untuk loading cepat
- **Ukuran Foto**: 1920x1080px untuk hero, 1200x800px untuk gallery
- **Format Musik**: MP3 128kbps untuk ukuran optimal
- **Testing**: Test di Chrome, Firefox, Safari, dan mobile
- **Personalisasi**: Gunakan URL parameter untuk nama tamu

## 📞 Fitur Lanjutan (Opsional)

### Google Maps Integration
Tambahkan iframe Google Maps di section lokasi:
```html
<iframe src="https://maps.google.com/..." width="100%" height="400"></iframe>
```

### Share Button
Gunakan fungsi `shareInvitation()` yang sudah ada di `script.js`

### Backend Integration
Untuk menyimpan ucapan ke database, gunakan:
- Firebase Realtime Database
- Supabase
- Google Sheets API

---

**Selamat atas pencapaian luar biasa ini, Dr. Abraham Daniel Boltal S.Ked!** 🎉👨‍⚕️

*Website undangan interaktif siap digunakan!*
