import React from 'react';

//Style 
import classes from './Modal.css'

//Component
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div 
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0' : 'TranslateY(-100vh',
        opacity: props.show ? '1' : '0'
      }}
      >
      {props.children}
    </div>
  </Aux>  
);

export default modal;