const { Foods } = require('../src/models');

async function seedFoods() {
	const foodList = [
		// KARBO
		{
			name: "Nasi Putih",
			category: "Karbohidrat",
			caloriesPer100g: 195,
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
			name: "Roti Tawar",
			category: "Karbohidrat",
			caloriesPer100g: 265,
			defaultPortionGram: 60,
			portionLabel: "2 lembar",
		},
		{
			name: "Kentang Rebus",
			category: "Karbohidrat",
			caloriesPer100g: 87,
			defaultPortionGram: 150,
			portionLabel: "1 porsi",
		},
		{
			name: "Mie Ayam",
			category: "Karbohidrat",
			caloriesPer100g: 160,
			defaultPortionGram: 300,
			portionLabel: "1 mangkuk",
		},

		// PROTEIN
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
		},
		{
			name: "Tahu Goreng",
			category: "Protein",
			caloriesPer100g: 144,
			defaultPortionGram: 100,
			portionLabel: "2 potong",
		},
		{
			name: "Ikan Bakar",
			category: "Protein",
			caloriesPer100g: 206,
			defaultPortionGram: 150,
			portionLabel: "1 ekor kecil",
		},

		// SAYUR
		{
			name: "Bayam Rebus",
			category: "Sayur",
			caloriesPer100g: 23,
			defaultPortionGram: 100,
			portionLabel: "1 mangkuk",
		},
		{
			name: "Kangkung Tumis",
			category: "Sayur",
			caloriesPer100g: 90,
			defaultPortionGram: 120,
			portionLabel: "1 porsi",
		},
		{
			name: "Wortel Rebus",
			category: "Sayur",
			caloriesPer100g: 41,
			defaultPortionGram: 100,
			portionLabel: "1 mangkuk",
		},
		{
			name: "Brokoli Rebus",
			category: "Sayur",
			caloriesPer100g: 34,
			defaultPortionGram: 100,
			portionLabel: "1 mangkuk",
		},

		// LEMAK
		{
			name: "Alpukat",
			category: "Lemak",
			caloriesPer100g: 160,
			defaultPortionGram: 100,
			portionLabel: "1 buah kecil",
		},
		{
			name: "Kacang Tanah",
			category: "Lemak",
			caloriesPer100g: 567,
			defaultPortionGram: 50,
			portionLabel: "1 genggam",
		},
		{
			name: "Keju Cheddar",
			category: "Lemak",
			caloriesPer100g: 402,
			defaultPortionGram: 30,
			portionLabel: "1 slice",
		},

		// MINUMAN
		{
			name: "Susu Full Cream",
			category: "Minuman",
			caloriesPer100g: 61,
			defaultPortionGram: 200,
			portionLabel: "1 gelas",
		},
		{
			name: "Teh Manis",
			category: "Minuman",
			caloriesPer100g: 40,
			defaultPortionGram: 200,
			portionLabel: "1 gelas",
		},
		{
			name: "Kopi Hitam",
			category: "Minuman",
			caloriesPer100g: 2,
			defaultPortionGram: 200,
			portionLabel: "1 cangkir",
		},
		{
			name: "Jus Jeruk",
			category: "Minuman",
			caloriesPer100g: 45,
			defaultPortionGram: 250,
			portionLabel: "1 gelas",
		},
	];

	await Foods.create(foodList);
	console.log('Done masukin semua makanan');
	process.exit();
}

seedFoods();