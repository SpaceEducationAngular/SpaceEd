import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  datatype: any;
  user: any;
  id_category = 0;
  id: any;

  constructor(private router: Router) {}

  changeKey() {
    this.id = JSON.stringify(this.id_category);
    localStorage.setItem('key', this.id);
    // location.reload();
    this.router.navigate(['/profile-user']);
  }

  logout() {
    this.id_category = 0;
    this.id = JSON.stringify(this.id_category);
    localStorage.removeItem('user');
    localStorage.setItem('key', this.id);
    localStorage.removeItem('profil');
    // location.reload();
  }

  ngOnInit(): void {
    axios.get('http://localhost:3001/api/items/type').then((response) => {
      this.datatype = response.data;
      console.log(this.datatype);
    });
    this.user = JSON.parse(localStorage.getItem('user')!);
    console.log(this.user);
    if (this.user !== null) {
      this.id_category = this.user.id_category;
    }
  }
}
