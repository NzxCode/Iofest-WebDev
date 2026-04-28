const foodsRepository = require('./foods-repository');

async function getfoods(filters) {
  return await foodsRepository.getfoods(filters);
}

module.exports = {
  getfoods,
};