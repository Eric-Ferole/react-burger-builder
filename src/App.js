import React, { Component } from 'react';

// Components
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuiler/BurgerBuilder';

class App extends Component {
  state = {
    show: true
  };

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
