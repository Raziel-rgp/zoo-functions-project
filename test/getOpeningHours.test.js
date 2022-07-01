/* eslint-disable no-useless-escape */
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste se caso passado Monday as 9 da manha irá retornar The zoo is closed ', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Teste se caso não receba nenhum valor, retorna o valor experado ', () => {
    const expected = {
      Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 },
    };
    expect(getOpeningHours()).toStrictEqual(expected);
  });
  it('Teste se caso passado Tuesday as 9 da manha irá retornar The zoo is open ', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Teste se caso passado Wednesday as 9 da noite irá retornar The zoo is closed ', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se caso não seja passado um horario retorna um erro', () => {
    expect(getOpeningHours('Wednesday', '09:00-ae')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  })
});
