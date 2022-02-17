import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';


@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-post-lecture',
  templateUrl: './post-lecture.component.html',
  styleUrls: ['./post-lecture.component.css']
})
export class PostLectureComponent implements OnInit {

  private hasBaseDropZoneOver: boolean = false;
//  private uploader: FileUploader;
  constructor(private http:HttpClient) { }

getPostFormData(data:any){
  this.http.post('http://localhost:3001/api/items/posts', data).subscribe(result=>{
    console.log(result);
  })
}

  ngOnInit(): void {
    const uploaderOptions: FileUploaderOptions = {
      //url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().campgo}/upload`,
      autoUpload: true,
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };
    //this.uploader = new FileUploader(uploaderOptions);

    //this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      //form.append('upload_preset', this.cloudinary.config().upload_preset);

     // form.append('file', fileItem);

      //fileItem.withCredentials = false;
      //return { fileItem, form };
    };

  }

//}
