import { Component } from '@angular/core';
import {LecturesComponent} from './lectures/lectures.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'spaceeducationang';
  users:any;

  constructor(
    // private profil:ProfilUserComponent,
    private lectures:LecturesComponent, 
    // private login:LoginComponent,
    
    ){
this.lectures.getSignature()
    // this.lectures.getLectures()

    // this.login.getUser()
  
    
    // this.login.getUserFormData().subscribe(data=>{
    //   console.log(data)
    // })
  }

}
