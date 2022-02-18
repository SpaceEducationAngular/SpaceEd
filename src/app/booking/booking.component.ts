import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booked: any;
  dataCategory: any;
  users: any
  id_user: string ='';
  id_category: string= '';
  user:any //it must be changed to the line commented bellow
  // user: JSON.parse(localStorage.getItem("user")),

  constructor() { }

  async change(event: any){
    [event.target.name] = event.target.value
    console.log(event.target.name);
  }

  add() {
    var option = {
      id_category: this.id_category,
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