import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {canActivate, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {AppointmentComponent} from "./appointment/appointment.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent  },
  { path:'appointment', component: AppointmentComponent  },
  { path:  'home', component:HomeComponent,
    ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
