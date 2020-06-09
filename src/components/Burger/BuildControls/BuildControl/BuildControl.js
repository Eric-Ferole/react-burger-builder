import React from 'react';

// Styles
import classes from './BuildControl.css'

const buildControl = (props) => (
  <div>
    <div className={classes.BuildControl}>{props.label}
    <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
    <button className={classes.More} onClick={props.added}>More</button>
    </div>
  </div>
);

export default buildControl;