import React from 'react';

import { TOPBAR_ITEMS } from './constants';
import './styles.scss';

import Container from '@material-ui/core/Container';

function TopBar() {
  return (
    <div id="topbar">
      <Container>
        <div className="topbar__links">
          {TOPBAR_ITEMS.map((item, itemIndex) => (
            <div className="topbar__link" key={itemIndex}>
              {item.title}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default TopBar;
