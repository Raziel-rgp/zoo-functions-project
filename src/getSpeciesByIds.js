const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  const array = [];
  if (ids.length === 0) {
    return array;
  }
  ids.forEach((id) => {
    const itens = data.species.find((specie) => specie.id === id);
    array.push(itens);
  });
  return (array);
}

module.exports = getSpeciesByIds;
