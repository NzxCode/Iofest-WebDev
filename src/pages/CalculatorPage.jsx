import { useEffect, useMemo, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { foods } from '../data/foods'
import { calculateCalories, getCalorieCategory, getTodayKey } from '../utils/calorie'
import ResultCard from '../components/ResultCard'

const STORAGE_KEY = 'kalories_meals'

function CalculatorPage() {
  const [foodId, setFoodId] = useState(foods[0].id)
  const [gram, setGram] = useState(foods[0].defaultPortionGram)
  const [meals, setMeals] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meals))
  }, [meals])

  const selectedFood = useMemo(() => {
    return foods.find((food) => food.id === Number(foodId))
  }, [foodId])

  const calories = calculateCalories(selectedFood?.caloriesPer100g, gram)
  const category = getCalorieCategory(calories)
  const todayKey = getTodayKey()

  const todayMeals = meals.filter((meal) => meal.date === todayKey)
  const totalToday = todayMeals.reduce((total, meal) => total + meal.calories, 0)

  function handleFoodChange(event) {
    const id = Number(event.target.value)
    const food = foods.find((item) => item.id === id)

    setFoodId(id)
    setGram(food.defaultPortionGram)
  }

  function handleAddMeal() {
    if (!selectedFood || calories <= 0) {
      return
    }

    const mealId =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : String(Date.now())

    const newMeal = {
      id: mealId,
      date: todayKey,
      foodName: selectedFood.name,
      gram: Number(gram),
      calories,
      category: category.label,
    }

    setMeals([newMeal, ...meals])
  }

  function removeMeal(id) {
    setMeals(meals.filter((meal) => meal.id !== id))
  }

  function clearTodayMeals() {
    setMeals(meals.filter((meal) => meal.date !== todayKey))
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 font-semibold text-emerald-700">
          Kalkulator Kalori
        </p>

        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Hitung estimasi kalori makananmu
        </h1>

        <p className="mt-4 leading-relaxed text-slate-600">
          Pilih makanan yang dikonsumsi, masukkan jumlah porsi dalam gram,
          lalu website akan menampilkan estimasi kalorinya.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="mb-5">
              <label className="mb-2 block font-semibold text-slate-800">
                Pilih makanan
              </label>

              <select
                value={foodId}
                onChange={handleFoodChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              >
                {foods.map((food) => (
                  <option key={food.id} value={food.id}>
                    {food.name} - {food.category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="mb-2 block font-semibold text-slate-800">
                Jumlah porsi dalam gram
              </label>

              <input
                type="number"
                min="1"
                value={gram}
                onChange={(event) => setGram(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
              <p>
                Porsi umum untuk <strong>{selectedFood.name}</strong>: {selectedFood.portionLabel}
              </p>
              <p>
                Kalori per 100 gram: <strong>{selectedFood.caloriesPer100g} kcal</strong>
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-700">
                  Riwayat Hari Ini
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {totalToday} kcal
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Total kalori dari makanan yang kamu tambahkan hari ini.
                </p>
              </div>

              {todayMeals.length > 0 && (
                <button
                  onClick={clearTodayMeals}
                  className="rounded-full border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                >
                  Hapus Semua
                </button>
              )}
            </div>

            <div className="mt-5 space-y-3">
              {todayMeals.length === 0 ? (
                <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
                  Belum ada makanan yang ditambahkan hari ini.
                </p>
              ) : (
                todayMeals.map((meal) => (
                  <div
                    key={meal.id}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4"
                  >
                    <div>
                      <p className="font-semibold text-slate-900">{meal.foodName}</p>
                      <p className="text-sm text-slate-500">
                        {meal.gram} gram • {meal.category}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <p className="font-bold text-emerald-700">{meal.calories} kcal</p>
                      <button
                        onClick={() => removeMeal(meal.id)}
                        className="rounded-xl p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                        aria-label="Hapus makanan"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <ResultCard
          selectedFood={selectedFood}
          gram={gram}
          calories={calories}
          category={category}
          onAdd={handleAddMeal}
        />
      </div>
    </section>
  )
}

export default CalculatorPage