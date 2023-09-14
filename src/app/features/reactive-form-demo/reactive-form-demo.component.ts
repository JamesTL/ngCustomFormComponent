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



constructor(private readonly fb: FormBuilder){



}
  ngOnInit(){

    this.registrationForm = this.fb.group({
      firstName: this.fb.control(''),
      surName: this.fb.control(''),
      email: this.fb.control(''),
      password1: this.fb.control(''),
      password2: this.fb.control(''),
      
    })

  }

  /**
   * 
   * @returns generated FormGroup
   */
   createRegistrationFormControls():void {
    
    
      this.registrationForm.addControl('firstName',{});
      this.registrationForm.addControl('surname',{});
      this.registrationForm.addControl('email',{});
      this.registrationForm.addControl('password1',{});
      this.registrationForm.addControl('password2',{});


   }

   /**
    *  Handler for form submition
    */
   submitRegistrationForm():void {


   }

}
