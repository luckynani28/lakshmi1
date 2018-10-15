import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modelimage',
  templateUrl: './modelimage.component.html',
  styleUrls: ['./modelimage.component.css']
})
export class ModelimageComponent implements OnInit {

  @Input() imagegallery: any;
  constructor() { }

  ngOnInit() {
    console.log('model' + ' ' + this.imagegallery);
  }

}
