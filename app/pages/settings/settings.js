import {Page, NavController, Slides, Modal, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  static get parameters() {
    return [[NavController],[ViewController]];
  }

  constructor(nav, view) {
    this.nav = nav;
    this.view = view;;
  }
}
