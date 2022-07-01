const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const itens = data.species.find((specie) => specie.name === animal);
  const residentesIdades = itens.residents.every((idade) => idade.age >= age);
  return residentesIdades;
}
module.exports = getAnimalsOlderThan;
