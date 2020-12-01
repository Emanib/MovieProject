import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as MoonIcon } from '../images/moon.svg';
import { ReactComponent as SunIcon } from '../images/sunny.svg';
// Toggle.styled.js
const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5rem;
  position: relative;
  width: 10rem;
  height: 4rem;
  margin-left:15px; 
  margin-top:15px;
outline:none; 

  svg {
    height: auto;
    width: 2.4rem;
    margin-left:20px;
    transition: all 0.3s linear;
  
    &:nth-child(1) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0px)'};
    }
  
    
  }

`;


const Toggle =({theme,toggleTheme}) =>
{
    const isLight = theme=== 'light'; 
    return (
<ToggleContainer onClick={toggleTheme}> 
    { isLight && <SunIcon  /> } ||
    {!isLight && <MoonIcon  /> } 

        </ToggleContainer>
     
    )
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
  }
  export default Toggle;