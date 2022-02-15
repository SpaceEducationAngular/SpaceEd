import { Component, OnInit } from '@angular/core';
declare function greet():void 
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor() { 
    greet()
  }

  ngOnInit(): void {
  }

}
