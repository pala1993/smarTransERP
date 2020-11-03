import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private wowSubscription: NgwWowService) { }

  ngOnInit(): void {
    this.wowSubscription.init()
    
  }
  reset(){
    this.wowSubscription.init()
  }
}
