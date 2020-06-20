import React, { Component } from 'react';

// Components
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuiler/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  state = {
    show: true
  };

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
