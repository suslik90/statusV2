import {ViewChild} from '@angular/core';
import {Page, NavController, Slides} from 'ionic-angular';
import {Component} from '@angular/core';
import {Contacts} from 'ionic-native';
import {TransliterPage} from '../../service/transliter';
/*
 Generated class for the SocialPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/social/social.html',
    providers: [[TransliterPage]],
    queries: {
        slider: new ViewChild('mySlider'),
    },
})
export class SocialPage {
    static get parameters() {
        return [[NavController],[TransliterPage]];
    }

    onPageWillEnter() {
        this.showNavbar = true;
        this.constacts = [];
        Contacts.find(['*']).then((contacts) => {
            for (let key in contacts) {
                let cont = contacts[key];
                if (cont.phoneNumbers == null)
                    continue;
                else {
                    cont.avatar='';
                    let trans = this.translit.getNameForAvatar(cont.displayName);
                    cont.shortName = trans;
                    if (cont.photos !== null) {
                        let photo = cont.photos[0];
                        cont.avatar = photo.value;
                    }
                    this.constacts.push(cont);
                }

            }
        })
    }

    constructor(nav, translit) {
        this.nav = nav;
        this.translit = translit;
        this.constacts = [];
        this.mySlideOptions = {
            initialSlide: 2
        };
        //this.showNavbar = false;

        this.topContacts = [
            {id: 1, name: 'Иван Деревянко', short: 'ID', avatar: 'build/img/ava3.jpg'},
            {id: 2, name: 'Павел Петров', short: 'PP', avatar: ''},
        ];
        this.userWallCards = [
            {
                id: 1,
                userFrom: {id: 1, name: 'Иван Долгополов', short: 'ID', avatar: 'build/img/ava3.jpg'},
                userTo: {id: 2, name: 'Павел Петров', short: 'PP', avatar: ''},
                countLike: 12
            },
            {
                id: 2,
                userFrom: {id: 2, name: 'Павел Петров', short: 'PP', avatar: ''},
                userTo: {id: 1, name: 'Иван Долгополов', short: 'ID', avatar: 'build/img/ava3.jpg'},
                countLike: 1
            },
        ];
    }

    onSlideChanged() {

        let currentIndex = this.slider.getActiveIndex();
        if (currentIndex !== 2)
            this.showNavbar = true;
        else
            this.showNavbar = false;

    }
}
