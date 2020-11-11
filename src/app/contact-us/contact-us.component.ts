import { Component, OnInit } from '@angular/core';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submitted = false;  
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  myContactForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.requestDemoForm();
  }
private requestDemoForm(){
  this.myContactForm = this.fb.group({
    FirstName: ['', Validators.required],
    LastName:['', Validators.required],
      email:['', Validators.required],
    phoneNumber: ['', Validators.required],
    company: ['', Validators.required],
     message:[''] 
  })
}
get f() { return this.myContactForm.controls; }
showData(){
  this.submitted = true;
  if (this.myContactForm.invalid) {
    return;
}

}
}
