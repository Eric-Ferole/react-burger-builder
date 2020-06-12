import React from 'react';

import Icon from '../../../UI/Icon/Icon';

// Image
import menu from '../../../../assets/images/icon-menu.svg';

const drawerToggle = (props) => (
  <div onClick={props.clicked}>
    <Icon src={menu} alt="Menu" height="80%" />
  </div>
);

export default drawerToggle;