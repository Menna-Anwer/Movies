import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from './../Services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit{

  imgSrc:string ="https://image.tmdb.org/t/p/w500/"
  trendingMovies : any[] = [];
  pageItem = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]

  query : string = "";
  movies!: Observable<any[]>;
  constructor(private MoviesService:MoviesService){}

  ngOnInit(): void {
    this.getPage(1)
  }

  getPage(num:number){
    console.log(num);
    return this.MoviesService.getPageMovies(num).subscribe({
      next:(res)=>{
        // console.log(res);
        this.trendingMovies =res.results
        // console.log(this.trendingMovies);  
      }
    })
  }

  // getSearchResults() {
  //   this.movies = this.MoviesService.searchMovie(this.query);
  // }

  
}
