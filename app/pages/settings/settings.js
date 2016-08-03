import {Page, NavController, Slides, Modal, ViewController} from 'ionic-angular';
import { DatePicker } from 'ionic-native';

@Page({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  static get parameters() {
    return [[NavController],[ViewController]];
  }

  constructor(nav, view) {
    this.nav = nav;
    this.view = view;

    this.User = {};
    //this.User.interestsCounter = 0;

      this.interestsIsFull = false;
      this.User.interests=[];

    this.dateOfBirthday = 'Не указано';
    this.country = 'Россия';
    this.city = 'Сыктывкар';
  }
  openDataPicker(){
    DatePicker.show({
      date: new Date(),
      mode: 'date'
    }).then(
            date => {
             let year = date.getFullYear();
             let month = date.getMonth()+1;
             let monthStr = month < 10 ? '0'+month : month;
             let day = date.getDate();
             this.dateOfBirthday = day+'.'+monthStr+'.'+year;
            },
            err => {}
    );
  }
    addInterests(){
        if(this.User.interests.length < 3){
            let interes;
            switch (this.User.interests.length){
                case 0:
                    interes='Лажа';
                    break;
                case 1:
                    interes='Мармелад';
                    break;
                case 2:
                    interes='Сыр';
                    break;
            }

            let int = {};
            int.name = interes;
            this.User.interests.push(int);
            if(this.User.interests.length == 3) this.interestsIsFull = true;else this.interestsIsFull = false;

        }else{
            this.interestsIsFull = true;
        }
    }
    deleteInteres(ind){
        this.User.interests.splice(ind, 1);
        this.interestsIsFull = false;
    }

}
