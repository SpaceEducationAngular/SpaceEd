import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import axios  from 'axios';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
firstName:any
lastName:any
email:any
phone:any
dob:any
image_user:any
id:any
user:any
userName:string=""
data:any

  constructor() { }
  
  async getProfileData(){
    await axios
    .get("http://localhost:3001/api/items/user/26")
    .then((result)=>{
      this.user = result.data[0]
       this.userName = this.user.firstName + this.user.lastName
      console.log(this.user)
    })
  }

  ngOnInit(): void {
    
  }

}
