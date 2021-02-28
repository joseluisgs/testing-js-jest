/* eslint-disable no-undef */
describe('Ejemplos con buscadores', () => {
/*
  test('Ejemplo Amazon', async () => {
    const screenshot = './img/amazon.png';
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://www.amazon.com');
    await page.type('#twotabsearchtextbox', 'nyan cat pullover');
    await page.click('input.nav-input');
    await page.waitForSelector('#resultsCol');
    await page.screenshot({ path: 'amazon_nyan_cat_pullovers_list.png' });
    await page.click('#pagnNextString');
    await page.waitForSelector('#resultsCol');
    const pullovers = await page.$$('a.a-link-normal.a-text-normal');
    await pullovers[2].click();
    await page.waitForSelector('#ppd');
    await page.screenshot({ path: screenshot });
    console.log(`Mira la captura: ${screenshot}`);
  }, 30000); // le pongo mas tiempo para que no salte la excepción del tiempo por defecto de jest para un test.

  test('Booking', async () => {
    const screenshot = './img/booking.png';
    const page = await browser.newPage();
    await page.goto('https://booking.com');
    await page.type('#ss', 'Berlin');
    await page.click('.sb-searchbox__button');
    await page.waitForSelector('#hotellist_inner');
    await page.screenshot({ path: screenshot });
    const hotels = await page.$$eval('span.sr-hotel__name', (anchors) => anchors.map((anchor) => anchor.textContent.trim()).slice(0, 10));
    console.log(hotels);
    console.log(`Mira la captura: ${screenshot}`);
  }, 30000); // le pongo mas tiempo para que no salte la excepción del tiempo por defecto de jest para un test.
 */
  test('Ejemplo con duckduckgo', async () => {
    const page = await browser.newPage();
    await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' });
    await page.type('#search_form_input_homepage', 'Puppeteer');
    const searchValue = await page.$eval('#search_form_input_homepage', (el) => el.value);
    expect(searchValue).toEqual('Puppeteer');
  });

  /*   test('Ejemplo con YouTube', async () => {
    const screenshot = './img/youtube.png';
     const page = await browser.newPage();
    await page.goto('https://youtube.com');
    await page.type('#search', 'Fleetwood Mac Dreams');
    await page.click('button#search-icon-legacy');
    await page.waitForSelector('ytd-thumbnail.ytd-video-renderer');
    await page.screenshot({ path: 'youtube_fm_dreams_list.png' });
    const videos = await page.$$('ytd-thumbnail.ytd-video-renderer');
    await videos[2].click();
    await page.waitForSelector('.html5-video-container');
    await page.waitFor(5000);
    await page.screenshot({ path: screenshot });
    console.log(`Ver captura: ${screenshot}`);
  }, 30000); */

  /* test('Google Developers', async () => {
    const page = await browser.newPage();

    await page.goto('https://developers.google.com/web/');

    // Type into search box.
    await page.type('.devsite-searchbox input', 'Headless Chrome');

    // Wait for suggest overlay to appear and click "show all results".
    const allResultsSelector = '.devsite-suggest-all-results';
    await page.waitForSelector(allResultsSelector);
    await page.click(allResultsSelector);

    // Wait for the results page to load and display the results.
    const resultsSelector = '.gsc-results .gsc-thumbnail-inside a.gs-title';
    await page.waitForSelector(resultsSelector);

    // Extract the results from the page.
    // eslint-disable-next-line no-shadow
    const links = await page.evaluate((resultsSelector) => {
      const anchors = Array.from(document.querySelectorAll(resultsSelector));
      return anchors.map((anchor) => {
        const title = anchor.textContent.split('|')[0].trim();
        return `${title} - ${anchor.href}`;
      });
    }, resultsSelector);
    console.log(links.join('\n'));
  }, 30000); */
});
