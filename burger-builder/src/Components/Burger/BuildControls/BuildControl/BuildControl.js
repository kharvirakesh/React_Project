import React from 'react'
import './BuildControl.css'

const BuildControl = (props) => {
    return (
        <div className='BuildControl'>
          <div className='Label'>{props.label}</div>
           {console.log("this is props message"+props.label)}
          <button className='Less'>Less</button>
          <button className='More'>More</button>
        </div>
    )
}

export default BuildControl
