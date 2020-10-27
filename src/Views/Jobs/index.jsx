import React from 'react'
import RefreshButton from '../../Components/RefreshButton'
import './styles.css'

const Jobs = () => {
   
    return (
        <div className="root">
            <div className="container active">
                <div className="header">
                    <h1>Active Jobs</h1>
                    <RefreshButton/>
                </div>
                <div className="job-list">

                    
                </div>
                
            </div>
            <div  className="container completed">
                <div className="header">
                    <h1>Completed Jobs</h1>
                    <RefreshButton/>
                </div>
                <div className="job-list">
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Jobs;