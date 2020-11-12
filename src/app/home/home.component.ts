import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
// import { Project, Path, Raster, view, Group, Point } from 'paper';
// import * as paper from 'paper';
// import $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Ele: any;
  secondEle: any;

  images = [
    {
      "img": "../../assets/images/ritu.jpg",
      "heading": "RITU Logistics",
      "subHeading": "Problem:",
      "text": "RITU Group, one of the largest transportation groups in Rajasthan, did not have a technical platform for their business. They wanted a way out for all their operations at one place to serve their customers with more efficiency.",
      "subHeading_2":"smarTrans Solution:",
      "solutionText":" smarTrans helped the RITU group with a Web application and a Mobile application. The Web application solves the problem of paperwork and it maintains a digital database, where all the documents, details of everyday work, invoices, insights, accounts and tyre management will be on fingertips of the user. On the other hand, mobile application is designed with two logins- user and driver, this eliminates the communication gap and helps tracking the shipments with effective interaction."
    },
    {
      "img": "../../assets/images/manyu_1.jpg",
      "heading": "MANYU LOGISTICS",
      "subHeading": "Problem:",
      "text": "With growing business Manyu Logistics challenges had grown exponentially to monitor day to day operations manually. The company wanted to go digital to manage their fleet and operations for business sustainability and continuity.",
      "subHeading_2":"smarTrans Solution:",
      "solutionText":" smarTrans brought digital solutions for Manyu logistics to monitor day to day operations with customer bookings, fleet location, drivers and operations to focus on the business growth with greater eCommerce and online sale opportunities. With the demand to mobilize data and on-demand insights these days, managing fleet, driver activity and trip details effectively in serving their customers 24/7 for business longevity has made a great deal for Manyu logistics."
    },
  ];


  count: number;
  currentImgUrl: string;
  heading:string;
  subHeading:string;
  subHeading_2:string;
  solutionText:any;
  text:string;
  constructor(private wowSubscription: NgwWowService) {
    // this.count = 0;
    this.setImgUrl(0);

  }


  ngOnInit(): void {
    this.wowSubscription.init()
    this.Ele = document.querySelector(".menu__item").classList.add('active');
    (document.querySelector('.app-case-study-tab__image') as HTMLElement).style.position = 'relative';
    (document.querySelector('.app-case-study-tab__image') as HTMLElement).style.overflow = 'hidden';
    (document.querySelector('.app-case-study-reveal') as HTMLElement).style.opacity = '0';
    (document.querySelector(".tab__images") as HTMLElement).style.position = "absolute";
    (document.querySelector(".tab__images") as HTMLElement).style.top = "0";
    (document.querySelector(".tab__images") as HTMLElement).style.left = "0";
    (document.querySelector(".tab__images") as HTMLElement).style.width = "100%";
    (document.querySelector(".tab__images") as HTMLElement).style.height = "100%";
    (document.querySelector(".tab__images") as HTMLElement).style.objectFit = "cover";
    (document.querySelector(".tab__images") as HTMLElement).style.objectPosition = ' center center';
    (document.querySelector(".tab__images") as HTMLElement).style.transitionDelay = '300ms';
    (document.querySelector(".tab__main_images") as HTMLElement).style.position = "absolute";
    (document.querySelector(".tab__main_images") as HTMLElement).style.top = "0";
    (document.querySelector(".tab__main_images") as HTMLElement).style.left = "0";
    (document.querySelector(".tab__main_images") as HTMLElement).style.width = "100%";
    (document.querySelector(".tab__main_images") as HTMLElement).style.height = "100%";
    (document.querySelector(".tab__main_images") as HTMLElement).style.objectFit = "cover";
    (document.querySelector(".tab__main_images") as HTMLElement).style.objectPosition = ' center center';
    setTimeout(function () {
      (document.querySelector(".tab__images") as HTMLElement).style.opacity = '0';
      (document.querySelector('.app-case-study-reveal') as HTMLElement).style.opacity = '1';
    }, 300);
   
    this.setImgUrl(0);
  }

  reset() {
    this.wowSubscription.init()
  }



  menu_one() {

    (document.querySelector('.app-case-study-reveal') as HTMLElement).style.opacity = '0';
    (document.querySelector('.tab__images') as HTMLElement).style.opacity = '1';
    (document.querySelector('.tab__images') as HTMLElement).style.zIndex = '1';
    setTimeout(function () {
      (document.querySelector('.app-case-study-reveal') as HTMLElement).style.opacity = '1';
      (document.querySelector('.tab__images') as HTMLElement).style.opacity = '0';
      (document.querySelector('.tab__images') as HTMLElement).style.zIndex = '0';
    }, 300);
    this.setImgUrl(0);
    this.Ele = document.querySelector(".menu__item").classList.add('active');
    this.secondEle = document.querySelector(".menu_item_two").classList.remove('active');
    (document.querySelector(".tab__main_images") as HTMLElement).style.position = "absolute";
    (document.querySelector(".tab__main_images") as HTMLElement).style.top = "0";
    (document.querySelector(".tab__main_images") as HTMLElement).style.left = "0";
    (document.querySelector(".tab__main_images") as HTMLElement).style.width = "100%";
    (document.querySelector(".tab__main_images") as HTMLElement).style.height = "100%";
    (document.querySelector(".tab__main_images") as HTMLElement).style.objectFit = "cover";
    (document.querySelector(".tab__main_images") as HTMLElement).style.objectPosition = ' center center';
    (document.querySelector(".tab__main_images") as HTMLElement).style.transitionDelay = '300ms'

  }
  menu_two() {
    (document.querySelector('.app-case-study-reveal') as HTMLElement).style.opacity = '0';
    setTimeout(function () {
      (document.querySelector('.app-case-study-reveal') as HTMLElement).style.opacity = '1';
    }, 300);
    this.setImgUrl(1);

    this.Ele = document.querySelector(".menu__item").classList.remove('active');
    this.secondEle = document.querySelector(".menu_item_two").classList.add('active');

  }
  setImgUrl(count): void {
    this.currentImgUrl = this.images[count].img;
    this.heading = this.images[count].heading;
    this.subHeading = this.images[count].subHeading;
    this.text = this.images[count].text;
    this.subHeading_2 = this.images[count].subHeading_2;
    this.solutionText = this.images[count].solutionText;
  }

}
