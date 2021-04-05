import React from 'react'
import Aux from '../../hoc/Aux'
import '../../assets/css/Layout.css'

const Layout = (props) => {
    return (
        <Aux>
            <div>
                toolbar,sidebar,backdrawer
                <main>
                    {props.children}
                </main>
            </div>
        </Aux>
    )
}

export default Layout
