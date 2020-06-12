import React, { Component } from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toobar/Toolbar';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

sideDrawerToggleHandler = () => {
  this.setState( ( prevState ) => {
    return { showSideDrawer: !prevState.showSideDrawer }
  });
}

SideDrawerClosedHandler = () => {
  this.setState( { showSideDrawer: false } );
}
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
          <main className={classes.Content}>
            {this.props.children}
          </main>
      </Aux>
    );
  }
}

export default Layout;