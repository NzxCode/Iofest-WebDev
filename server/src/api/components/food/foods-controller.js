const foodsService = require('./foods-service');

async function getfoods(request, response, next) {
  try {
    const { search = '', category = 'Semua' } = request.query;

    const foods = await foodsService.getfoods({ search, category });

    return response.status(200).json(foods);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getfoods,
};