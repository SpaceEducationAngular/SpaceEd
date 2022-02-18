import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  id_user: any
  id_category: any
  users: any
  dataCategory: any
  user:any
  booked:any
  constructor() { }
  add() {
    var option = {
      id_category: this.id_category,
      // id_user: this.id_user,
    };
    console.log(option);
    axios
      .put(`http://localhost:3001/api/items/user/${this.id_user}`, option)
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

    axios.get(`http://localhost:3001/api/items/booking/${this.user.id_user}`).then((response) => {
      this.booked = response.data;
      console.log(this.booked);
      // localStorage.setItem("type", JSON.stringify(this.type));
    });
    axios.get("http://localhost:3001/api/items/category").then((res) => {
      this.dataCategory = res.data;
      console.log(this.dataCategory);
    });
  }

}
