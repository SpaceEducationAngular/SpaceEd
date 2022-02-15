import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})

export class LecturesComponent {
  posts:any;

  constructor(private http: HttpClient) { }

  getLectures(){
    this.http.get('http://localhost:3001/api/items/homePosts').subscribe((result)=>{
      this.posts = result
      console.log(this.posts,"HELOO")
    })
  }
}
