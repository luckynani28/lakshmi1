import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-videosthumb',
  templateUrl: './videosthumb.component.html',
  styleUrls: ['./videosthumb.component.css']
})
export class VideosthumbComponent implements OnInit {

  p: number;
  pageSize: number;
  collection1 = [];
  head: any;
  content: Array<any>;
  counter: number;

    constructor(private serviceService: ServiceService) {
      this.pageSize = 5;
     }

    ngOnInit() {
      this.p = 1;
    this.serviceService.getVideosthumb().subscribe(
    data => {
      this.content = data;
      this.head = data;
      this.collection1 = this.content ;
      console.log(this.content);
    },
    error => console.log(error)
  );
    }


    pagination1(event) {
          console.log('pagination1-checking', event);
     }
}
