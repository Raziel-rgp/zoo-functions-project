const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const employeRes = employees.find((empregado) => empregado.id === id).responsibleFor;
  const idAnimais = employeRes[0];
  const findAnimal = species.find((animal) => animal.id === idAnimais).residents;
  const maxAge = findAnimal.reduce((prev, current) => (prev.age > current.age ? prev : current));
  const array = [`${maxAge.name}`, `${maxAge.sex}`, maxAge.age];
  return array;
}
module.exports = getOldestFromFirstSpecies;
