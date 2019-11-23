import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routers
import { AppRoutingModule } from './app-routing.module';
// Http
import { HttpClientModule } from "@angular/common/http";
// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from "./pipes/domseguro.pipe";
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

// Compoenenets Shareds
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
// Services
// import { SpotifyService } from './services/spotify.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    // SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
