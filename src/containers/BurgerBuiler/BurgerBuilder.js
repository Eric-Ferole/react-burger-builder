import React, { Component } from 'react';

// Component
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  }
  render() {
    return (
    <Aux>
      <Burger ingredients={this.state.ingredients} />
      <BuildControls />
    </Aux>
    );
  }
}

export default BurgerBuilder;