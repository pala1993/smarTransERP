import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import{ Title, Meta} from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  windowScrolled: boolean;
 submitted= false;  
 faPhone=faPhone;
 faEnvelope=faEnvelope;
 myRequestDemoForm: FormGroup;
  constructor(private fb: FormBuilder,@Inject(DOCUMENT) private document: Document) { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
    } 
   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
}
  ngOnInit(): void {
    this.requestDemoForm();
  }
private requestDemoForm(){
  this.myRequestDemoForm = this.fb.group({
     message:[''] 
  })
}
get f() { return this.myRequestDemoForm.controls; }
showData(){
  this.submitted = true;
  if (this.myRequestDemoForm.invalid) {
    return;
}

}
}
