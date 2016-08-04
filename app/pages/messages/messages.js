import {ViewChild} from '@angular/core';
import {Page, NavController, Slides, Modal, ViewController} from 'ionic-angular';
import {Component} from '@angular/core';
import {Contacts} from 'ionic-native';
import {TransliterPage} from '../../service/transliter';
import {ModalChatDialogsPage} from '../../pages/modal-chat-dialogs/modal-chat-dialogs';

@Page({
  templateUrl: 'build/pages/messages/messages.html',
  providers: [[TransliterPage]],
})
export class MessagesPage {
  static get parameters() {
    return [[NavController],[ViewController],[TransliterPage]];
  }
  onPageWillEnter(){
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

  constructor(nav, view,translit) {
    this.nav = nav;
    this.translit = translit;
    this.view = view;
  }
  openDialog(params){
    let modal = Modal.create(ModalChatDialogsPage, params);
    this.nav.present(modal);
  }
}
