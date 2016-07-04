import {Page, Content, NavController, ViewController, NavParams} from 'ionic-angular';
import {ViewChild} from '@angular/core';

/*
  Generated class for the ModalChatDialogsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/modal-chat-dialogs/modal-chat-dialogs.html',
  queries: {
    content: new ViewChild(Content)
  }
})
export class ModalChatDialogsPage {
  static get parameters() {
    return [[NavController],[ViewController], [NavParams]];
  }

  constructor(nav, view, params) {
    this.nav = nav;
    this.params = params.data;
    this.view = view;
    this.Message = [];
    this.message = '';
    this.Message.push({from:1, text:this.params.lastMessage.text});
    this.interlocutor = this.params.interlocutor;
  }
  dismiss() {
    this.view.dismiss(this.returnData);
  }
  addMessage(message){
    let m = {from:0, text:message};
    this.Message.push(m);
    this.message = '';
    setTimeout(()=>{
      this.content.scrollToBottom(100);
    },100);
  }
}
