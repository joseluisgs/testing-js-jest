/* eslint-disable no-undef */
describe('Varios test interesantes', () => {
  // Antes de todo, cargamos Google
  test('Test con formularios', async () => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1800 });
    await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios');

    const checkboxStatus = await page.$eval('#defaultCheck1', (input) => input.checked);
    expect(checkboxStatus).toBeFalsy();
    // console.log('Checkbox checked status:', checkboxStatus);

    const radios = await page.$$eval('input[name="exampleRadios"]', (inputs) => inputs.map((input) => input.value));
    expect(radios).toContain('option1');
    expect(radios).toContain('option3');
    // console.log('Radio values:', radios);

    // Vamos a otra web
    await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#select-menu');

    const selectOptions = await page.$$eval('.bd-example > select.custom-select.custom-select-lg.mb-3 > option',
      (options) => options.map((option) => option.value));
    expect(selectOptions).toContain('Open this select menu');
    // console.log(selectOptions);
  });

  test('Eventos del Teclado', async () => {
    const page = await browser.newPage();
    await page.goto('https://trix-editor.org/');
    await page.focus('trix-editor');
    await page.keyboard.type('Hola Hola 2DAW');
    await page.screenshot({ path: './img/teclado.png' });
  });
});
