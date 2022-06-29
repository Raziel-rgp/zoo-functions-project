const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const empregadosData = data.employees.filter((empregados) =>
    empregados.managers.find((gerente) => gerente === id));
  return empregadosData.length > 0;
}

function getRelatedEmployees(managerId) {
  const empregadosArray = employees.filter((pessoa) =>
    pessoa.managers.find((gerenteId) => gerenteId === managerId));
  const nomeCompleto = empregadosArray.map((persona) => `${persona.firstName} ${persona.lastName}`);
  if (empregadosArray.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return nomeCompleto;
  }
}

module.exports = { isManager, getRelatedEmployees };
