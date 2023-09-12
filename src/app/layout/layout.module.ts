import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const componentList= [AppHeaderComponent]

@NgModule({
  declarations: componentList,
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: componentList
})
export class LayoutModule { }
