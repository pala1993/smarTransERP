import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
  
    this.wowService.init();
  }

}
