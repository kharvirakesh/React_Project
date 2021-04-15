import React from 'react'
 // import './BuildControl/buildControls.css'
 // import buildControl from './BuildControl/buildControl'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salad' , type: 'salad'},
    {label:'Bacon' , type: 'bacon'},
    {label:'Cheese' , type: 'cheese'},
    {label:'Meat' , type: 'meat'}
]

const BuildControls = (props) => {
    // console.log('added and removed' + Object.keys(props))
    return (
        <div style={{
                width: '100%',
                backgroundColor:'#CF8F2E',
                display: 'flex',
                flexFlow:'column',
                alignItems:'center',
                boxShadow: '0 2px 1px #ccc',
                margin: 'auto',
                padding: '10px 0'
        }}>
            <p> Current Price: {props.price} </p>
            { controls.map(ctrl => 
            <BuildControl 
              key={ctrl.label} 
              label={ctrl.label}
              added={()=>props.ingredientAdded(ctrl.type)}
              removed={()=>props.ingredientRemoved(ctrl.type)}/> 
              )}   
              <button style={{backgroundColor:'#DAD735',
                   cursor:'pointer',
                   border:'1px solid #966909',
                   color:'#966909',
                   padding:'15px 30px',
                   boxShadow:'2px 2px 2px #966909'}}
                   disabled={!props.purchasable}> ORDER NOW </button>     
        </div>
    )
}

export default BuildControls


