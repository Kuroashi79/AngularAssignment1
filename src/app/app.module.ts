import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { ReviewTitleComponent } from './review/review-title/review-title.component';
import { PictureComponent } from './review//reviewdetail/picture/picture.component';
import { DescriptionComponent } from './review/reviewdetail/description/description.component';
import { AuthorComponent } from './review/reviewdetail/author/author.component';
import { ReviewdetailComponent } from './review/reviewdetail/reviewdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewTitleComponent,
    PictureComponent,
    DescriptionComponent,
    AuthorComponent,
    ReviewdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
