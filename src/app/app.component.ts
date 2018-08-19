import { Component } from '@angular/core';
import { GotHttpService } from '../app/got-http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game of Thrones';
  public allCharacters ;
  public allBooks;
  public allHouses;
  constructor(public _gotHttpService : GotHttpService){
    console.log("App constructor");
  }
  ngOnInit(){
    this.allCharacters = this._gotHttpService.getAllCharacters().subscribe(
      data =>{
        console.log(data);
        this.allCharacters = data;
      },
      error =>{
        console.log("Error Occured");
        console.log(error.errorMessage)
      }
    )
    
    this.allBooks = this._gotHttpService.getAllBooks().subscribe(
      data =>{
        console.log(data);
        this.allBooks = data;
      },
      error =>{
        console.log("Error Occured");
        console.log(error.errorMessage);
      }
    )
    
    this.allHouses = this._gotHttpService.getAllHouses().subscribe(
      data =>{
        console.log(data);
        this.allHouses = data;
      },
      error =>{
        console.log("Error Occured");
        console.log(error.errorMessage);
      }
    )
}
}
