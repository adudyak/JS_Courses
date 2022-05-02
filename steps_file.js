// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    login(username, password) {
      this.amOnPage('signInPage');
      this.fillField('usernameLoc', username);
      this.fillField('passLoc', password);
      this.click('signInButtonLoc');
    },

    logout() {
      this.click('signOutLoc');
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
