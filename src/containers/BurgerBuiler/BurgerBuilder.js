import React, { Component } from 'react';

// Component
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios.order';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 1.3,
  meat: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loader: false,
    error: false
  }

  componentDidMount () {
    axios.get('https://react-burger-1c2c2.firebaseio.com/ingredients.json')
    .then(response => {
      this.setState({ingredients: response.data})
      })
      .catch(error => {
        this.setState({error: true})
      })
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0});

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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    // this.setState( { loading: true } );
    // const order = {
    //   ingredient: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Éric',
    //     address: {
    //       street: 'Hutchison',
    //       zipCode: 'H3N 2Z1',
    //       country: 'Canada'
    //     },
    //     email: 'eferole@pixelcircus.ca'
    //   },
    //   deliveryMethod: 'fastest'
    // }
    // axios.post('/orders.json', order)
    //   .then(response => {
    //     this.setState( { loading: false, purchasing: false } )
    //   })
    //   .catch(error => {
    //     this.setState( { loading: false, purchasing: false } )
    //   });
    const queryParam = [];
    for (let i in this.state.ingredients) {
      queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    const queryString = queryParam.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls 
            ingredientAdded={this.addIngredientHandler} 
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}/>
        </Aux>
      );
      orderSummary = <OrderSummary 
      price={this.state.totalPrice.toFixed(2)}
      ingredients={this.state.ingredients}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      />
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
    <Aux>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);