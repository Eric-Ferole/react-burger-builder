import React, { Component } from 'react';

// Component
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 1.3,
  meat: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = { 
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const priceAddition = INGREDIENTS_PRICE[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngredients = { 
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const priceAddition = INGREDIENTS_PRICE[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }


  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
    <Aux>
      <Burger ingredients={this.state.ingredients} />
      <BuildControls 
        ingredientAdded={this.addIngredientHandler} 
        ingredientRemoved={this.removeIngredientHandler}
        disabled={disabledInfo}
        price={this.state.totalPrice}/>
    </Aux>
    );
  }
}

export default BurgerBuilder;