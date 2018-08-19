import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allCharacters;

  
  constructor(public gotHttpService:GotHttpService) {
    console.log("HomeComponent constructor is called")
   }

  ngOnInit() {
    console.log("HomeComponent ngOnInit created");
    this.allCharacters = this.gotHttpService.getAllCharacters().subscribe(
      data =>{
        console.log(data);
        this.allCharacters = data;
      },
      error =>{
        console.log("Error Occured");
        console.log(error.errorMessage);
      }
    )
  }

  ngonDestroy(){
    console.log("Homecomponent ngonDestroy")
  }

}
