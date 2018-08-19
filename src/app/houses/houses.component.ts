import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  public allHouses;
  constructor(public gotHttpService:GotHttpService) {
    console.log("House constructor")
   }

  ngOnInit() {
    this.allHouses = this.gotHttpService.getAllHouses().subscribe(
      data => {
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
