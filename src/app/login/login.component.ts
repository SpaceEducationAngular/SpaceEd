import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import axios from 'axios';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any;
  email: string = '';
  password: string = '';

  constructor( private router: Router) {}

  async getUser() {
    await axios
      .get('http://localhost:3001/api/items/userall')
      .then((result) => {
        console.log(result);
      });
  }

  add() {
    var option = {
      email: this.email,
      password: this.password,
    };
    console.log(option);
    axios
      .post('http://localhost:3001/api/items/userlogin', option)
      .then((response) => {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.data[0]));

        // location.reload();
        if (response.data) {
          this.router.navigate(['/']);
          setTimeout(() => location.reload(), 1);
        } else {
          this.router.navigate(['/login']);
        }
      });
  }

  ngOnInit(): void {}
}
