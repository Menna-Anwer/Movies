import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../Services/movies.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.sass']
})
export class TvdetailsComponent implements OnInit{
  tvId :string ="";
  tvDetailesData : any = {};
  getTvVideoResult:any;
  imgSrc:string ="https://image.tmdb.org/t/p/w500/"

  constructor(private ActivatedRoute:ActivatedRoute, private MoviesService:MoviesService){}
 ngOnInit(): void {
  let getParamId = this.ActivatedRoute.snapshot.paramMap.get('id');
  this.getTV()
  this.getVideo(getParamId)
 }
  getTV(){
    this.tvId = this.ActivatedRoute.snapshot.params['id']
    this.MoviesService.getTvById(this.tvId).subscribe({
      next:(res)=>{
        this.tvDetailesData = res
        // console.log(res);
        // console.log('dddddufemfei');
      }
    })
  }
  getVideo(id:any){
    this.MoviesService.getTvVideo(id).subscribe((res)=>{
        console.log(res,'gettvVideo#');
        res.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getTvVideoResult = element.key;
            }
        });
  
    });
  }
}
