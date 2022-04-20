import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [



  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},


  {path:'about-us',component:AboutUsComponent},
  {path:'service',component:ServicesComponent},
  {path:'contact',component:ContactComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
