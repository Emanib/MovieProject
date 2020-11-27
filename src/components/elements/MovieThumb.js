import React from 'react'; 
import {StyledMovieThumb} from '../styles/StyledMovieThumb';
import {Link} from '@reach/router'


const MovieThumb = ({image,movieId,clickable})=> {
       return (

              <StyledMovieThumb>
            
                   {  
                    clickable ?( 
                    <Link to = {`/${movieId}`} ><img src = {image}  alt ="Hello "/>  </Link>
                    ):(<img  alt ="movies"/>)
                    }
              </StyledMovieThumb>
       )
}

  
   

export  default  MovieThumb;