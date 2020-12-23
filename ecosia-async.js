describe('Ecosia.org Demo', function() {

  before(browser => browser.url('https://www.ecosia.org/'));

  test('Demo test ecosia.org - async', async function (browser) {
    await browser.waitForElementVisible('body');
    await browser.saveScreenshot('async.png');
    await browser.assert.fail('purposeful fail');
    await browser.assert.titleContains('Ecosia');
    await browser.assert.visible('input[type=search]');
    await browser.setValue('input[type=search]', 'nightwatch');
    await browser.assert.visible('button[type=submit]');
    await browser.click('button[type=submit]');
    await browser.assert.containsText('.mainline-results', 'Nightwatch.js');
  });

  after(browser => browser.end());
});
