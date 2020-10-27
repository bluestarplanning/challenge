import React from 'react'
import {HiRefresh} from 'react-icons/hi'
import './styles.css';


const RefreshButton = ({onClick = undefined, ...other}) =>  {
    return (
        <div className="refresh" onClick={onClick} {...other}>
            <div className="button-content">
                <HiRefresh />
                <span>Refresh</span>
            </div>                  
        </div>
    )
}

export default RefreshButton;