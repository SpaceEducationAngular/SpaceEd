import { Component } from '@angular/core';
import { LecturesComponent } from './lectures/lectures.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spaceeducationang';
  users: any;

  constructor(private login: LoginComponent) {}
}
