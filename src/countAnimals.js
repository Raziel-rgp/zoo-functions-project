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
  if (!animals.sex) {
    const ani = species.find((especie) => especie.name === animals.specie).residents.length;
    return ani;
  }
  if (animals.sex) {
    const ani = species.find((especie) => especie.name === animals.specie);
    const aniSexu = ani.residents.filter((secsu) => secsu.sex === animals.sex).length;
    return aniSexu;
  }
}
console.log(countAnimals());

module.exports = countAnimals;
