import React from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toobar/Toolbar';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = ( props ) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;