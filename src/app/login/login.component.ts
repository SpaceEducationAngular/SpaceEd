import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;

  
  constructor(private http:HttpClient) { }

  getUserFormData(data:any){
    this.http.post('http://localhost:3001/api/items/userlogin',data).subscribe(result=>{
      console.log(result)
    })
  }

  getUser(){
    this.http.get('http://localhost:3001/api/items/userall');
  }

  

  ngOnInit(): void { }

}


