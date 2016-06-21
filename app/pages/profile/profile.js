import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.loadingPage();
  }
  loadingPage(){
    this.profileRewards = [
      {
        id: 1,
        orgName: 'Азбука Вкуса',
        orgLogo: 'img/av.jpg',
        orgBg: 'img/cezar.jpg',
        cardChartPercent: 65,
        dopItems: [
          {id: 1, avatar: 'img/ava1.jpg', description: 'Вино столовое', descriptionPercent: 15}]
      },
      {
        id: 2,
        orgName: 'Re Store',
        orgLogo: 'img/re-store_logo.png',
        orgBg: 'img/re-store_bg.jpg',
        cardChartPercent: 25,
        dopItems: [
          {id: 1, avatar: 'img/ava2.jpg', description: 'Приведи друга', descriptionPercent: 50},
          {id: 2, avatar: 'img/ava3.jpg', description: 'Iphone 8G', descriptionPercent: 18}]
      },
    ];
  }
}
