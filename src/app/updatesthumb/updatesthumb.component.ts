import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-updatesthumb',
  templateUrl: './updatesthumb.component.html',
  styleUrls: ['./updatesthumb.component.css']
})
export class UpdatesthumbComponent implements OnInit {

  updatecollection = [];
  kvl: any;
  updatecontent: Array<any>;
  counter: number;

    constructor(private serviceService: ServiceService) { }

    ngOnInit() {
    this.serviceService.getUpdatesthumb().subscribe(
    data => {
      this.updatecontent = data;
      this.updatecollection = this.updatecontent ;
      console.log(this.updatecontent);
    },
    error => console.log(error)
  );
    }

    getimage(heading) {
      this.serviceService.getUpdateData (heading).subscribe(
        data => {

          this.kvl = data;
          console.log('update', data);
        },
        error => console.log(error)
      );
    }
    pagination1(p) {
     p = 1;
        }


}
