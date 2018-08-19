import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importing router module
import { RouterModule, Routes} from '@angular/router';
//importing http module
import { HttpClientModule } from '../../node_modules/@angular/common/http';
//importing  components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GotHttpService } from './got-http.service';
import { CharacterViewComponent } from './character-view/character-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterViewComponent,
    BookViewComponent,
    HouseViewComponent,
    BooksComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ///router module routes.
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'books',component:BooksComponent},
      {path:'houses',component:HousesComponent},
      {path:'characterView/:charUrl',component:CharacterViewComponent},
      {path:'bookView/:bookUrl',component:BookViewComponent},
      {path:'houseView/:houseUrl',component:HouseViewComponent}
    ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}