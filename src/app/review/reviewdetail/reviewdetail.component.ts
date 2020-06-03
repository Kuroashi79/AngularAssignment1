import { Component, OnInit, Input } from '@angular/core';
import { Reviewmodel } from '../reviewmodel';

@Component({
  selector: 'app-reviewdetail',
  templateUrl: './reviewdetail.component.html',
  styleUrls: ['./reviewdetail.component.css']
})
export class ReviewdetailComponent implements OnInit {

  descp : any; author : any; picture : any; 
  @Input ('animeChildDetail') animeobjt : Reviewmodel;
  
  constructor() {

   }
  
  ngOnInit(): void {
    this.descp = this.animeobjt.description;
    this.author = this.animeobjt;
    this.picture = this.animeobjt.picture;    
  }

}
