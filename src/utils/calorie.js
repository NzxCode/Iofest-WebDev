export function calculateCalories(caloriesPer100g, gram) {
  const foodCalories = Number(caloriesPer100g)
  const foodGram = Number(gram)

  if (!foodCalories || !foodGram || foodGram <= 0) {
    return 0
  }

  return Math.round((foodGram / 100) * foodCalories)
}

export function getCalorieCategory(calories) {
  if (calories <= 150) {
    return {
      label: "Rendah",
      color: "text-emerald-700 bg-emerald-100",
      description: "Porsi ini tergolong rendah kalori.",
    }
  }

  if (calories <= 400) {
    return {
      label: "Sedang",
      color: "text-amber-700 bg-amber-100",
      description: "Porsi ini tergolong sedang dan masih cukup wajar untuk konsumsi harian.",
    }
  }

  return {
    label: "Tinggi",
    color: "text-red-700 bg-red-100",
    description: "Porsi ini cukup tinggi kalori, sehingga sebaiknya dikonsumsi dengan lebih terukur.",
  }
}

export function getTodayKey() {
  return new Date().toISOString().slice(0, 10)
}