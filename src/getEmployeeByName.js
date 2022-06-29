const data = require('../data/zoo_data');

function getEmployeeByName(emplo) {
  const emp = data.employees;
  if (emplo) {
    return emp.find((nome) => nome.firstName === emplo || nome.lastName === emplo);
  }
  return {};
}

module.exports = getEmployeeByName;
