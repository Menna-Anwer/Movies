import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../Services/movies.service';

@Component({
  selector: 'app-movie-detailess',
  templateUrl: './movie-detailess.component.html',
  styleUrls: ['./movie-detailess.component.sass']
})
export class MovieDetailessComponent implements OnInit {
  movieId :string ="";
  movieDetailesData : any;
  getMovieVideoResult:any;
  imgSrc:string ="https://image.tmdb.org/t/p/w500/"
  service: any;
  getMovieCastResult: any;
constructor(private ActivatedRoute:ActivatedRoute , private MoviesService : MoviesService){}

ngOnInit(): void {
  let getParamId = this.ActivatedRoute.snapshot.paramMap.get('id');
  this.getMovie()
  this.getVideo(getParamId);
    this.getMovieCast(getParamId);
}
getMovie(){
  this.movieId = this.ActivatedRoute.snapshot.params['id']
  this.MoviesService.getMovieById(this.movieId).subscribe({
    next:(res)=>{
      this.movieDetailesData = res
      // console.log(res);
    }
  })
}
getVideo(id:any){
  this.MoviesService.getMovieVideo(id).subscribe((res)=>{
      console.log(res,'getMovieVideo#');
      res.results.forEach((element:any) => {
          if(element.type=="Trailer")
          {
            this.getMovieVideoResult = element.key;
          }
      });

  });
}
getMovieCast(id:any){
  this.MoviesService.getMovieCast(id).subscribe((result)=>{
    // console.log(result,'movieCast#');
    this.getMovieCastResult = result.cast.slice(0,6);
  });
}
}
