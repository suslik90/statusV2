import {ViewChild, enableProdMode} from '@angular/core';
import {App, Platform} from 'ionic-angular';
import {StatusBar, Keyboard} from 'ionic-native';
import {GettingStartedPage} from './pages/getting-started/getting-started';
import {ListPage} from './pages/list/list';
import {PagePage} from './pages/page/page';
import {RewardsLinePage} from './pages/rewards-line/rewards-line';
import {ProfilePage} from './pages/profile/profile';
import {MyRewardsPage} from './pages/my-rewards/my-rewards';
import {SocialPage} from './pages/social/social';
import {SettingsPage} from './pages/settings/settings';

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
      { title: 'Реварды', icon:'ios-pricetags-outline', component: PagePage },
      { title: 'Контакты', icon:'ios-contacts-outline', component: SocialPage },
      { title: 'Настройки', icon:'ios-settings-outline', component: PagePage },
      { title: 'Выход', icon:'ios-undo-outline', component: PagePage },
    ];

    this.rootPage = PagePage;
    //this.rootPage = SocialPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString('#BCBCBC');
      StatusBar.overlaysWebView(true);

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);
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
