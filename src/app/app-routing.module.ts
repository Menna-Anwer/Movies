import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Components/Guard/auth.guard';
// import { AuthGuardActivate } from './Components/Guard/auth.guard';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailessComponent } from './Components/movie-detailess/movie-detailess.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { RegisterComponent } from './Components/register/register.component';
import { SearchComponent } from './Components/search/search.component';
import { TvComponent } from './Components/tv/tv.component';
import { TvdetailsComponent } from './Components/tvdetails/tvdetails.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full" },
  {path:'home',component: HomeComponent ,canActivate: [AuthGuard]},
  {path:'moviedetailes/:id',component: MovieDetailessComponent ,canActivate: [AuthGuard]},
  {path:'tvdetailes/:id',component: TvdetailsComponent ,canActivate: [AuthGuard]},
  {path:'movies',component: MoviesComponent ,canActivate: [AuthGuard]},
  {path:'search',component:SearchComponent ,canActivate: [AuthGuard]},
  {path:'tv',component: TvComponent},
  // ,canActivate: [AuthGuard]
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
