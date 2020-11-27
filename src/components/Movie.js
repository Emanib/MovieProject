import React from 'react'; 
// components
import {Actor} from './elements/Actors';
import {MovieInfoBar} from './elements/MovieInfoBar';
import {Navigation} from './elements/Navigiation';
import {MovieInfo} from './elements/MovieInfo';
import  Grid from './elements/Grid';
import Spinner from './elements/Spinner'
// hook 
import  {useMovieFetch } from './Hooks/useMovieFetch';
 
 export const Movie =({movieId})=> {
     const [movie,Loading,error] =useMovieFetch(movieId);
     console.log(movie);
     if(error)  return <div> Oops! Wrong </div>;
     if(Loading) return  <Spinner />;

 
 return (<> 
     
     <Navigation movie={movie.original_title}  />
     <MovieInfo movie={movie} />
     <MovieInfoBar
     
     time ={movie.runtime}
     budget = {movie.budget}
     revenue = {movie.revenue}


     
     /> 
     <Grid header="Actors" > 
      { movie.actors.map(actor=>(
          <Actor key ={actor.credit_id} actor ={actor}/>


      )) } 
      
        </Grid>
    
   
     
</>)
}