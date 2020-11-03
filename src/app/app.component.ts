import { Component, OnInit, HostListener } from '@angular/core';

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
  
  ngOnInit(): void {
    const body = document. getElementsByTagName('body')[0];
    body. classList. add('page-template-home');
    body. classList. add('banner-has-bg');
    const header = document. getElementsByTagName('header')[0];
    header.classList.add("page-templete-body__notscroll")
    
  }
  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event) {
    const header = document. getElementsByTagName('header')[0];
    console.log(document.body.scrollTop + document.documentElement.scrollTop);
    if (document.body.scrollTop > 100 ||     
      document.documentElement.scrollTop > 100) {
        header.classList.add("page-templete-body__scroll")
        header.classList.remove("page-templete-body__notscroll")
      }
      else{
        header.classList.remove("page-templete-body__scroll")
        header.classList.remove("page-templete-body__notscroll")
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
