const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const email = Math.random().toFixed(4) + 'kakak@gmail.com';

const user = {
  firstName: 'John',
  lastName: 'Smith',
  password: 'password',
  phone: '14259195668',
  email: email,
  about: 'hdfkdfjldlkfj djdfsdfjdfkj kdfjdkfdj',
  goals: 'eat sleep code',
  englishLevel: 'Native'
};

const pageRegister = {
  title: 'Progress Monitor',
  h1: 'User Register',
  description: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit'
};

const pageRegisterSelectors = {
  h1: 'h1',
  description: 'p',
  submitButton: 'form button[type="submit"]',
  firstNameInput: 'form input[name="firstName"]',
  lastNameInput: 'form input[name="lastName"]',
  phoneInput: 'form input[name="phone"]',
  emailInput: 'form input[name="email"]',
  passwordInput: 'form input[name="password"]',
  aboutInput: 'form textarea[name="about"]',
  goalsInput: 'form textarea[name="goals"]',
  englishLevelInput: 'form select[name="englishLevel"]',
};

const pageLogin = {
  title: 'Progress Monitor',
  h1: 'User Login',
};

const pageConfirmation = {
  h1: 'You are a new user',
};

module.exports = { URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin, pageConfirmation };
