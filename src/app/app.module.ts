import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormDemoComponent } from './features/reactive-form-demo/reactive-form-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstNameInputComponent } from './components/first-name-input/first-name-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormDemoComponent,
    FirstNameInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
