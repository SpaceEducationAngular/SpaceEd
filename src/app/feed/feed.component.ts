import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts:any;
  image_post:any;

  constructor(private http: HttpClient) { }

  getLectures(){
    this.http.get('http://localhost:3001/api/items/homePosts').subscribe(result=>{
      this.posts = result
      this.image_post = result
      console.log(this.posts,"HELOO")
    })
  };

  ngOnInit(): void {
  }

}


