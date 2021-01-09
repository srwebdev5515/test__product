import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';

import BaseSearchInput from '../../../../components/BaseSearchInput';
import { MENUBAR_ITEMS } from './constants';

import './styles.scss';
import { Colors } from '../../../../styles';
import PrimaryButton from '../../../../components/buttons/PrimaryButton';
import SecondaryButton from '../../../../components/buttons/SecondaryButton';

const styles = {
  button: {
    width: 45,
    height: 45,
    marginLeft: 15,
  },
  delivery: {
    color: Colors.Primary,
    marginLeft: 12
  }
};

function MenuBar() {
  return (
    <div id="menubar">
      <Container>
        {/* <div className="image-wrapper">
          <img src={require('../../../../assets/images/logo.png')} alt="logo"/>
        </div> */}
        <div className="menubar__links">
          <BaseSearchInput />
          {MENUBAR_ITEMS.map((item, itemIndex) => (
            <div className="menubar__link" key={itemIndex}>
              {item.title}
            </div>
          ))}
          <Paper variant="outlined" style={{background: Colors.Secondary}}>
            <span style={styles.delivery}>Delivery</span>
            <Switch defaultChecked color="default" />  
          </Paper>
          <PrimaryButton style={styles.button}>
            <AccountCircle />
          </PrimaryButton>
          <SecondaryButton style={styles.button}>
            <ShoppingCart />
          </SecondaryButton>
        </div>
      </Container>
    </div>
  )
}

export default MenuBar;
