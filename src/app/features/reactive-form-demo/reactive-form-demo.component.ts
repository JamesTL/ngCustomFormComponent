import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {
  /**
   *  
   */
  registrationForm: FormGroup = new FormGroup({});

constructor(private readonly fb: FormBuilder){}
  ngOnInit(){
    this.registrationForm = this.fb.group({
      firstName: this.fb.control(''),
      surName: this.fb.control('Surname'),
      email: this.fb.control(''),
      password1: this.fb.control(''),
      password2: this.fb.control(''),
    })
  }

   /**
    *  Handler for form submition
    */
   submitRegistrationForm():void {


   }

}
