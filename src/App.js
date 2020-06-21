import React, { Component } from 'react';

// Components
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuiler/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    show: true
  };

  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/" exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
