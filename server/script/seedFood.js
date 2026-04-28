const { Foods } = require('../src/models');

async function seedFoods() {
	foodList = [
{
    name: "Nasi Putih",
    category: "Karbohidrat",
    caloriesPer100g: 130,
    defaultPortionGram: 150,
    portionLabel: "1 piring sedang",
  },
  {
    name: "Indomie Goreng",
    category: "Karbohidrat",
    caloriesPer100g: 190,
    defaultPortionGram: 200,
    portionLabel: "1 bungkus",
  },
  {
    name: "Ayam Goreng",
    category: "Protein",
    caloriesPer100g: 260,
    defaultPortionGram: 120,
    portionLabel: "1 potong",
  },
  {
    name: "Telur Rebus",
    category: "Protein",
    caloriesPer100g: 155,
    defaultPortionGram: 60,
    portionLabel: "1 butir",
  },
  {
    name: "Tempe Goreng",
    category: "Protein",
    caloriesPer100g: 193,
    defaultPortionGram: 100,
    portionLabel: "1 potong",
  }
	];

	await Foods.create(foodList);
	console.log('Done masukin semua makanan');
	process.exit();
}

seedFoods();