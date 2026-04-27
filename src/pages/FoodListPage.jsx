import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { foods } from '../data/foods'

function FoodListPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua')

  const categories = useMemo(() => {
    return ['Semua', ...new Set(foods.map((food) => food.category))]
  }, [])

  const filteredFoods = foods.filter((food) => {
    const matchSearch = food.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === 'Semua' || food.category === category

    return matchSearch && matchCategory
  })

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 font-semibold text-emerald-700">
          Daftar Makanan
        </p>

        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Daftar makanan dan estimasi kalorinya
        </h1>

        <p className="mt-4 leading-relaxed text-slate-600">
          Data makanan ini digunakan sebagai dasar perhitungan awal pada website.
          Nilai kalori bersifat estimasi dan dapat berubah tergantung bahan serta cara pengolahan.
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Cari makanan..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-225 rounded-4xl border border-slate-300 px-12 py-3 outline-none focus:border-emerald-600"
          />
        </div>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-50 rounded-xl border border-slate-300 px-4 py-1 text-sm justify-self-end outline-none focus:border-emerald-600"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              {food.category}
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              {food.name}
            </h2>

            <p className="mt-2 text-slate-600">
              {food.caloriesPer100g} kcal / 100 gram
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Porsi umum: {food.portionLabel}
            </p>
          </div>
        ))}
      </div>

      {filteredFoods.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          Makanan tidak ditemukan.
        </div>
      )}
    </section>
  )
}

export default FoodListPage