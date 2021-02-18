/* eslint-disable no-undef */
import {
  sumar, restar, multiplicar, dividir,
} from '../src/funciones';

// Con describe describimos un conjunto de pruebas a realizar
describe('Operaciones matemáticas', () => {
  // Probamos cada uno de los test
  test('Realizamos la suma', () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test('Realizamos la resta', () => {
    expect(restar(1, 1)).toBe(0);
  });
  test('Realizamos la multiplicacion', () => {
    expect(multiplicar(1, 1)).toBe(1);
  });
  test('Realizamos la division', () => {
    expect(dividir(1, 1)).toBe(1);
  });
});
