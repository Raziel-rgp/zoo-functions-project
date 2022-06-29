const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((crianca) => crianca.age < 18);
  const adults = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50);
  const seniors = entrants.filter((idosos) => idosos.age >= 50);
  const listaObjetos = { child: childs.length, adult: adults.length, senior: seniors.length };
  return listaObjetos;
}

function calculateEntry(entrants) {
  const listaVazia = 0;
  if (entrants === undefined) {
    return listaVazia;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const criancas = entrants.filter((crianca) => crianca.age < 18);
  const adultos = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50);
  const idosos = entrants.filter((idoso) => idoso.age >= 50);
  const totalCriancas = criancas.length * 20.99;
  const totalAdultos = adultos.length * 49.99;
  const totalIdosos = idosos.length * 24.99;
  const totalIngressos = totalAdultos + totalCriancas + totalIdosos;
  return totalIngressos;
}

module.exports = { calculateEntry, countEntrants };
