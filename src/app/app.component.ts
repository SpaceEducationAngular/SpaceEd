import { Component } from '@angular/core';
import {LecturesComponent} from './lectures/lectures.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'spaceeducationang';
  users:any;

  constructor(
    private lectures:LecturesComponent, 
    private login:LoginComponent,
    private signup : SignupComponent,){

    this.lectures.getLectures()

    this.login.getUser()
    
    // this.login.getUserFormData().subscribe(data=>{
    //   console.log(data)
    // })
  }

}
