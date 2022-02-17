import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent {
  posts:any
  id_user: any
  id_category: any
  users:any
  dataCategory:any
  userInfo:any

  constructor(private http: HttpClient) { }
  async getLectures(){
    this.http.get('http://localhost:3001/api/items/homePosts').subscribe((result)=>{
      this.posts = result
      
       this.userInfo= JSON.parse(localStorage.getItem("user")!)
      
      console.log(this.posts,"HELOO")
    })
  

    await axios.get(`http://localhost:3001/api/items/profilPosts/${this.userInfo.id_user}`).then((response) => {
      this.posts = response.data;
      console.log(this.posts);
      // localStorage.setItem("type", JSON.stringify(this.type));
    });
    await axios.get("http://localhost:3001/api/items/category").then((res) => {
      this.dataCategory = res.data;
      console.log(this.dataCategory);
    });
  }
  change(event:any) {
    this.id_user= event.target.value;
    this.id_category = event.target.value
  }


  async add() {
    var option = {
      id_category: this.id_category,
      // id_user: this.id_user,
    };
    console.log(option);
    await axios
      .put(`http://localhost:3001/api/items/user/${this.id_user}`, option)
      .then((response) => {
        location.reload();
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
}