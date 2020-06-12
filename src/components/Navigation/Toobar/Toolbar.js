import React from 'react';

// Style 
import classes from './Toolbar.css'

// Components
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <div>
      <Logo />
    </div>
    <nav>
      <NavigationItems/>
    </nav>
  </header>
);

export default toolbar;