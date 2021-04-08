import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'

export class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
              ingredients: {
                cheese: 0,
                bacon: 0,
                meat: 0,
                salad: 0
            }
        }
    }

    render() {
        return (
            <Aux>
                <div className='content'>
                    <Burger ingredients={this.state.ingredients} />
                    <p>Builder Controls</p>
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder
