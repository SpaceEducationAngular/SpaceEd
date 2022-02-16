import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor(private http:HttpClient) { }

  path : String = "/signup"

  loginUserFormData(data:any){
    data["id_category"]=3
    this.http.post('http://localhost:3001/api/items/user',data)
    .subscribe(
      result=>{
      this.path="/"
    })
  }
  
  ngOnInit(): void {
  }
}