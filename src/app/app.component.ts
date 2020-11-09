import { Component, OnInit, HostListener } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'smarTransERP';
  // top:any;
  // left:any;
  // expand=false;
  lastScrollTop = 0;
  scrollDirection:any;
  ngOnInit(): void {
    const body = document. getElementsByTagName('body')[0];
    body. classList. add('page-template-home');
    body. classList. add('banner-has-bg');
    const header = document. getElementsByTagName('header')[0];
    header.classList.add("page-templete-body__notscroll")
    
  }
  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event) {
this.scrollDirection = 'Down';
const st = document.documentElement.scrollTop;
if (st > this.lastScrollTop){
  this.scrollDirection = 'down';

} else {
  this.scrollDirection = 'up';

}
this.lastScrollTop = st;

  const header = document. getElementsByTagName('header')[0];
  
   if(document.documentElement.scrollTop >=3000){
      (document.querySelector('.app-fixed_button') as HTMLElement).style.left = "-350px";
   }else{
    (document.querySelector('.app-fixed_button') as HTMLElement).style.left = "65px";
   }
  
  if (document.body.scrollTop > 0 ||     
    document.documentElement.scrollTop > 0) {

      header.classList.add("page-templete-body__scroll")
      header.classList.remove("page-templete-body__notscroll");
      document.body.classList.add('page-templete-body__has_scroll');

        if (this.scrollDirection == 'up') {
            header.classList.add("page-templete-body__OnScroll");
            header.classList.remove("page-templete-body__scroll");
        } else {
          header.classList.remove("page-templete-body__OnScroll");
          header.classList.add("page-templete-body__scroll");
        }
       
    }
    else{
      header.classList.remove("page-templete-body__scroll")
      header.classList.remove("page-templete-body__notscroll")
      header.classList.remove("page-templete-body__OnScroll");
    }

    
  }
  
//   @HostListener('document:click', ['$event'])
//   onClick($event) {
//      this.expand=true;
//      setTimeout(() => {
//       this.expand=false;
//      }, 500)
//  }

// @HostListener('document:mousemove', ['$event'])
//   onMousemove($event) {
//     this.top=($event.pageY - 10)+ "px";
//     this.left= ($event.pageX - 10)+ "px";
//  }
//  @HostListener('document:mouseleave', ['$event'])
//  onMouseleave($event) {
   
//    this.top=($event.pageY - 22)+ "px";
//    this.left= ($event.pageX - 22)+ "px";
// }
}
