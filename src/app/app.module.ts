import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from '../signup/signup/signup.component';
import { SearchComponent } from '../search/search.component';
import { ProfilUserComponent } from '../profil-user/profil-user.component';
import { PostLectureComponent } from '../post-lecture/post-lecture.component';
import { PaymentComponent } from '../payment/payment.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { LecturesComponent } from '../lectures/lectures.component';
import { FeedComponent } from '../feed/feed.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BookingComponent } from '../booking/booking.component';
import { AddTypeComponent } from '../add-type/add-type.component';
import { AddTeacherComponent } from '../add-teacher/add-teacher.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:},
      {path:'',component:},
      {path:'',component:},
      {path:'',component:},
      {path:'',component:},
      {path:'',component:},
      {path:'',component:},
      {path:'',component:},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
