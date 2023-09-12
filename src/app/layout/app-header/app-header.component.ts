import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent{

 appTitle: string = "Help a Friend"
 @Input()
 headerTitle: string = "Title";


  constructor() {}



}