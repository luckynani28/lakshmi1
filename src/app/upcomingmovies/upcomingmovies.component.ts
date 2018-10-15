import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrls: ['./upcomingmovies.component.css']
})
export class UpcomingmoviesComponent implements OnInit {

  upcoming: any;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getUpcomingImg().subscribe(
      data => {
        this.upcoming = data;
      },
      error => console.log(error)
    );
  }


}
