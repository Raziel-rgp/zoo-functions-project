const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animals) {
  const obj = {};
  if (!animals) {
    species.forEach((item) => {
      obj[`${item.name}`] = item.residents.length;
    });
    return obj;
  }
}
countAnimals();

module.exports = countAnimals;
