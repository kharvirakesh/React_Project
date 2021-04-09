import React from 'react'
import './BuildControl.css'

const BuildControl = (props) => {
  console.log("tetsing for props "+ Object.keys(props));
    return (
        <div className='BuildControl'>
          <div className='Label'>{props.label}</div>
           {/* {console.log("this is props message"+props.label)} */}
          <button className='Less' onClick={props.removed}>Less</button>
          <button className='More' onClick={props.added}>More</button>
        </div>
    )
}

export default BuildControl
