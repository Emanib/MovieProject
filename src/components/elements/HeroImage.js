import react from 'react'; 
import Styled from 'styled-components'
import { StyledHeroImage} from '../styles/StyledHeroImage';


const HeroImage = ({image,title,text})=> 

  (
       <StyledHeroImage image = {image}>  
       <div className="heroImag-content">
              <div className ="heroimage-text">
                     <h1>    {title} </h1>
                     <p>    {text} </p>
                         

              </div>


       </div>
        </StyledHeroImage>
      
  )
      
  


export  default  HeroImage;