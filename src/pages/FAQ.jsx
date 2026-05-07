function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
        <h1 class = "text-3xl font-bold text-emerald-700 text-center md:text-4xl">
            FAQ
        </h1>
    <div class="mt-6 space-y-5 leading-relaxed text-slate-600">

    <div>
        <h2 class="font-semibold text-lg text-slate-800">
            Apa fungsi website ini?
        </h2>
        <p>
            Website ini membantu pengguna menghitung estimasi kalori makanan
            berdasarkan jenis makanan dan jumlah porsi yang dimasukkan.
        </p>
    </div>

    <div>
        <h2 class="font-semibold text-lg text-slate-800">
            Apakah hasil kalori yang ditampilkan akurat?
        </h2>
        <p>
            Hasil yang diberikan bersifat estimasi. Nilai kalori dapat berbeda
            tergantung bahan, cara memasak, dan ukuran porsi makanan.
        </p>
    </div>

    <div>
        <h2 class="font-semibold text-lg text-slate-800">
            Siapa yang dapat menggunakan website ini?
        </h2>
        <p>
            Website ini dapat digunakan oleh masyarakat umum, pelajar,
            mahasiswa, pekerja, maupun siapa saja yang ingin memantau
            pola makan dan asupan kalori harian.
        </p>
    </div>

    <div>
        <h2 class="font-semibold text-lg text-slate-800">
            Bagaimana cara menghitung kalori?
        </h2>
        <p>
            Pengguna cukup memilih makanan dan memasukkan jumlah porsi
            dalam gram, kemudian sistem akan menghitung estimasi kalori
            secara otomatis.
        </p>
    </div>

    <div>
        <h2 class="font-semibold text-lg text-slate-800">
            Apakah website ini gratis?
        </h2>
        <p>
            Ya, seluruh fitur utama pada website ini dapat digunakan secara gratis.
        </p>
    </div>
    </div>
    </section>
  )
}

export default FAQ