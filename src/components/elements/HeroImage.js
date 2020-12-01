import react from 'react'; 
import Styled from 'styled-components'
import { StyledHeroImage} from '../styles/StyledHeroImage';
import Toggle from './Toggle'

const HeroImage = ({image,title,text})=> 

{
 return (
         <>
       <StyledHeroImage image = {image}>  
       <div className="heroImag-content">
              <div className ="heroimage-text">
                     <h1>    {title} </h1>
                     <p>    {text} </p>
                         

              </div>


       </div>
        </StyledHeroImage>
     
     

</>
      
  )}
      
  


export  default  HeroImage;