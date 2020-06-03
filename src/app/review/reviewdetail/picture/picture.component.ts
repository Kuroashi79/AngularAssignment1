import { Component, OnInit, Input } from '@angular/core';
import { Reviewmodel } from '../../reviewmodel';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  picture: any;
  @Input('animepicture') pictureobj : string; 
  constructor() { }

  ngOnInit(): void {
    this.picture= this.pictureobj;
  }

}
