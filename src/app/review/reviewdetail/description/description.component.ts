import { Component, OnInit, Input } from '@angular/core';
import { Reviewmodel } from '../../reviewmodel';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  description : any;
  @Input ('animedescription') descripobject : string;
  constructor() {
  
   }

  ngOnInit(): void {
    this.description = this.descripobject ;
  }

}
