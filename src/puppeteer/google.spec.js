/* eslint-disable no-undef */
describe('Test iniciales Google', () => {
  // Antes de todo, cargamos Google
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  // Si queremos la refrescamos en cada test. No es necesario porque podemos perder cosas
  // Que hemos hecho en otros test
  beforeEach(async () => {
    await page.reload();
  });

  test('Debe mostrar Google en la página web', async () => {
    await expect(page).toMatch('google');
  });

  test("El título es 'Google'", async () => {
    const expected = 'Google';
    const actual = await page.title();
    expect(actual).toEqual(expected);
  });

  test('Hacemos una captura de la web', async () => {
    await page.screenshot({ path: './img/google.png' });
  });
});
