const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  const array = {};
  const objVazio = {};
  if (animal.length === 0) {
    return objVazio;
  }
  species.forEach((especie) => {
    array[especie.name] = especie.residents.length;
  });
  console.log(array);
  const filtroArray = array.filter((specie) => specie.name === animal);
  console.log(filtroArray);
}

module.exports = countAnimals;
