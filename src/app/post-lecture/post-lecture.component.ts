import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-post-lecture',
  templateUrl: './post-lecture.component.html',
  styleUrls: ['./post-lecture.component.css']
})
export class PostLectureComponent implements OnInit {

  constructor(private router: Router) { }
  user:any;
  title: string = '';
  description: string = '';
  image_post: string = '';
  type:any;
  container:any=[];
  id_type:any;
  array:any=[];

  async getPostFormData(data: any) {
    data.preventDefault();
    if(this.id_type === "web development"){
      this.id_type = 1
    }if(this.id_type === "Math"){
      this.id_type = 2
    }if(this.id_type === "Science"){
      this.id_type = 3
    }if(this.id_type === "English"){
      this.id_type = 4
    }if(this.id_type === "Mobile development"){
      this.id_type = 5
    }if(this.id_type === "French"){
      this.id_type = 6
    }if(this.id_type === "Arabic"){
      this.id_type = 7
    }if(this.id_type === "Physics"){
      this.id_type = 8
    }if(this.id_type === "Technical science"){
      this.id_type = 9
    }if(this.id_type === "Philosophy"){
      this.id_type = 10
    }
    await axios
      .post('http://localhost:3001/api/items/posts', {
        id_type:this.id_type,
        title: this.title,
        description: this.description,
        image_post: this.image_post,
        id_user:this.user.id_user
      }).then((response) => {
        if (response.data) {
          localStorage.setItem(
            'user',
            JSON.stringify({
              title: this.title,
              description: this.description,
              image_post: this.image_post
            })
          )
          this.router.navigate(['/'])
        }
      })
  }

  postImage(event: any) {
    event.preventDefault();
    this.image_post = event.target.files[0]
    const formData = new FormData();
    formData.append("file", this.image_post)
    formData.append("upload_preset", "ehzqyvxt")
    formData.append("cloud_name", "brahamtahar")
    axios
      .post("http://api.cloudinary.com/v1_1/brahamtahar/upload", formData)
      .then((result) => {
        this.image_post = result.data.url
      })


  }
  ngOnInit(): void {
    axios
    .get('http://localhost:3001/api/items/type')
    .then((result)=>{
      this.array=result.data
      console.log(this.array, "array")
      this.type=this.container
      console.log(this.type,"container")
    })
    this.user = JSON.parse(localStorage.getItem("user")!)
  }
}


