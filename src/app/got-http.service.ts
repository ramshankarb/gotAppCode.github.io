import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; //For serving Http request and response

@Injectable({
  providedIn: 'root'
})
export class GotHttpService {

  constructor(private _http:HttpClient) {
    console.log("Service constructor initialized");
   }

   public baseUrl = "https://anapioficeandfire.com/api/";

   public getAllCharacters():any{
     let myResponse=this._http.get(this.baseUrl + "characters");
     console.log(myResponse);
     return myResponse;
   }

   public getAllBooks():any{
    let myResponse=this._http.get(this.baseUrl + 'books');
    console.log(myResponse);
    return myResponse;
  }

  public getAllHouses():any{
    let myResponse=this._http.get(this.baseUrl + 'houses');
    console.log(myResponse);
    return myResponse;
  }

  public getSingleCharacter(charUrl):any{
    let myResponse=this._http.get(charUrl);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleHouse(houseUrl):any{
    let myResponse=this._http.get(houseUrl);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBook(bookUrl):any{
    let myResponse=this._http.get(bookUrl);
    console.log(myResponse);
    return myResponse;
  }

}
