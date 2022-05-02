/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type userData = typeof import('./data/user.js');
type Generator = import('./generator_helper.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, userData: userData }
  interface Methods extends Playwright, Generator, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Generator>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
