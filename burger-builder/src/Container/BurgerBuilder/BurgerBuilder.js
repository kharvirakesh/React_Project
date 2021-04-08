import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'

export class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
              ingredients: {
                cheese: 2,
                bacon: 1,
                meat: 2,
                salad: 1
            }
        }
    }

    render() {
        return (
            <Aux>
                <div className='content'>
                    <Burger ingreedients={this.state.ingredients} />
                    <p>Builder Controls</p>
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder
