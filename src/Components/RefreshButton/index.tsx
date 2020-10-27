import React from 'react'
import {HiRefresh} from 'react-icons/hi'
import './styles.css';


const RefreshButton = (props: React.HTMLAttributes<HTMLDivElement>) =>  {
    return (
        <div className="refresh" {...props}>
            <div className="button-content">
                <HiRefresh />
                <span>Refresh</span>
            </div>                  
        </div>
    )
}

export default RefreshButton;