import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormDemoComponent } from './features/reactive-form-demo/reactive-form-demo.component';

const routes: Routes = [

  { path:'', component:ReactiveFormDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

