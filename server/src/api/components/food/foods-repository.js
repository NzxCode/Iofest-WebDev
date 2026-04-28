const { Foods } = require('../../../models');

async function getfoods({ search = '', category = 'Semua' }) {
  let query = {};

  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }

  if (category !== 'Semua') {
    query.category = { $regex: `^${category}$`, $options: 'i' };
  }

  return await Foods.find(query);
}

module.exports = {
  getfoods,
};