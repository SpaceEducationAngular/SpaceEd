import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-post-lecture',
  templateUrl: './post-lecture.component.html',
  styleUrls: ['./post-lecture.component.css']
})
export class PostLectureComponent implements OnInit{
  post: any;
  constructor(private http:HttpClient) { }
  
  getPostFormData(data:any){
    this.http.post('http://localhost:3001/api/items/posts', data).subscribe(result =>{
      console.log(result);
    })
  }


  ngOnInit(): void {
      
  }
}
