import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { GotHttpService } from '../got-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public currentHouse;
  constructor(private _route:ActivatedRoute,private router:Router, public gotHttpService:GotHttpService,private location:Location) { 
    console.log("House View Constructor is called");
  }

  ngOnInit() {
    console.log("House view Oninit");
    let myUrl= this._route.snapshot.paramMap.get('houseUrl');
    console.log("URL passed from House-view : " +myUrl);
    this.currentHouse = this.gotHttpService.getSingleHouse(myUrl)
    console.log("CurrentHouse data  : "+this.currentHouse);
    this.currentHouse.subscribe(
      data => { 
        console.log(data);
        this.currentHouse=data;
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
