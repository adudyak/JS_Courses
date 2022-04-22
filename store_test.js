Feature('Store');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://automationpractice.com/index.php');
    I.see('Women');
    //I.waitForVisible(locator);
});
