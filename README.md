# Kalories — Website Penghitung Kalori Makanan

**Kalories** adalah website penghitung kalori makanan berbasis web yang dirancang untuk membantu pengguna memperkirakan jumlah kalori dari makanan yang dikonsumsi berdasarkan porsi. Website ini dikembangkan sebagai project untuk mengikuti lomba **IOFEST Web Development**.

Kalories dibuat dengan tampilan yang sederhana, modern, dan mudah digunakan oleh berbagai kalangan, terutama pengguna awam yang ingin mulai memperhatikan pola makan dan asupan kalori harian.

## Live Demo

Website dapat diakses melalui:

```bash
https://iofest-web-dev.vercel.app/
```

## Latar Belakang

Masih banyak masyarakat yang belum mengetahui jumlah kalori dari makanan yang mereka konsumsi sehari-hari. Padahal, informasi mengenai kalori cukup penting untuk membantu seseorang menjaga pola makan, mengatur berat badan, dan membangun gaya hidup yang lebih sehat.

Beberapa aplikasi penghitung kalori yang sudah ada terkadang memiliki tampilan yang cukup kompleks dan membutuhkan banyak data dari pengguna. Hal tersebut dapat menyulitkan pengguna pemula yang hanya ingin mengetahui estimasi kalori makanan secara cepat dan sederhana.

Berdasarkan permasalahan tersebut, **Kalories** hadir sebagai website yang membantu pengguna menghitung estimasi kalori makanan dengan cara yang lebih praktis, ringan, dan mudah dipahami.

## Tujuan Website

Tujuan utama dari pembuatan website Kalories adalah:

- Membantu pengguna mengetahui estimasi kalori makanan berdasarkan porsi.
- Menyediakan website penghitung kalori yang sederhana dan mudah digunakan.
- Meningkatkan kesadaran pengguna terhadap pentingnya menjaga asupan kalori harian.
- Memberikan informasi yang mudah dipahami mengenai makanan dan pola hidup sehat.
- Mendukung pemanfaatan teknologi digital dalam bidang kesehatan dan gaya hidup.

## Subtema

Website Kalories masuk ke dalam subtema:

**Human Capital & Future Skills**

Subtema ini dipilih karena Kalories berfokus pada peningkatan kualitas hidup manusia melalui edukasi kesehatan digital. Website ini membantu pengguna memahami asupan makanan, meningkatkan literasi kesehatan, dan memanfaatkan teknologi untuk membangun kebiasaan hidup yang lebih sehat.

## Fitur Utama

Beberapa fitur utama yang tersedia pada website Kalories antara lain:

### 1. Beranda

Halaman beranda menampilkan pengenalan singkat mengenai website Kalories. Pada halaman ini, pengguna dapat melihat informasi utama mengenai fungsi website, contoh perhitungan kalori, serta tombol navigasi untuk mencoba fitur kalkulator dan melihat daftar makanan.

### 2. Kalkulator Kalori

Fitur kalkulator kalori merupakan fitur utama dari website Kalories. Pengguna dapat memilih makanan, memasukkan jumlah porsi atau berat makanan, lalu sistem akan menampilkan estimasi total kalori secara otomatis.

### 3. Daftar Makanan

Halaman daftar makanan berisi kumpulan makanan yang tersedia pada website beserta informasi estimasi kalorinya. Data ini digunakan sebagai dasar dalam proses perhitungan kalori.

### 4. Tips Sehat

Halaman tips sehat berisi informasi sederhana mengenai pola makan sehat, pentingnya menjaga asupan kalori, dan kebiasaan hidup sehat yang dapat diterapkan dalam kehidupan sehari-hari.

### 5. Tentang

Halaman tentang berisi penjelasan mengenai tujuan, konsep, dan alasan dibuatnya website Kalories.

## Keunikan Website

Kalories memiliki beberapa keunikan yang membedakannya dari website penghitung kalori biasa, yaitu:

- Tampilan sederhana dan mudah dipahami oleh pengguna awam.
- Fokus pada kemudahan penggunaan tanpa proses yang rumit.
- Menggabungkan fungsi kalkulator kalori dengan edukasi pola hidup sehat.
- Dapat diakses melalui browser tanpa perlu menginstal aplikasi tambahan.
- Cocok digunakan oleh pelajar, mahasiswa, dan masyarakat umum yang ingin mulai menjaga pola makan.
- Dirancang dengan konsep visual yang bersih, modern, responsif, dan nyaman digunakan.

## Manfaat Website

Kalories diharapkan dapat memberikan manfaat sebagai berikut:

- Membantu pengguna mengetahui estimasi kalori makanan secara cepat.
- Membantu pengguna lebih sadar terhadap pola makan sehari-hari.
- Memberikan edukasi sederhana mengenai pentingnya menjaga asupan kalori.
- Menjadi contoh pemanfaatan teknologi digital dalam mendukung pola hidup sehat.
- Memudahkan pengguna awam dalam mengakses informasi kalori makanan.
- Mendukung masyarakat untuk mulai membangun kebiasaan makan yang lebih seimbang.

