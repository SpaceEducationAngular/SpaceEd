import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  datatype: any;
  key: string='0';
  user: any;
  id_category: string='0';

  constructor() {}
  changeKey(){
    localStorage.setItem('key',this.key)
    location.reload();
  }
  logout(){
    localStorage.removeItem("user")
    localStorage.setItem('key',this.key)
    localStorage.removeItem('profil')
    location.reload();
  }
  

  ngOnInit(): void {}
}
