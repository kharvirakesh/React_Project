import React from 'react'
import '../../assets/css/Burger.css'
import BurgerIngreedient from './BurgerIngreedient/BurgerIngreedient'

function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients)
    .map((igkey) => {
         return [...Array(props.ingredients[igkey])].map((_, i)=>{
         return <BurgerIngreedient key={igkey+i} type={igkey}/>
        })
        } 
    )
    .reduce((acc,el)=> {
       return acc.concat(el)
    //    return (acc + el)
    },[])
    console.log(transformedIngredients)

     if(transformedIngredients.length === 0) {
        transformedIngredients =  <p>Please start adding ingredients</p>
     }

    return (
        <div className='Burger'>
            <BurgerIngreedient type="bread-top" />
               {transformedIngredients }
            <BurgerIngreedient type="bread-bottom" />
        </div>
    ) 
}

export default Burger
