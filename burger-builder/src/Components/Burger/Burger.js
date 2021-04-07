import React from 'react'
import '../../assets/css/Burger.css'
import BurgerIngreedient from './BurgerIngreedient/BurgerIngreedient'

function Burger(props) {
    return (
        <div className='Burger'>
            <BurgerIngreedient type="bread-top" />
            <BurgerIngreedient type="cheese" />
            <BurgerIngreedient type="meat" />
            <BurgerIngreedient type="bread-bottom" />
        </div>
    ) 
}

export default Burger
