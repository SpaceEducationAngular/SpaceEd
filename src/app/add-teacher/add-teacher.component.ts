import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
users : any
dataCategory : any
id_category : any
id_user: any
user: any
  constructor() { }
  add() {
    var option = {
      id_category: this.id_category,
      id_user: this.id_user,
    };
    console.log(option);
    axios
      .put(`http://localhost:3001/api/items/user/`+this.id_user, option)
      .then((response) => {
        location.reload();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  ngOnInit(): void {
    this.user= JSON.parse(localStorage.getItem("user")!)
    axios.get("http://localhost:3001/api/items/userall").then((response) => {
      this.users = response.data;
      console.log(this.users);
      // localStorage.setItem("type", JSON.stringify(this.type));
    });
    axios.get("http://localhost:3001/api/items/category").then((res) => {
      this.dataCategory = res.data;
      console.log(this.dataCategory);
    });
  }
}