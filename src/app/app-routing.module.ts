import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalFormComponent } from './horizontal-form/horizontal-form.component';

const routes: Routes = [
  {
    path: 'horizontal-cmp',
    component: HorizontalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
