function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <p className="mb-2 font-semibold text-emerald-700">
        Tentang Website
      </p>

      <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
        Kalories sebagai media bantu pola hidup sehat
      </h1>

      <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
        <p>
          Kalories adalah website perhitungan kalori berdasarkan porsi makanan.
          Website ini dibuat untuk membantu pengguna mengetahui perkiraan jumlah
          kalori dari makanan yang dikonsumsi sehari-hari.
        </p>

        <p>
          Website ini ditujukan untuk masyarakat umum, pelajar, mahasiswa, pekerja,
          dan pengguna yang ingin mulai memperhatikan pola makan. Dengan tampilan yang
          sederhana, pengguna dapat menghitung estimasi kalori tanpa harus melakukan
          perhitungan manual yang rumit.
        </p>

        <p>
          Cara kerja website ini cukup sederhana. Pengguna memilih makanan,
          memasukkan jumlah porsi dalam gram, kemudian sistem akan menghitung estimasi
          kalori berdasarkan data kalori per 100 gram. Pengguna juga dapat menambahkan
          makanan ke riwayat harian untuk melihat total kalori yang sudah dihitung.
        </p>

        <p>
          Hasil perhitungan pada website ini bersifat estimasi. Nilai kalori dapat
          berbeda tergantung jenis bahan, cara memasak, merek produk, dan ukuran porsi.
          Oleh karena itu, website ini tidak menggantikan saran dari ahli gizi atau
          tenaga kesehatan.
        </p>
      </div>
    </section>
  )
}

export default AboutPage