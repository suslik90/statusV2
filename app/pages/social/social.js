import {ViewChild} from '@angular/core';
import {Page, NavController, Slides, Modal, ViewController} from 'ionic-angular';
import {Component} from '@angular/core';
import {Contacts} from 'ionic-native';
import {TransliterPage} from '../../service/transliter';
import {ModalChatDialogsPage} from '../../pages/modal-chat-dialogs/modal-chat-dialogs';
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
        return [[NavController],[ViewController],[TransliterPage]];
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
        });

    }

    constructor(nav, view,translit) {
        this.nav = nav;
        this.translit = translit;
        this.view = view;
        this.constacts = [];
        this.mySlideOptions = {
            initialSlide: 1
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

        this.dialogs = [
            {
                id:1,
                interlocutor:{
                    id:666,
                    displayName:'Иван Деревянко',
                    avatar: '',
                    shortName:'ID'
                },
                lastMessage:{
                    id: 9999,
                    text: 'Как мы будем завтра есть шаурму?',
                    date: '30.06.2016 13:56'
                },
                unreadMessage : 5
            },
            {
                id:2,
                interlocutor:{
                    id:667,
                    displayName:'Аванасий Метро',
                    avatar: '',
                    shortName:'AM'
                },
                lastMessage:{
                    id: 10000,
                    text: 'Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?',
                    date: '30.06.2016 10:01'
                },
                unreadMessage : 1
            },
            {
                id:3,
                interlocutor:{
                    id:667,
                    displayName:'Кай Метов',
                    avatar: '',
                    shortName:'KM'
                },
                lastMessage:{
                    id: 10001,
                    text: 'Position number 1. Отдыхаю Сам.',
                    date: '01.01.2016 10:01'
                },
                unreadMessage : 0
            }
        ];
    }

    onSlideChanged() {

        let currentIndex = this.slider.getActiveIndex();
        if (currentIndex !== 2)
            this.showNavbar = true;
        else
            this.showNavbar = false;

    }
    openDialog(params){
        let modal = Modal.create(ModalChatDialogsPage, params);
        this.nav.present(modal);
    }
}
