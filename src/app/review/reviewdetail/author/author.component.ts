import { Component, OnInit, Input } from '@angular/core';
import { Reviewmodel } from '../../reviewmodel';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author : string;
  likes : number
  @Input ('animeauthor') authorobjt : Reviewmodel ;
  constructor() {

   }

  ngOnInit(): void {
    this.author = this.authorobjt.author;
    this.likes = this.authorobjt.rating;  
  }
   
  like(v : boolean){
    if(v == true)
    this.likes ++;
    else 
    this.likes --;
  }

}
