import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from './../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private HttpClient:HttpClient) { }

  getData(mediaType:string): Observable<any>{
    return this.HttpClient.get(`${environment.MoviesUrl}/${mediaType}/popular?${environment.api_key}`)
  }

  getMovieById(id:string): Observable<any>{
    return this.HttpClient.get(`${environment.MoviesUrl}/movie/${id}?${environment.api_key}`)
  }


  getTvById(id:string):Observable<any>{
    return this.HttpClient.get(`${environment.MoviesUrl}/tv/${id}?${environment.api_key}`)
  }

  getPageMovies(page:number): Observable<any>{
    return this.HttpClient.get(`${environment.MoviesUrl}/discover/movie?${environment.api_key}&language=en-US&sort_by=popularity.desc&page=${page}`)
  }
  getPageTV(page:number): Observable<any>{
    return this.HttpClient.get(`${environment.MoviesUrl}/discover/tv?${environment.api_key}&language=en-US&sort_by=popularity.desc&page=${page}`)
  }

  // searchMovie(searchQuery: string): Observable<Array<any>> {
  //   return this.HttpClient.get(`${environment.MoviesUrl}/search/movie?query=${searchQuery}&${environment.api_key}`)
  //     .pipe(
  //       map((res: any) => res.Search)
  //     );
  // }

  getSearchMovie(data: any): Observable<any> {
    // console.log(data, 'movie#');
    return this.HttpClient.get(`${environment.MoviesUrl}/search/movie?query=${data.movieName}&${environment.api_key}`);
  }
  getMovieCast(data: any): Observable<any> {
    return this.HttpClient.get(`${environment.MoviesUrl}/movie/${data}/credits?${environment.api_key}`)
  }

  getTvCast(data: any): Observable<any> {
    return this.HttpClient.get(`${environment.MoviesUrl}/tv/${data}/credits?${environment.api_key}`)
  }

  getMovieVideo(data: any): Observable<any> {
    return this.HttpClient.get(`${environment.MoviesUrl}/movie/${data}/videos?${environment.api_key}`)
  }

  getTvVideo(data: any): Observable<any> {
    return this.HttpClient.get(`${environment.MoviesUrl}/tv/${data}/videos?${environment.api_key}`)
  }
}

// https://api.themoviedb.org/3/tv/125988?api_key=18ebb55ec02cf2ed6553ddd53661fc5f