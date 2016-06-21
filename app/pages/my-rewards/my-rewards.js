import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the MyRewardsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/my-rewards/my-rewards.html',
})
export class MyRewardsPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.loadPage();
  }
  loadPage(){
    this.rewardsFavorites = [
      {
        id: 1,
        name: "Мода мода мода",
        using: false,
        img: "img/nike.jpg",
        category: {text: 'Кроссовки Nike', color: 'white'},
        color_line: 'indigo',
        time_to_end: '12:00:00'
      },
      {
        id: 3,
        name: "Для девайса",
        using: false,
        img: "img/case.png",
        category: {text: 'Защита Iphone', color: 'white'},
        color_line: 'blue',
        time_to_end: '00:10:01'
      }
    ];

  }
}
