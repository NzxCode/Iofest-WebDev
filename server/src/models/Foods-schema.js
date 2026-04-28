const { Type } = require("lucide-react");

module.exports = (db) =>
  db.model(
    'Foods',
    db.Schema({
      name: String,
      category: String,
      caloriesPer100g: Number,
      defaultPortionGram: Number,
      portionLabel: String,
    })
  );


