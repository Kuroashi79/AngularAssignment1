import { Component, OnInit } from '@angular/core';
import { Reviewmodel } from './reviewmodel';



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


   anime: any;
  /// counter : number ;
  constructor() {

    this.anime = [
           {
             title : 'One Piece' ,
             description : 'The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the worlds ultimate treasure known as One Piece in order to become the next King of the Pirates.', 
             author :'Echiro oda',
             picture : "../../../assets/Images/Onepiece.jpg",
             rating :  1162
          },

           {
             title : 'Naruto' ,
             description : 'Naruto tells the story of Naruto Uzumaki, a young ninja who seeks to gain recognition from his peers and also dreams of becoming the Hokage, the leader of his village. The story is in two parts, the first set in Naruto pre-teen years, and the second in his teens. ', 
             author :' Masashi Kishimoto',
             picture : "../../../assets/Images/Naruto.jpg",
             rating :934
            },

           { 
             title : 'Hunter X Hunter' ,
             description : 'The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals. Despite being abandoned by his father, Gon departs on a journey to become a Hunter and eventually find his father. Along the way, Gon meets various other Hunters and encounters the paranormal.',
             author :'Yoshihiro Togashi.',
             picture : "../../../assets/Images/Hunter.jpg",
             rating : 649
            }
           ];
 
   }

  ngOnInit(): void {
  }

//   nextAnime() {
// this.anime.title = this.title[0];
// this.anime.description = this.description[0];
// this.anime.author = this.author[0];
// this.counter ++;
//}
  


}
