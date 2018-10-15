import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

P =   1;
totalcount: any;
videocollection = [];
hotpost: any;
imgcontent: Array<any>;
counter: number;

  constructor(private serviceService: ServiceService ,
              private _sanitizationService: DomSanitizer) { }

  ngOnInit() {
    this.pagiantinvideo(this.P);
    this.serviceService.gethotposts().subscribe(
      data => {

        this.hotpost = data ;
        console.log(this.hotpost);
      },
      error => console.log(error)
    );
  }

 public pagiantinvideo(page) {
  console.log('video', page);
  this.serviceService.getVideos (page).subscribe(
    data => {
      this.totalcount = data.totalPages;
      // imgSrc = this._sanitizationService.bypassSecurityTrustUrl('data:image/png;base64,' + yourSrc);
      this.videocollection = data.pageContent;
    },
    error => console.log(error)
  );
}
}
