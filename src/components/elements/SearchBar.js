import react,{useState,useRef} from 'react'; 
import {StyledSearchBar,StyledSearchBarContent} from '../styles/StyledSearchBar'

import FontAwesome from 'react-fontawesome'

const SearchBar = ({callback})=> 
{
       const [state,setState] = useState('');
       const timeout = useRef(null)

       const Search = (e) =>
       {
              const {value} =e.target ; 
              clearTimeout(timeout.current)
              setState(value);
              timeout.current = setTimeout(()=>{callback(value)},500)
       }
       
       return (
<StyledSearchBar> 
       <StyledSearchBarContent > 
    <FontAwesome className ="fa-search" size ="2x" name ="search" /> 
    <input  
    type ="text" 
    placeholder="Search about your favorite movies"  
    onChange = {Search}
    value ={state }
    
    
    
    />

       </StyledSearchBarContent>
 </StyledSearchBar>
)}
  

  


export  default  SearchBar;