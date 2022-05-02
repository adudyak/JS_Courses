const { I } = inject();

module.exports = {
  storeLink: 'http://automationpractice.com/index.php',
  signInButton: { css: 'a.login' },
  contactUsButton: { css: '#contact-link > a' },
  price: { css: '#our_price_display' },
  

  openStore() {
    I.amOnPage(this.storeLink);
  },

  clickSignIn() {
    I.click(this.signInButton);
  },

  clickContactUs() {
    I.click(this.contactUsButton);
  },

  openProduct() {
    I.amOnPage('http://automationpractice.com/index.php?id_product=3&controller=product');
  },

  async getProductPrice() {
    return await I.grabTextFrom(this.price);
  }
}
