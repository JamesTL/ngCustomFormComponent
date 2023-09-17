import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-first-name-input',
  templateUrl: './first-name-input.component.html',
  styleUrls: ['./first-name-input.component.scss'],
  providers:[
  
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FirstNameInputComponent),
        multi: true,
      }
    ]
})
export class FirstNameInputComponent implements ControlValueAccessor {

  value: string ="Original Value"
  changeFn: Function = (val: string)=>{}
  touchedFn: Function = ()=>{}

  myForm = new FormGroup({
     fName: new FormControl('')
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
