import {ViewChild} from '@angular/core';
import {App, Platform, Page, NavController, Slides} from 'ionic-angular';
import {Content} from 'ionic-angular';
//import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
//import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';


/*
 Generated class for the PagePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/page/page.html',
    queries: {
        page: new ViewChild(Content),
        slider: new ViewChild('mySlider'),
    },
    //directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class PagePage {
    static get parameters() {
        return [[NavController]];
    }

    ngAfterViewInit() {
        this.scrollHandler = this.page.elementRef.nativeElement.children[0];//.children[0];
        this.scrollHandler.addEventListener("scroll", (e)=> {
            var delta = this.page.getScrollTop();
            //var width = Number(Math.round(100 / this.items.length));
            if (delta >= 0) {
                this.maxScroll = delta;
                this.progressWidth = (this.maxScroll / (this.rewards.length * 150)) * 100;
                //this.progressWidth = 100/this.rewards.length;
            }

        });
        this.getElementForCircles();

    }

    constructor(nav) {
        this.nav = nav;
        this.items = [];
        this.progressWidth = 0;
        this.maxScroll = 0;
        this.showProgress = true;

        this.mySlideOptions = {
            initialSlide: 1
        };

        this.loadingPage();


    }

    onSlideChanged() {

        let currentIndex = this.slider.getActiveIndex();
        if (currentIndex !== 1)
            this.showProgress = false;
        else
            this.showProgress = true;

    }

    loadCircle(id) {
        //var el = document.getElementById('graph'); // get canvas
        //var el = document.getElementById(id); // get canvas
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
        let elem = document.querySelectorAll('.page .chart-progress');
        for (let i = 0; i < elem.length; i++) {
            this.loadCircle(elem[i]);
        }
    }

    /* PROFILE */
    loadingPage() {
        this.profileRewards = [
            {
                id: 1,
                orgName: 'Азбука Вкуса',
                orgLogo: 'img/av.jpg',
                orgBg: 'img/cezar.jpg',
                cardChartPercent: '65',
                dopItems: [
                    {id: 1, avatar: 'img/ava1.jpg', description: 'Вино столовое', descriptionPercent: 15}]
            },
            {
                id: 2,
                orgName: 'Re Store',
                orgLogo: 'img/re-store_logo.png',
                orgBg: 'img/re-store_bg.jpg',
                cardChartPercent: '25',
                dopItems: [
                    {id: 1, avatar: 'img/ava2.jpg', description: 'Приведи друга', descriptionPercent: 50},
                    {id: 2, avatar: 'img/ava3.jpg', description: 'Iphone 8G', descriptionPercent: 18}]
            },
        ];

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
            }
        ];

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

        this.slideBoxes = [
            {class:'profile',type:0,page:this.profileRewards},
            {class:'rewards-line',type:1, page:this.rewards},
            {class:'my-rewards',type:2, page:this.rewardsFavorites},
        ];
    }


    /***********/

}
