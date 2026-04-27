import { PlusCircle } from 'lucide-react'

function ResultCard({ selectedFood, gram, calories, category, onAdd }) {
  if (!selectedFood || calories === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500">
        Hasil perhitungan akan muncul setelah kamu memilih makanan dan memasukkan porsi.
      </div>
    )
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <p className="text-sm font-semibold text-emerald-700">
        Hasil Estimasi Kalori
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        {selectedFood.name}
      </h2>

      <p className="mt-1 text-slate-600">
        Porsi yang dihitung: {gram} gram
      </p>

      <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
        <p className="text-sm text-slate-600">Estimasi kalori</p>
        <p className="text-4xl font-bold text-emerald-700">
          {calories} kcal
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 p-4">
        <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${category.color}`}>
          {category.label}
        </span>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {category.description}
        </p>
      </div>

      <button
        onClick={onAdd}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700"
      >
        <PlusCircle size={20} />
        Tambahkan ke Riwayat Hari Ini
      </button>

      <p className="mt-5 text-xs leading-relaxed text-slate-500">
        Catatan: hasil ini bersifat estimasi dan dapat berbeda tergantung bahan,
        cara memasak, merek produk, serta ukuran porsi sebenarnya.
      </p>
    </div>
  )
}

export default ResultCard