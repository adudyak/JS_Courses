/*let accounts = new DataTable(['email', 'password']);
accounts.add(['210327042022@test.com', '.VhGDZ!wqiKy@59']);
accounts.add(['151527042022@test.com', '.VhGDZ!wqiKy@59']);

const FileHandler = require("./helpers/file_handler");
const ReadFile = require("./helpers/read_file");

let logins = ReadFile.getContentFromFile('./data/logins.txt');
console.log(logins);
let array = ReadFile.convertStringToArray(logins);
console.log(array);
*/

Feature('Store');

/*Scenario('first', async ({ I, homePage, authPage, createAccountPage, userData }) => {
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
}).tag('@reg');*/

/*Scenario('second', async ({ I, homePage, authPage, createAccountPage, userData }) => {
  I.login(username, pass);
  homePage.openStore();
  homePage.clickSignIn();
  authPage.fillNewUserEmail(I.getRandomEmail());
  authPage.clickCreateAccount();
  createAccountPage.fillNewUserForm(user);
  pause();
  I.see('My Account');
}).tag('@login');*/

/*Data(FileHandler.getData()).Scenario('multi login', async ({ I, current }) => {
  console.log('Email: ' + current.email + '\nPassword: ' + current.password);
}).tag('@multi');*/

/*Data(accounts).Scenario('Users from data', ({ current }) => {
  //console.log('Email: ' + current.email + '\nPassword: ' + current.password);
}).tag('@account');*/

/*Data(ReadFile.getData()).Scenario('Users from data', ({ current }) => {
  console.log('Email: ' + current.email + '\nPassword: ' + current.password);
}).tag('@account2');*/

Scenario('api', async ({ I }) => {
  //https://codecept.io/helpers/REST/#rest
  //https://jsonplaceholder.typicode.com/guide/
  //Get
  let response = await I.sendGetRequest('https://jsonplaceholder.typicode.com/posts/1');
  I.seeResponseCodeIsSuccessful();
  console.log(response.data);

  //Post
  response = await I.sendPostRequest('https://jsonplaceholder.typicode.com/posts/', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  I.seeResponseCodeIsSuccessful();
  console.log(response.data);

  //https://swapi.dev/
  //Search at SWAPI via get
  let searchItem = 'Skywalker';
  response = await I.sendGetRequest('https://swapi.dev/api/people/?search=' + searchItem);
  console.log(response.data)
}).tag('@api');