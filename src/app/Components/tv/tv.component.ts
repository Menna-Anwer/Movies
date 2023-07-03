import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from './../Services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.sass']
})
export class TvComponent {
  imgSrc:string ="https://image.tmdb.org/t/p/w500/"
  trendingtv : any[] = [];
  pageItem = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]

  query : string = "";
  tv!: Observable<any[]>;
  constructor(private MoviesService:MoviesService){}

  ngOnInit(): void {
    this.getPage(1)
  }

  getPage(num:number){
    console.log(num);
    return this.MoviesService.getPageTV(num).subscribe({
      next:(res)=>{
        // console.log(res);
        this.trendingtv =res.results
        // console.log(this.trendingtv);  
      }
    })
  }
}
