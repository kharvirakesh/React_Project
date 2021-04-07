import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'

export class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div className='content'>
                   <Burger />
                   <p>Builder Controls</p>
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder
