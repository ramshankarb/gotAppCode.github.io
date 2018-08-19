import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {GotHttpService} from '../got-http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  public currentCharacter;
  constructor(private _route:ActivatedRoute,private router:Router, public gotHttpService:GotHttpService,private location:Location) { 
    console.log("Character View Constructor is called");
  }

  ngOnInit() {
    console.log("Charcter view Oninit");
    let myUrl= this._route.snapshot.paramMap.get('charUrl');
    console.log("URL passed from Home : " +myUrl);
    this.currentCharacter = this.gotHttpService.getSingleCharacter(myUrl)
    console.log("CurrentCharacter data  : "+this.currentCharacter);
    this.currentCharacter.subscribe(
      data => { 
        console.log(data);
        this.currentCharacter=data;
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
