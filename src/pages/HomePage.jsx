import { Link } from 'react-router-dom'
import { Calculator, Salad, Smartphone, GaugeCircle } from 'lucide-react'

function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Website Perhitungan Kalori
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Hitung kalori makanan berdasarkan porsi dengan lebih mudah.
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Kalories membantu pengguna memperkirakan jumlah kalori dari makanan
            yang dikonsumsi, sehingga pengguna dapat mulai membangun pola makan
            yang lebih teratur, sehat, dan terukur.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/kalkulator"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Coba Kalkulator
            </Link>

            <Link
              to="/daftar-makanan"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700"
            >
              Lihat Daftar Makanan
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="mb-5 rounded-2xl bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-700">
              Contoh Perhitungan
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Nasi Putih
            </h2>
            <p className="mt-1 text-slate-600">Porsi: 150 gram</p>
            <p className="mt-5 text-4xl font-bold text-emerald-700">
              195 kcal
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4">
              <Calculator className="mb-3 text-emerald-600" />
              <p className="font-semibold">Praktis</p>
              <p className="text-sm text-slate-500">Perhitungan sederhana</p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-4">
              <Salad className="mb-3 text-emerald-600" />
              <p className="font-semibold">Edukatif</p>
              <p className="text-sm text-slate-500">Mengenal porsi makan</p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-4">
              <Smartphone className="mb-3 text-emerald-600" />
              <p className="font-semibold">Responsif</p>
              <p className="text-sm text-slate-500">Bisa diakses mobile</p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-4">
              <GaugeCircle className="mb-3 text-emerald-600" />
              <p className="font-semibold">Terukur</p>
              <p className="text-sm text-slate-500">Ada riwayat harian</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage