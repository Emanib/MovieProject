import React from 'react'; 
import FontAesome from 'react-fontawesome';
import { calcTime, convertMoney} from '../../helpers'
import {StyledMovieInfoBar} from '../styles/StyledMovieInfoBar'


export const MovieInfoBar=({time,budget,revenue})=>
(
    <StyledMovieInfoBar>
        <div className="movieinfobar-content">
                <div className="movieinfobar-content-col ">
                    <FontAesome className="fa-time" name ="clock to" size ="2x"/>
                    <span className="movieinfobar-info "> 
                    Running Time: {calcTime(time)} 
                    </span>
                    </div>



                    <div className="movieinfobar-content-col ">
                    <FontAesome className="fa-budget" name ="money" size ="2x"/>
                    <span className="movieinfobar-info "> 
                   Money: {convertMoney(budget)} 
                    </span>
                    </div>
                     

                  
                    <div className="movieinfobar-content-col ">
                    <FontAesome className="fa-revenue " name ="Ticket" size ="2x"/>
                    <span className="movieinfobar-info "> 
                    Revenue: {convertMoney(revenue)} 
                    </span>
                    </div>

















        </div>

    </StyledMovieInfoBar>
)