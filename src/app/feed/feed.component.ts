import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  posts: any;
  image_post: any;
  title: string = '';
  description: string = '';
  container: any = [];
  profil: any;
  index: any;
  user: any;
  allposts: any;

  constructor() {}

  savePerson(id: any) {
    axios.get(`http://localhost:3001/api/items/user/${id}`).then((res) => {
      this.profil = res.data;
      this.profil.user_id = id;
      console.log(this.profil);
      localStorage.setItem('profil', JSON.stringify(this.profil));
      localStorage.setItem('key', JSON.stringify(1));
    });
  }

  booking(id1: any, id2: any) {
    var option = {
      id_user: id1,
      id_post: id2,
    };
    axios.post('http://localhost:3001/api/items/booking', option);
  }

  // change(e:any) {   // For the Search bar
  //   this.index = e.target.value
  //   console.log(this.index);
  //   axios.get(`http://localhost:3001/api/items/homePosts/${this.index}`)
  //     .then(res => {
  //       this.posts = res.data
  //       console.log(this.posts)
  //     })
  // }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    axios.get('http://localhost:3001/api/items/homePosts').then((response) => {
      this.posts = response.data;
      console.log(this.posts);
      this.allposts = response.data;
      console.log(this.posts);
    });
  }
}
