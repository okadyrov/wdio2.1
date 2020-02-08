import Page from '../Page';

class ProfilePage extends Page {

  get h1() {
    return $('//h1');
  }

}

export default new ProfilePage();
