import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FirstNameInputComponent } from '../first-name-input/first-name-input.component';

@Component({
  selector: 'app-email-form-input',
  templateUrl: './email-form-input.component.html',
  styleUrls: ['./email-form-input.component.scss'],
  providers:[
  
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailFormInputComponent ),
      multi: true,
    }
  ]
})
export class EmailFormInputComponent implements ControlValueAccessor {


  value: string ="Original Value"
  changeFn: Function = (val: string)=>{}
  touchedFn: Function = ()=>{}

  myForm = new FormGroup({
     emailLocal: new FormControl('')
  });

  writeValue(val: any): void {
    this.value= val
    
  }
  registerOnChange(fn: any): void {
    this.changeFn = fn;
    
  }
  registerOnTouched(fn: any): void {
    this.touchedFn = fn
    
  }

  update(newVal: string){
   this.value = newVal;
    this.changeFn();
  }

  getValue(event: Event): string {
    this.changeFn((event.target as HTMLInputElement).value);
    this.touchedFn();
    return (event.target as HTMLInputElement).value;
  }

}
