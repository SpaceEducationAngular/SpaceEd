import { Component, OnInit  } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { ZoomMtg } from '@zoomus/websdk';


ZoomMtg.setZoomJSLib('https://source.zoom.us/2.2.0/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');


  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
  
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css'],
})
export class LecturesComponent implements OnInit {
  posts : any
  category:any
  meetConfig : any
  signature : any
  signatureEndpoint = ''
  apiKey = 'MqaDdBHkQ5aFedpkfCLP5A'
  meetingNumber = '123456789'
  role = 0
  leaveUrl = 'http://localhost:4200/zoom'
  userName = 'space education'
  userEmail = ''
  passWord = ''
  registrantToken = ''
  constructor(public httpClient: HttpClient) {}
  
  getSignature() {
    this.httpClient.post(this.signatureEndpoint, {
      meetingNumber: this.meetingNumber,
      role: this.role
    }).subscribe((data: any) => {
      if(data.signature) {
        console.log(data.signature)
        this.startMeeting(data.signature)
      } else {
        console.log(data)
      }
    })
  }
  click(){
    this.startMeeting(this.getSignature)
  }
    startMeeting(signature:any) {
      ZoomMtg.init({
        leaveUrl: this.leaveUrl,
        success: (success:any) => {
          console.log(success)
          ZoomMtg.join({
            signature: signature,
            meetingNumber: this.meetingNumber,
            userName: this.userName,
            apiKey: this.apiKey,
            userEmail: this.userEmail,
            passWord: this.passWord,
            tk: this.registrantToken,
            success: (success:any) => {
              console.log(success)
            },
            error: (error:any) => {
              console.log(error)
            }
          })
        },
        error: (error:any) => {
          console.log(error)
        }
      })
    }
  
  

  // getLectures() {
  //   this.http
  //     .get('http://localhost:3001/api/items/homePosts')
  //     .subscribe((result) => {
  //       this.posts = result;
  //       console.log(this.posts, 'HELOO');
  //     });
  // }

  ngOnInit(): void {
    axios
    .get('http://localhost:3001/api/items/homePosts')
    .then(result=>{
      console.log(result)
      this.posts = result.data
    })

    
  }
}
