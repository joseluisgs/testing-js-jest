/* eslint-disable no-undef */

// Suite de test de cuenta
import Cuenta from '../cuenta';

describe('TDD Cuenta', () => {
  test('Cuenta: Al crear una cuenta el saldo debería ser cero', () => {
    const cuenta = new Cuenta();
    expect(cuenta.getSaldo()).toBe(0);
  });

  test('Cuenta: Al ingresar 100 en cuenta vacía el saldo debería ser 0', () => {
    const cuenta = new Cuenta();
    cuenta.ingresar(100);
    expect(cuenta.getSaldo()).toBe(100);
  });

  test('Cuenta: Al ingresar 3000 en cuenta vacía el saldo es 3000', () => {
    const cuenta = new Cuenta();
    cuenta.ingresar(3000);
    expect(cuenta.getSaldo()).toBe(3000);
  });
});
