/* eslint-disable no-undef */

// Suite de test de cuenta
import Cuenta from '../cuenta';

describe('TDD Cuenta', () => {
  test('Cuenta: Al crear una cuenta el saldo debería ser cero', () => {
    const cuenta = new Cuenta();
    expect(cuenta.getSaldo()).toBe(0);
  });
});
