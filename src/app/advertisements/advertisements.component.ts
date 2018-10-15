import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
  advert: any;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getAdImg().subscribe(
      data => {
        this.advert = data;
      },
      error => console.log(error)
    );
  }

}
