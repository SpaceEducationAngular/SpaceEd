import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css'],
})
export class AddTypeComponent implements OnInit {
  title: any;
  description: any;
  datatype: any;
  user: any;
  id_type: any;
  label_type: any;
  image_type: any;
  constructor() {}
  add() {
    var option = {
      label_type: this.label_type,
      image_type: this.image_type,
    };
    console.log(option);
    axios
      .post('http://localhost:3001/api/items/type', option)
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  ngOnInit(): void {
    axios.get('http://localhost:3001/api/items/type').then((response) => {
      this.datatype = response.data;
      console.log(this.datatype);
      // localStorage.setItem("type", JSON.stringify(this.type));
    });
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
}
