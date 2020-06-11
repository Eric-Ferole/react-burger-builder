import React from 'react';

// Style 
import classes from './Toolbar.css'

// Components
import Logo from '../../Logo/Logo';

const toolbar = ( props ) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      ...
    </nav>
  </header>
);

export default toolbar;