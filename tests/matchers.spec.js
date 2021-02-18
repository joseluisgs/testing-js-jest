/* eslint-disable no-undef */
import {
  sumar, restar, multiplicar, dividir,
} from '../src/funciones';

import { persona1, persona2 } from '../src/persona';

import {
  isFalse, isNull, isTrue, isUndefined,
} from '../src/boolean';

import { dias, provincias } from '../src/arrays';

import strings from '../src/strings';

// Igualdad
describe('Matcher de objetos', () => {
  // Lanzamos el test
  test('Comprobamos que los objectos son iguales', () => {
    expect(persona1).toEqual(persona2);
  });
});

// Numéricos
describe('Matchers numéricos', () => {
  // Lanzamos los test
  test('Resultado menor que...', () => {
    expect(restar(5, 3)).toBeLessThan(3);
  });
  test('Resultado menor o igual que...', () => {
    expect(restar(5, 3)).toBeLessThanOrEqual(2);
  });
  test('Resultado mayor o igual que...', () => {
    expect(multiplicar(2, 5)).toBeGreaterThanOrEqual(10);
  });
  test('Resultado mayor que...', () => {
    expect(sumar(5, 5)).toBeGreaterThan(9);
  });
  test('Resultado igual que ...', () => {
    expect(dividir(5, 5)).toBe(1);
  });
});

// Booleanos, nulos y Undefined
describe('Matchers Boolean, Undefined o Null', () => {
  test('Resultado true', () => {
    expect(isTrue()).toBeTruthy();
  });
  test('Resultado false', () => {
    expect(isFalse()).toBeFalsy();
  });
  test('Resultado undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
  test('Resultado null', () => {
    expect(isNull()).toBeNull();
  });
});

// Arrays
describe('Matchers Arrays', () => {
  test('Madrid existe en el array', () => {
    expect(provincias).toContain('Madrid');
  });
  test('Guadalajara no existe en el array', () => {
    expect(provincias).not.toContain('Guadalajara');
  });
  test('El array semana tiene 7 elementos', () => {
    expect(dias).toHaveLength(7);
  });
});

// Con cadenas
describe('Matchers Strings', () => {
  const exp = strings;
  test('Comprobamos si la respuesta es correcta', () => {
    expect(exp.responseOK).toMatch(/OK/);
  });
  test('Comprobamos si la respuesta es incorrecta', () => {
    expect(exp.responseFAIL).toMatch(/FAIL/);
  });
  test('Comprobamos si la respuesta tiene una longitud', () => {
    expect(exp.responseFAIL).toHaveLength(13);
  });
  test('Comprobamos dirección de email', () => {
    expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);
  });
  test('Comprobamos número de teléfono', () => {
    expect(exp.telefono).toMatch(/^[9|6|7][0-9]{8}$/);
  });
});

// Precondiciones y postcondiciones. Pudes agriparlo dentro de un describe
afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));
beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las pruebas'));
