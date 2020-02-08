import Page from '../Page';

class LoginPage extends Page {
  get email() {
    return $('//input[@name="email"]');
  }

  get password() {
    return $('//input[@name="password"]');
  }

  get submitBtn() {
    return $('//button[@type="submit"]');
  }

  get h1() {
    return $('//h1');
  }

  login() {
    this.open();
    this.email.setValue('olya6avg@gmail.com');
    this.password.setValue('11111');
    this.submitBtn.click();
    browser.pause(3000);
  }

  open() {
    super.open('https://stage.pasv.us/user/login');
  }
}

export default new LoginPage();
