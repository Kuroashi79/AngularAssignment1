import { Component, OnInit, Input } from '@angular/core';
import { Reviewmodel } from '../reviewmodel';
 

@Component({
  selector: 'app-review-title',
  templateUrl: './review-title.component.html',
  styleUrls: ['./review-title.component.css']
})
export class ReviewTitleComponent implements OnInit {

  title : any;
 @Input('animeChildTitle') animeobj : Reviewmodel;
  constructor() {
   
   }

  ngOnInit(): void {
    this.title =  this.animeobj.title; 
    
  }

}
