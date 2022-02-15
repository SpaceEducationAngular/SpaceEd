import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { PostLectureComponent } from './post-lecture/post-lecture.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LecturesComponent } from './lectures/lectures.component';
import { FeedComponent } from './feed/feed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
      {path:'signup',component:SignupComponent},
      {path:'search',component:SearchComponent},
      {path:'profil-user',component:ProfilUserComponent},
      {path:'post-lecture',component:PostLectureComponent},
      {path:'payment',component:PaymentComponent},
      {path:'navbar',component:NavbarComponent},
      {path:'login',component:LoginComponent},
      {path:'lectures',component:LecturesComponent},
      {path:'feed',component:FeedComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'booking',component:BookingComponent},
      {path:'add-type',component:AddTypeComponent},
      {path:'add-teacher',component:AddTeacherComponent},
      {path:'about-us',component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  SignupComponent,
  SearchComponent,
  ProfilUserComponent,
  PostLectureComponent,
  PaymentComponent,
  NavbarComponent,
  LoginComponent,
  LecturesComponent,
  FeedComponent,
  DashboardComponent,
  BookingComponent,
  AddTypeComponent,
  AddTeacherComponent,
  AboutUsComponent
]