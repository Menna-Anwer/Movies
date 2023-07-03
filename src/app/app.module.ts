import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { TvComponent } from './Components/tv/tv.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MovieDetailessComponent } from './Components/movie-detailess/movie-detailess.component';
import { TvdetailsComponent } from './Components/tvdetails/tvdetails.component';
import { SeeMorePipe } from './Components/Pipe/see-more.pipe';
import { MovieFilterPipe } from './Components/Pipe/movie-filter.pipe';
import { SearchComponent } from './Components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TvComponent,
    MoviesComponent,
    NotfoundComponent,
    MovieDetailessComponent,
    TvdetailsComponent,
    SeeMorePipe,
    MovieFilterPipe,
    SearchComponent,    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
