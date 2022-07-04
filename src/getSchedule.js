const data = require('../data/zoo_data');

const { hours } = data;
const dias = Object.keys(hours);
const animais = data.species.map((animal) => animal.name);
function getSchedule(scheduleTarget) {
  console.log(animais);
  console.log(dias);
  console.log(scheduleTarget);
}

module.exports = getSchedule;
