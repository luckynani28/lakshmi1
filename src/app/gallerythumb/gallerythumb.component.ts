import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-gallerythumb',
  templateUrl: './gallerythumb.component.html',
  styleUrls: ['./gallerythumb.component.css']
})
export class GallerythumbComponent implements OnInit {

  p =   1;
  imagecollection = [];

imgcontent: Array<any>;
counter: number;

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  this.serviceService.getthumbGallery().subscribe(
  data => {

    this.imagecollection = data ;
    console.log(this.imagecollection);
  },
  error => console.log(error)
);
  }


}
