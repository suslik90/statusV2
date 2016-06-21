import {ViewChild} from '@angular/core';
import {Page, NavController, Content} from 'ionic-angular';

/*
  Generated class for the RewardsLinePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/rewards-line/rewards-line.html',
  queries: {
    page: new ViewChild(Content)
  },
})
export class RewardsLinePage {
  static get parameters() {
    return [[NavController]];
  }
  //ngAfterViewInit() {
  //  this.scrollHandler = this.page.elementRef.nativeElement.children[0];//.children[0];
  //  this.scrollHandler.addEventListener("scroll",(e)=>{
  //    var delta = this.page.getScrollTop();
  //    //var width = Number(Math.round(100 / this.items.length));
  //    if (delta >= 0) {
  //      this.maxScroll = delta;
  //      this.progressWidth = (this.maxScroll / (this.rewards.length * 200)) * 100;
  //    }
  //
  //  });
  //}
  constructor(nav) {
    this.nav = nav;
    this.progressWidth = 0;
    this.maxScroll=0;
    this.loadPage();
  }
  loadPage(){
    this.rewards = [
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
        id: 2,
        name: "О здоровье",
        using: false,
        img: "img/milk.jpeg",
        category: {text: 'Молоко из под ...', color: 'white'},
        color_line: 'darkorange',
        time_to_end: '2:05:45'
      },
      {
        id: 3,
        name: "Для девайса",
        using: false,
        img: "img/case.png",
        category: {text: 'Защита Iphone', color: 'white'},
        color_line: 'blue',
        time_to_end: '00:10:01'
      },
      {
        id: 4,
        name: "Мода мода мода",
        using: false,
        img: "img/nike.jpg",
        category: {text: 'Кроссовки Nike', color: 'white'},
        color_line: 'indigo',
        time_to_end: '12:00:00'
      },
      {
        id: 5,
        name: "О здоровье",
        using: false,
        img: "img/milk.jpeg",
        category: {text: 'Молоко из под ...', color: 'white'},
        color_line: 'darkorange',
        time_to_end: '2:05:45'
      },
      {
        id: 6,
        name: "Для девайса",
        using: false,
        img: "img/case.png",
        category: {text: 'Защита Iphone', color: 'white'},
        color_line: 'blue',
        time_to_end: '00:10:01'
      },
      {
        id: 7,
        name: "Мода мода мода",
        using: false,
        img: "img/nike.jpg",
        category: {text: 'Кроссовки Nike', color: 'white'},
        color_line: 'indigo',
        time_to_end: '12:00:00'
      },
      {
        id: 8,
        name: "О здоровье",
        using: false,
        img: "img/milk.jpeg",
        category: {text: 'Молоко из под ...', color: 'white'},
        color_line: 'darkorange',
        time_to_end: '2:05:45'
      },
      {
        id: 9,
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
