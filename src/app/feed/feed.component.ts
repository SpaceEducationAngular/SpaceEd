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

  constructor() {}

  ngOnInit(): void {
    axios.get('http://localhost:3001/api/items/homePosts').then((result) => {
      this.posts = result.data;
    });
  }
}
