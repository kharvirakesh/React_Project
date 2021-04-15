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

// const emptyMessage = "There is no ingredients left!"


class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {
                cheese: 0,
                bacon: 0,
                meat: 0,
                salad: 0
            },
            totalprice: 60,
            purchasable: false
        }
    }
         updatePurchaseState = () => {
             const ingredients = {
                 ...this.state.ingredients
             }
             const sum = Object.keys(ingredients).map(igKey => {
                 return ingredients[igKey]
             }).reduce((cval,sum)=>{
                return cval+sum
             },0)
             this.setState({purchasable: sum > 0})
         }

          emptyMessage = () => {
           console.log('There is no ingredients left!');
           return <p>'There is no ingredients left!'</p>
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
                this.updatePurchaseState()
        }

         removeIngredientHandler = (type) => {
             
            const oldCount = this.state.ingredients[type];
            console.log("old-count"+oldCount)

            if(oldCount >= 1){
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
            else {
                this.emptyMessage()
            }
            this.updatePurchaseState()
        }

    

    render() {
        return (
            <Aux>
                <div className='content'>
                    <Burger 
                       ingredients={this.state.ingredients}
                       Emptymsg={this.emptyMessage} />
                    <BuildControls 
                       ingredientAdded = {this.addIngredientHandler} 
                       ingredientRemoved = {this.removeIngredientHandler}
                       purchasable={this.state.purchasable}
                       price = { this.state.totalprice }
                       />
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder





