import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1WrapperComponent } from './page1-wrapper/page1-wrapper.component';

const routes: Routes = [
  {path: '', component: Page1WrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
