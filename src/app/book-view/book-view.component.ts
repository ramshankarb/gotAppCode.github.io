import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { GotHttpService } from '../got-http.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  providers: [Location]
})
export class BookViewComponent implements OnInit {

  public currentBook;
  
  constructor(private _route:ActivatedRoute,private router:Router, public gotHttpService:GotHttpService,private location: Location) { 
    console.log("Book View Constructor is called");
  }

  ngOnInit() {
    console.log("Book view Oninit");
    let myUrl= this._route.snapshot.paramMap.get('bookUrl');
    console.log("URL passed from Home : " +myUrl);
    this.currentBook = this.gotHttpService.getSingleBook(myUrl)
    console.log("CurrentBook data  : "+this.currentBook);
    this.currentBook.subscribe(
      data => { 
        console.log(data);
        this.currentBook=data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }
 
}
