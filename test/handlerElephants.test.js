const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('verifica se retorna undefined, quando nenhum elemento for passado', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('verifica se o valor passado é uma string', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se retorna os nomes corretos', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('verifica se retirba is valores corretos de count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('verifica se retirba is valores corretos de averageAge', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('verifica se retirba is valores corretos de location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('verifica se retirba is valores corretos de popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('verifica se retirba is valores corretos de availability', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('verifica se caso não passado nenhuma string, retorna null', () => {
    expect(handlerElephants(' ')).toBe(null);
  });
});
