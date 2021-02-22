/* eslint-disable no-undef */

// Suite de test de cuenta
import Cuenta from '../cuenta';

describe('TDD Cuenta', () => {
  let cuenta;
  beforeAll(() => {
    // console.log('Antes de cada prueba Creamos el Arrange Global');
    // console.log(' No tenemos nunguno por ahora');
  });

  beforeEach(() => {
    // console.log('Antes de cada prueba');
    cuenta = new Cuenta();
  });

  // Vamos a usar algunas cosas
  test('Cuenta: Al crear una cuenta el saldo debería ser cero', () => {
    expect(cuenta.getSaldo()).toBe(0);
  });

  test('Cuenta: Al ingresar 100 en cuenta vacía el saldo debería ser 0', () => {
    cuenta.ingresar(100);
    expect(cuenta.getSaldo()).toBe(100);
  });

  test('Cuenta: Al ingresar 3000 en cuenta vacía el saldo es 3000', () => {
    cuenta.ingresar(3000);
    expect(cuenta.getSaldo()).toBe(3000);
  });

  test('Cuenta: Al ingresar 3000 en cuenta con 100 el saldo es 3100', () => {
    // Arrange (set up)
    cuenta.ingresar(100);
    // Act
    cuenta.ingresar(3000);
    // Assert
    expect(cuenta.getSaldo()).toBe(3100);
  });

  test('Cuenta: Al ingresar -100 en cuenta vacía, el saldo sigue siendo 0', () => {
    cuenta.ingresar(-100);
    expect(cuenta.getSaldo()).toBe(0);
  });

  test('Cuenta: Si ingreso 100.45 en una cuenta vacía, el saldo es de 100.45', () => {
    cuenta.ingresar(100.45);
    expect(cuenta.getSaldo()).toBe(100.45);
  });

  test('Cuenta: Si ingreso 100.457 en una cuenta vacía, el saldo es de 0', () => {
    cuenta.ingresar(100.457);
    expect(cuenta.getSaldo()).toBe(0);
  });
});
