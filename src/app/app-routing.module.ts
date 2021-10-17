import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShortenComponent } from './shorten/shorten.component';
import { ShowAllUrlComponent } from './show-all-url/show-all-url.component';

const routes: Routes = [
  {
  path:"login",
  component:LoginComponent
},
{
  path:"shorten",
  component: ShortenComponent
},
{
  path:"showURL",
  component: ShowAllUrlComponent
},
{
  path:"dashboard",
  component:DashboardComponent
},
{
  path:"register",
  component:RegisterComponent
},
{
  path:"",
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
