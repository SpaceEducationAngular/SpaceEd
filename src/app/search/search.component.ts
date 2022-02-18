import { Component, OnInit } from '@angular/core';
import  axios  from 'axios';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {}
  user:any;
  type:any;
  container:any;
  id_type:any;
  array:any;
  posts:any;
  allposts:any;
  index:any;
  value:any;
  profil:any;
  input:any;
  datatype:any;

  DetectInput(event:any){
    this.input=event.target.value
    }
  
  search() {
     
    var newArray = []
    this.posts = []
    for (var i = 0; i < this.allposts.length; i++) {
      if (this.allposts[i].firstName.includes(this.value) || this.allposts[i].label_type.includes(this.value) || this.allposts[i].lastName.includes(this.value)) {
        console.log(this.allposts[i]) 
        newArray.push(this.allposts[i])
      }
    }
    this.posts = newArray;
  }

  ngOnInit(): void {
    axios
    .get('http://localhost:3001/api/items/type')
    .then((result)=>{
      this.datatype=result.data
      console.log(this.datatype, "array")
      this.type=this.container
      console.log(this.type,"container")
    })
    this.user = JSON.parse(localStorage.getItem("user")!)
    axios.get("http://localhost:3001/api/items/homePosts")
    .then((response) => {
      this.posts = response.data;
      console.log(this.posts);
      // location.reload();
      // localStorage.setItem("posts", JSON.stringify(this.posts));
    });
  }

}
