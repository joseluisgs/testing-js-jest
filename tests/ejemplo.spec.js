/* eslint-disable no-undef */
// Test generales
describe('Test de Prueba', () => {
  test('Realizamos la suma', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe y toEqual son equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).not.toBeUndefined();
    expect(value).toBeTruthy();
    expect(value).not.toBeFalsy();
  });
});
