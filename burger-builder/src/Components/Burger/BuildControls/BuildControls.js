import React from 'react'
// import './BuildControl/buildControls.css'
// import buildControl from './BuildControl/buildControl'
import buildControl from './BuildControl/buildControl'

const controls = [
    {label:'Salad' , type: 'salad'},
    {label:'Bacon' , type: 'bacon'},
    {label:'Cheese' , type: 'cheese'},
    {label:'Meat' , type: 'meat'}
]
const BuildControls = (props) => {
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
        {controls.map((ctrl)=>{
            <buildControl></buildControl>
         //    <buildControl key={ctrl.label} label={ctrl.label}/>
           console.log(ctrl.label)
        })}
        </div>
    )
}

export default BuildControls


// .BuildControls {
//     width: 100%;
//     background-color: #CF8F2E;
//     display: flex;
//     flex-flow:column ;
//     align-items: center;
//     box-shadow: 0 2px 1px #ccc;
//     margin: auto;
//     padding: 10px 0;
// }