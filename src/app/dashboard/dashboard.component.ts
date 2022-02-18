import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: any
  description: any
  datatype= JSON.parse(localStorage.getItem('type')!)
  id_type: any
  url:string='http://localhost:3001/api/items/getdata'
  constructor() { }
  change(event:any) {
    this.title = event.target.value
    console.log(this.datatype)
  }
  change1(event:any) {
    this.id_type = event.target.value
    console.log(this.id_type)
  }
  change2(event:any) {
    this.description = event.target.value
    console.log(this.description)
  }
  ngOnInit(): void {
  }

}
