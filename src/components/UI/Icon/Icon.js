import React from 'react';

const icon = (props) => (
  <div>
    <img src={props.src} alt={props.alt} height={props.height} />
  </div>
);

export default icon;