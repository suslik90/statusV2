import {ViewChild} from '@angular/core';
import {Page, NavController, Slides, Modal, ViewController, Loading} from 'ionic-angular';
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
  templateUrl: 'build/pages/contacts/contacts.html',
  providers: [[TransliterPage]],
})
export class ContactsPage {
  static get parameters() {
    return [[NavController],[ViewController],[TransliterPage]];
  }

  onPageWillEnter() {
    this.showNavbar = true;
    this.constacts = [];
    let loading = Loading.create();
    this.nav.present(loading);
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
      loading.dismiss();
    });

  }

  constructor(nav, view,translit) {
    this.nav = nav;
    this.translit = translit;
    this.view = view;
  }
}
