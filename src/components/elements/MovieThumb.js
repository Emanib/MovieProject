import React from 'react'; 
import {StyledMovieThumb} from '../styles/StyledMovieThumb'


const MovieThumb = ({image,movieId,clickable})=> {
       return (

              <StyledMovieThumb>
            
                   {  
                    clickable ?( <img src = {image}  alt ="Hello "/>):(<img  alt ="movies"/>)
                    }
              </StyledMovieThumb>
       )
}

  
   

export  default  MovieThumb;