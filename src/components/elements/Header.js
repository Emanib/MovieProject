import React from 'react'; 
import TMDB from '../images/tmdb_logo.svg';
import RDMB from '../images/Rmdb.svg';
import {Link} from '@reach/router'
import {StyledHeader,StyledRMDBLogo,StyledTMDBLogo} from '../styles/StyledHeader'





const  Header = ()=> 
(
       <StyledHeader > 
     <div className="header-content">
       <Link to ="/" >
       <StyledRMDBLogo src = {RDMB}  alt ="rdmb-logo" />

       </Link>
                
        < StyledTMDBLogo src = {TMDB}  alt ="TMDB-logo" />

     </div>
  


       </StyledHeader>

)

  

  


export  default  Header;