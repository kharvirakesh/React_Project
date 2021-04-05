import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

export class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div className='content'>
                   <p>Burger</p>
                   <p>Builder Controls</p>
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder
