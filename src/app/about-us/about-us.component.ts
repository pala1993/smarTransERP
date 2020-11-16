import { Component, OnInit, HostListener } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  public innerWidth: any;
  constructor(private wowService: NgwWowService) { }

 
  ngOnInit(): void {
  
    this.wowService.init();
  }
  @HostListener('window:load', ['$event'])
  onLoad(event) {
    this.innerWidth = window.innerWidth;  
    if (this.innerWidth == 1680) {
      document.querySelector('.management__about').classList.add('app-add-responsive');
    } else if(this.innerWidth == 1600){
      document.querySelector('.management__about').classList.add('app-add-responsive');
    } else if (this.innerWidth == 1440) {
      document.querySelector('.exceptional__app').classList.add('app-add__exceptional__app');
    } else if (this.innerWidth == 1400) {
      document.querySelector('.exceptional__app').classList.add('app-add__exceptional__app');
    } else if (this.innerWidth == 1366) {
      document.querySelector('.exceptional__app').classList.add('app-add__exceptional__app');
    } else if (this.innerWidth == 1360) {
      document.querySelector('.exceptional__app').classList.add('app-add__exceptional__app');
    }
  }


}
