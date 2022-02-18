import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
input =""
datatype=[]
DetectInput(event:any){
this.input=event.target.value
}


  constructor() { }

  ngOnInit(): void {
  }

}
