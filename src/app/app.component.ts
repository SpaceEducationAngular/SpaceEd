import { Component } from '@angular/core';
import {LecturesComponent} from './lectures/lectures.component'
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'spaceeducationang';
  users:any;

  constructor(private lectures:LecturesComponent, private login:LoginComponent){

    this.lectures.getLectures().subscribe(result=>{
      console.log(result,"HELOO")
    })

    this.login.getUser().subscribe(data=>{
      console.log(data)
    })
    // this.login.getUserFormData().subscribe(data=>{
    //   console.log(data)
    // })
  }


    
  




}
