import { Component } from '@angular/core';
import {LecturesComponent} from './lectures/lectures.component'
import { LoginComponent } from './login/login.component';
import { PostLectureComponent } from './post-lecture/post-lecture.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'spaceeducationang';
  users:any;

  constructor(private lectures:LecturesComponent, private login:LoginComponent, private post: PostLectureComponent){

    this.lectures.getLectures().subscribe(result=>{
      console.log(result,"HELOO")
    })

    this.login.getUser().subscribe(data=>{
      console.log(data)
    })

    // this.post.getPostFormData().subscribe(store=>{
    //   console.log(store, "hooow!!!!");
    // })

    // this.login.getUserFormData().subscribe(data=>{
    //   console.log(data)
    // })
  }


}