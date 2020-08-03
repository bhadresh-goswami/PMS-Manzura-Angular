import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './user/singin/singin.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  { path: "sign-in", component: SinginComponent },
  { path: "sign-up", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
