describe('Ecosia.org Demo', function() {

  before(browser => browser.url('https://www.ecosia.org/'));

  test('Demo test ecosia.org - chained', function (browser) {
    browser
      .waitForElementVisible('body')
      .saveScreenshot('chained.png')
      .assert.fail('purposeful fail')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
  });

  after(browser => browser.end());
});
