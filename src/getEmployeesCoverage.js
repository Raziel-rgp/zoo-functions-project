/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const data = require('../data/zoo_data');

const { species, employees } = data;

function getSpecies(id) {
  const animals = employees.find((pessoa) => pessoa.id === id).responsibleFor;
  return animals.map(
    (animal) => species.filter((specie) => specie.id === animal)[0].name,
  );
}

function procEmpre(parm) {
  const all = employees.find((srv) => srv.lastName === parm.name || srv.firstName === parm.name);
  const id = employees.find((empregado) => empregado.id === parm.id);
  if (id !== undefined) {
    return id;
  }
  if (all !== undefined) {
    return all;
  }
  if (all === undefined && id === undefined) {
    throw new Error('Informações inválidas');
  }
}

function getLocations(id) {
  const animals = employees.find((pessoa) => pessoa.id === id).responsibleFor;
  const locations = [];
  animals.forEach((animal) => locations.push(species
    .find((specie) => specie.id === animal).location));
  return locations;
}

function objeto(param) {
  let { id } = param;
  const idAnimal = procEmpre(param);
  if (id === undefined) id = procEmpre(param).id;
  const obj = { id: `${idAnimal.id}`,
    fullName: `${idAnimal.firstName} ${idAnimal.lastName}`,
    species: getSpecies(id),
    locations: getLocations(id) };
  return obj;
}

function getEmployeesCoverage(param) {
  if (param !== undefined) return objeto(param);
  return employees.map((pessoa) => objeto(pessoa));
}
getEmployeesCoverage({ name: 'Sharonda' });

module.exports = getEmployeesCoverage;
