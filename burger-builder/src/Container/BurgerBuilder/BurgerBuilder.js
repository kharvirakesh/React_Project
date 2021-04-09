import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    cheese: 20,
    bacon: 20,
    meat: 30,
    salad: 25
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {
                cheese: 1,
                bacon: 1,
                meat: 1,
                salad: 1
            },
            totalprice: 60
        }
    }
       

           addIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalprice
            const newPrice = oldPrice + priceAddition

            this.setState({ totalprice : newPrice, 
                ingredients: updatedIngredients })
                console.log('clicked on added ');
        }

         removeIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            console.log("old-count"+oldCount)
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalprice
            const newPrice = oldPrice - priceDeduction

            this.setState({ totalprice: newPrice, 
                ingredients: updatedIngredients })
        }

    

    render() {
        return (
            <Aux>
                <div className='content'>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                       ingredientAdded = {this.addIngredientHandler} 
                       ingredientRemoved = {this.removeIngredientHandler}
                       />
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder





