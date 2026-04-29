import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

function FoodListPage() {
  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [categories, setCategories] = useState(['Semua'])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search)
    }, 400)
    return () => clearTimeout(timeout)
  }, [search])

  useEffect(() => {
    fetch('/api/foods')
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((f) => f.category))]
        setCategories(['Semua', ...uniqueCategories])
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    fetch(`/api/foods?search=${debouncedSearch}&category=${category}`)
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch(console.error)
  }, [debouncedSearch, category])

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 font-semibold text-emerald-700">Daftar Makanan</p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Daftar makanan dan estimasi kalorinya
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          Data makanan ini digunakan sebagai dasar perhitungan awal pada website.
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Cari makanan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-225 rounded-2xl border px-12 py-3"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-50 rounded-xl border px-4 py-2 justify-self-end"
        >
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <div key={food._id} className="rounded-3xl bg-white p-6 shadow-md">
            <p className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              {food.category}
            </p>
            <h2 className="text-xl font-bold">{food.name}</h2>
            <p className="mt-2 text-slate-600">{food.caloriesPer100g} kcal / 100 gram</p>
            <p className="mt-1 text-sm text-slate-500">Porsi umum: {food.portionLabel}</p>
          </div>
        ))}
      </div>

      {foods.length === 0 && (
        <div className="mt-8 text-center text-slate-500">Makanan tidak ditemukan.</div>
      )}
    </section>
  )
}

export default FoodListPage