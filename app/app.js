import {ViewChild, enableProdMode} from '@angular/core';
import {App, Platform} from 'ionic-angular';
import {StatusBar, Keyboard} from 'ionic-native';
import {PagePage} from './pages/page/page';
import {RewardsLinePage} from './pages/rewards-line/rewards-line';
import {ProfilePage} from './pages/profile/profile';
import {MyRewardsPage} from './pages/my-rewards/my-rewards';
import {SocialPage} from './pages/social/social';
import {SettingsPage} from './pages/settings/settings';
import {MessagesPage} from './pages/messages/messages';
import {ContactsPage} from './pages/contacts/contacts';

enableProdMode();


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  queries: {
    nav: new ViewChild('content')
  },
})
class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.platform = platform;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Реварды', icon:'ios-pricetags-outline', component: PagePage },
      { title: 'Контакты', icon:'ios-contacts-outline', component: ContactsPage },
      { title: 'Сообщения', icon:'ios-mail-outline', component: MessagesPage },
      { title: 'Профиль', icon:'ios-person-outline', component: ProfilePage },
      { title: 'Настройки', icon:'ios-settings-outline', component: SettingsPage },
      { title: 'Все реварды', icon:'ios-clipboard-outline', component: RewardsLinePage },
      { title: 'Мои реварды', icon:'ios-basket-outline', component: MyRewardsPage },
      { title: 'Выход', icon:'ios-undo-outline', component: PagePage },
    ];

    //this.rootPage = SettingsPage;
    this.rootPage = ProfilePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString('#BCBCBC');

      //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      //cordova.plugins.Keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openSettings(){
    this.nav.setRoot(SettingsPage);
  }
}
