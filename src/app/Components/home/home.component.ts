import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  imgSrc:string ="https://image.tmdb.org/t/p/w500/"
  trendingMovies : any[] = [];
  trendingTV : any[] = [];
 constructor(private MoviesService:MoviesService){}
  ngOnInit(): void {
    this.getMovies()
    this.getTv()
  }
  getMovies(){
    return this.MoviesService.getData("movie").subscribe({
      next:(res)=>{
        // console.log(res);
        this.trendingMovies =res.results.slice(0,10)
        // console.log(this.trendingMovies);  
      }
    })
  }
  getTv(){
    return this.MoviesService.getData("tv").subscribe({
      next:(res)=>{
        // console.log(res);
        this.trendingTV =res.results
        // console.log(this.trendingTV);  
      }
    })
  }

}
