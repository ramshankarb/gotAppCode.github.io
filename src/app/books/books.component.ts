import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public allBooks;
  
  constructor(public gotHttpService:GotHttpService) { 
    console.log("Books constructor");
  }

  ngOnInit() {
    
    this.allBooks = this.gotHttpService.getAllBooks().subscribe(
      data =>{
        console.log(data);
        this.allBooks = data;
      },
      error =>{
        console.log("Error Occured");
        console.log(error.errorMessage);
      }
    )

  }

}
