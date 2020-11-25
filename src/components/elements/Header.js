import React from 'react'; 
import TMDB from '../images/tmdb_logo.svg';
import RDMB from '../images/Rmdb.svg'
import {StyledHeader,StyledRMDBLogo,StyledTMDBLogo} from '../styles/StyledHeader'





const  Header = ()=> 
(
       <StyledHeader > 
     <div className="header-content">
                <StyledRMDBLogo src = {RDMB}  alt ="rdmb-logo" />
        < StyledTMDBLogo src = {TMDB}  alt ="TMDB-logo" />

     </div>


       </StyledHeader>

)

  

  


export  default  Header;