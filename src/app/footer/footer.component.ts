import { Component, OnInit } from '@angular/core';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import{ Title, Meta} from '@angular/platform-browser';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 anio: number = new Date().getFullYear();
 submitted= false;  
 faPhone=faPhone;
 faEnvelope=faEnvelope;
 myRequestDemoForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.requestDemoForm();
  }
private requestDemoForm(){
  this.myRequestDemoForm = this.fb.group({
 FullName:['', Validators.required],
      email:['', Validators.required],
      contactUs:['contact-us'],
      phoneNumber:['', Validators.required],
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
