import { Component } from '@angular/core';
import {LecturesComponent} from './lectures/lectures.component'
import { LoginComponent } from './login/login.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';

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
    // private lectures:LecturesComponent, 
    private login:LoginComponent,
    
    ){

    // this.lectures.getLectures()

    // this.login.getUser()
  
    
    // this.login.getUserFormData().subscribe(data=>{
    //   console.log(data)
    // })
  }

}
