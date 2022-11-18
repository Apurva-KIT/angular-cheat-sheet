import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '@auth/login/login-form/login-form.component';
import { RegistrationFormComponent } from '@auth/register/registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './page-under-construction/page-under-construction.component';

const routes: Routes = [
  { path: '', title: 'Dashboard', component: DashboardComponent },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: 'login', title: 'Login', component: LoginFormComponent },
  { path: 'register', title: 'Register', component: RegistrationFormComponent },
  {
    path: 'page-under-construction',
    component: PageUnderConstructionComponent,
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
