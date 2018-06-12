import React, { Component } from 'react';
import Aux from '../../hoc/ReactAux.js';
import Burger from '../../components/Layout/Burger/Burger'

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;