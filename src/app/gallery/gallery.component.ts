import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  // template: ` <app-modelimage [ imagegallery ] = "kvl"></app-modelimage> `,
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  kvl: any;
  p =   1;
  totalcount: any;

imagecollection = [];
hotpost: any;
imgcontent: Array<any>;
counter: number;

title2: any;


  constructor(private serviceService: ServiceService ,
    private router: Router ) { }

  ngOnInit() {
    this.pagiantinGallery(this.p);
    this.serviceService.gethotposts().subscribe(
      data => {

        this.hotpost = data ;
        console.log(this.hotpost);
      },
      error => console.log(error)
    );
  }

 public pagiantinGallery(page) {
  console.log('Gallery', page);
  this.serviceService.getGallery (page).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.imagecollection = data.pageContent;
    },
    error => console.log(error)
  );
}
getImges(title) {
  this.serviceService.getFilterImg(title).subscribe(
    data => {
      if (data) {
        this.kvl = data;
        console.log('kvl', data);
        this.router.navigate(['/modelimage']);
        // this.title2 = title;
      }

    },
    error => console.log(error)
  );

}



// getGal(gal) {
//   this.title2 = gal;
//   console.log('gallery datagal', gal);
// console.log('dtttttttttttttaaaaaaaaaaaaaaaisdddddddddddddddddddddaaaaaaaaaaaaaaat', this.title2);

// }

}
