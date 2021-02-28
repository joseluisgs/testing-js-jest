/* eslint-disable no-undef */
describe('Test iniciales Google', () => {
  test('Walmart', async () => {
    const screenshot = './img/walmart.png';
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://www.walmart.com/ip/Super-Mario-Odyssey-Nintendo-Nintendo-Switch-045496590741/56011600', { waitUntil: 'networkidle2' });
    await page.click('button.prod-ProductCTA--primary');
    await page.waitForSelector('.Cart-PACModal-ItemInfoContainer');
    await page.screenshot({ path: screenshot });
    console.log(`Ver captura: ${screenshot}`);
  });

  test('Stapless', async () => {
    const screenshot = './img/stapless.png';
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://www.staples.com/Crafty-Dab-Non-toxic-Face-Paint-Crayons-8-Bundle-CV-80032/product_693277',
      { waitUntil: 'networkidle2' });
    await page.click('button.add-to-cart-btn.addToCart');
    await page.waitForSelector('h4.cart-items-header');
    await page.screenshot({ path: screenshot });
    console.log(`Ver captura: ${screenshot}`);
  });
});
/*
https://medium.com/puntotech/tests-e2e-con-jest-y-puppeteer-1c5f25e1e3aa
https://github.com/puppeteer/examples
https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/
https://www.adictosaltrabajo.com/2020/02/27/testing-funcional-con-puppeteer/
https://developers.google.com/web/tools/puppeteer/examples
 */
