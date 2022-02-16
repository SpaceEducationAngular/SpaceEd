import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======


>>>>>>> deebc6bcca667cdc85562aa0bea757248b782a77
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