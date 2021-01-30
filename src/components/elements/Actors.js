import React from 'react'; 
import no_image from '../images/no_image.jpg';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import {StyledActor} from '../styles/StyledActor'



export const Actor =({actor})=> 
(
    <StyledActor>
        <img 
        src ={actor.profile_path? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
        :no_image
        
        }
        alt ="actor "
        /> 
        <span className="actor-name"> {actor.name}</span>
        <span className="actor-character"> {actor.character}</span>


    </StyledActor>

)