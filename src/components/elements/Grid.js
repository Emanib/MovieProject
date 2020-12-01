import React from 'react'; 
import {useState} from 'react'
import {StyledGrid, StyledGridContent} from '../styles/StyledGrid'
import Toggle from './Toggle'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import {GlobalStyle} from '../styles/GlobalStyle';

const Grid = ({header, children})=> 

   { 
       const [theme, setTheme] = useState('light');
       // The function that toggles between themes
const toggleTheme = () => {
       // if the theme is not light, then set it to dark
       if (theme === 'light') {
         setTheme('dark');
       // otherwise, it should be light
       } else {
         setTheme('light');
       }
     }
       
       return  (
              <>
 <StyledGrid>  
             <ThemeProvider theme={theme==='light'?lightTheme:darkTheme}> 
          <Toggle theme ={theme} toggleTheme={toggleTheme} />
          
        <h1> 
               {header}
        </h1>
        <StyledGridContent> {children} </StyledGridContent>
        <GlobalStyle />
        </ThemeProvider>
  </StyledGrid>

  </>
   
  )
  
}
  


export  default  Grid;