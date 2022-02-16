import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import axios from 'axios';
@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) {  }
  firstname : string= ""
  lastName : string= ""
  email : string= ""
  password : string= ""
  dateOfBirth : number= 0
  phoneNumber : number= 0
  image : string= ""
  userInfo : object = {}
  
  
  
  async signUp(e:any){
    e.preventDefault()
    await axios
    .post("http://localhost:3001/api/items/user", {firstName : this.firstname , lastName : this.lastName , password :this.password , email : this.email , dob : this.dateOfBirth , phone: this.phoneNumber, image_user:this.image, id_category: 3})
    .then((response) => {
      if(response.data){
        localStorage.setItem("user", JSON.stringify({firstName : this.firstname , lastName : this.lastName , password :this.password , email : this.email , dob : this.dateOfBirth , phone: this.phoneNumber, image_user:this.image, id_category: 3}));
      this.router.navigate(["/"])
      }else{
        this.router.navigate(["/signup"])
      }
      
      // location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // getInputValue(firstName:string , lastName:string,email:string,password:string,dateOfBirth:number,phoneNumber:number,image:string ){
  //   this.firstname = firstName
  //   this.lastName = lastName
  //   this.email = email
  //   this.password = password
  //   this.dateOfBirth = dateOfBirth
  //   this.phoneNumber = phoneNumber
  //   this.image = image
  //   this.userInfo = {firstName : this.firstname , lastName : this.lastName , password :this.password , email : this.email , dob : this.dateOfBirth , phone: this.phoneNumber, image_user:this.image, id_category: 3}
  // }


  ngOnInit(): void {
  }

}
