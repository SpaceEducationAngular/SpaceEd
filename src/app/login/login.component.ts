import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';
@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;

  
  constructor(private http:HttpClient ,private router: Router) { }

  async getUserFormData(data:any){
    await axios.post('http://localhost:3001/api/items/userlogin',data).then(result=>{
      console.log(result)
      if(result.data){
        this.router.navigate(['/']);
      }else{
        this.router.navigate(['/login']);
      }
    })
  }

  getUser(){
    this.http.get('http://localhost:3001/api/items/userall');
  }

  

  ngOnInit(): void { }

}


