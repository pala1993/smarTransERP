import { Component, OnInit } from '@angular/core';
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
  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
  
    this.wowService.init();
  }

}
