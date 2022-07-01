const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
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
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
module.exports = getSpeciesByIds;
