import React from 'react';

// Styles
import classes from './BuildControls.css';

// Components
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)} 
        disabled={props.disabled[ctrl.type]}
        />
    ))}
    <button className={classes.OrderButton}
    disabled={!props.purchasable}
    onClick={props.ordered}>BUY NOW</button>
  </div>
);

export default buildControls;