## Teknologi yang Digunakan

Website ini dikembangkan menggunakan beberapa teknologi berikut:

- **React.js** sebagai library utama untuk membangun tampilan website.
- **Vite** sebagai build tool agar proses development lebih cepat dan ringan.
- **Tailwind CSS** untuk membuat tampilan website yang modern dan responsif.
- **React Router DOM** untuk mengatur navigasi antarhalaman.
- **Lucide React** untuk penggunaan ikon pada tampilan website.
- **Node.js** dan **Express.js** untuk kebutuhan backend.
- **MongoDB** dan **Mongoose** untuk pengelolaan data.

## Struktur Folder

Struktur utama project Kalories adalah sebagai berikut:

```bash
Iofest-WebDev/
├── public/
├── server/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

Keterangan singkat:

- `src/assets` berisi gambar, logo, dan aset visual website.
- `src/components` berisi komponen yang digunakan berulang, seperti Navbar, Footer, atau Card.
- `src/pages` berisi halaman utama website.
- `src/data` berisi data yang digunakan pada website.
- `server` berisi file backend apabila digunakan.
- `App.jsx` berisi struktur utama aplikasi.
- `main.jsx` berfungsi sebagai entry point React.

## Cara Menjalankan Project

Ikuti langkah berikut untuk menjalankan project secara lokal.

### 1. Clone Repository

```bash
git clone https://github.com/NzxCode/Iofest-WebDev.git
```

### 2. Masuk ke Folder Project

```bash
cd Iofest-WebDev
```

### 3. Install Dependency

```bash
npm install
```

### 4. Jalankan Project

```bash
npm run dev
```

Setelah project berjalan, buka browser dan akses:

```bash
http://localhost:5173/
```

## Script yang Tersedia

Beberapa script yang dapat digunakan dalam project ini:

```bash
npm run dev
```

Menjalankan project dalam mode development.

```bash
npm run build
```

Membuat versi production dari website.

```bash
npm run preview
```

Melihat hasil build production secara lokal.

```bash
npm run lint
```

Menjalankan pengecekan kode menggunakan ESLint.

## Tampilan Website

Website Kalories memiliki beberapa halaman utama, yaitu:

- Halaman Beranda
- Halaman Kalkulator Kalori
- Halaman Daftar Makanan
- Halaman Tips Sehat
- Halaman Tentang

Desain website dibuat dengan warna yang memberikan kesan sehat, bersih, modern, dan nyaman dilihat. Tampilan website juga dirancang agar responsif sehingga dapat digunakan pada berbagai perangkat, seperti laptop, komputer, tablet, dan smartphone.

## Alur Penggunaan Website

Alur penggunaan website Kalories dibuat sederhana agar mudah dipahami oleh pengguna:

1. Pengguna membuka website Kalories.
2. Pengguna memilih menu kalkulator kalori.
3. Pengguna memilih makanan yang ingin dihitung kalorinya.
4. Pengguna memasukkan jumlah porsi atau berat makanan.
5. Sistem menghitung estimasi total kalori.
6. Hasil perhitungan ditampilkan kepada pengguna.
7. Pengguna dapat melihat informasi tambahan atau tips sehat yang tersedia.

## Target Pengguna

Website Kalories ditujukan untuk:

- Pelajar dan mahasiswa yang ingin mulai menjaga pola makan.
- Masyarakat umum yang ingin mengetahui estimasi kalori makanan.
- Pengguna yang sedang menjaga berat badan.
- Pengguna yang ingin mulai menerapkan pola hidup sehat.
- Pengguna awam yang membutuhkan website penghitung kalori sederhana dan mudah digunakan.

## Pengembangan Selanjutnya

Beberapa fitur yang dapat dikembangkan di masa depan antara lain:

- Riwayat makanan yang telah dihitung.
- Total kalori harian pengguna.
- Rekomendasi makanan berdasarkan kebutuhan kalori.
- Grafik konsumsi kalori.
- Sistem akun pengguna.
- Database makanan yang lebih lengkap.
- Tampilan mobile yang lebih optimal.
- Fitur pencarian makanan yang lebih detail.

## Informasi Project

**Nama Project:** Kalories  
**Kategori:** Web Development  
**Subtema:** Human Capital & Future Skills  
**Fokus:** Kesehatan digital dan pola hidup sehat  
**Tujuan:** Membantu pengguna menghitung estimasi kalori makanan secara mudah dan praktis  

## Penutup

Kalories dibuat sebagai solusi sederhana untuk membantu pengguna memahami jumlah kalori dari makanan yang dikonsumsi. Dengan tampilan yang mudah digunakan dan fitur yang praktis, website ini diharapkan dapat menjadi media edukasi digital yang mendukung pola hidup sehat masyarakat.

Project ini dikembangkan sebagai bentuk pemanfaatan teknologi web dalam bidang kesehatan, khususnya untuk membantu pengguna lebih sadar terhadap pola makan dan asupan kalori harian.
