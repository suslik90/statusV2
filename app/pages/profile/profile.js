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

  ngAfterViewInit() {
    this.getElementForCircles();
  }


  constructor(nav) {
    this.nav = nav;
    this.loadingPage();
  }

  loadCircle(id) {

    var el = id; // get canvas

    var options = {
      percent: el.getAttribute('data-percent') || 25,
      size: el.getAttribute('data-size') || 220,
      lineWidth: el.getAttribute('data-line') || 15,
      rotate: el.getAttribute('data-rotate') || 0,
      className: el.getAttribute('data-class') || 'label-circle'
    }

    var canvas = document.createElement('canvas');
    var span = document.createElement('span');
    span.className = options.className;
    span.textContent = options.percent + '%';

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    el.appendChild(span);
    el.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    var img = ctx.getImageData(0, 0, 240, 240);
    ctx.putImageData(img, 0,0);
    var radius = (options.size - options.lineWidth) / 2;
    this.drawCircle(ctx, radius, '#38475C', options.lineWidth, 100 / 100);
    this.drawCircle(ctx, radius, '#50DA17', options.lineWidth, options.percent / 100);
  }

  drawCircle(ctx, radius, color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round'; // butt, round or square
    ctx.lineWidth = lineWidth
    ctx.stroke();
  }

  getElementForCircles() {
    let elem = document.querySelectorAll('.profile .chart-progress');
    for (let i = 0; i < elem.length; i++) {
      this.loadCircle(elem[i]);
    }
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
