import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { MoviesService } from './../Services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  imgSrc:string ="https://image.tmdb.org/t/p/w500/"
  constructor(private MoviesService:MoviesService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

   searchResult:any;
   searchForm = new FormGroup({
     'movieName':new FormControl(null)
   });

   submitForm()
   {
      //  console.log(this.searchForm.value,'searchform#');
       this.MoviesService.getSearchMovie(this.searchForm.value).subscribe((res)=>{
          //  console.log(res,'searchmovie##');
           this.searchResult = res.results;
       });
   }

}
