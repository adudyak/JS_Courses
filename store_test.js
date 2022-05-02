Feature('Store');

Scenario('first', async ({ I, homePage, authPage, createAccountPage, userData }) => {
  homePage.openStore();
  homePage.clickSignIn();
  
  //custom Helper sample:
  authPage.fillNewUserEmail(await I.getRandomEmail());

  //tryTo sample
  const result = await tryTo(() => I.see('Welcome'));
  console.log(result);

  //usage of external object data/user:
  createAccountPage.fillNewUserForm(userData);

  //steps_file sample:
  I.login(username, pass);
  I.logout();
}).tag('@reg');

Scenario('second', async ({ I, homePage, authPage, createAccountPage, userData }) => {
  I.login(username, pass);
  /*homePage.openStore();
  homePage.clickSignIn();
  authPage.fillNewUserEmail(I.getRandomEmail());
  authPage.clickCreateAccount();
  createAccountPage.fillNewUserForm(user);
  pause();
  I.see('My Account');*/
}).tag('@login');