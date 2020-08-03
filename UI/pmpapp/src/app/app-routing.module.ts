import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './user/singin/singin.component';
import { SignupComponent } from './user/signup/signup.component';
import { RecoverPasswordComponent } from './user/recover-password/recover-password.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path: "sign-in", component: SinginComponent },
  { path: "sign-up", component: SignupComponent },
  { path: "recover-password", component: RecoverPasswordComponent},
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
