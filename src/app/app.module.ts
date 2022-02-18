import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LecturesComponent } from './lectures/lectures.component';
import { FeedComponent } from './feed/feed.component';
import { SignupComponent } from './signup/signup.component';
import { PostLectureComponent } from './post-lecture/post-lecture.component';
import { SearchComponent } from './search/search.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LecturesComponent,
    FeedComponent,
    SignupComponent,
    PostLectureComponent,
    SearchComponent,
    ProfilUserComponent,
    AddTypeComponent,
    AddTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}