import React from 'react';
import {
  Button
} from '@material-ui/core';

function BaseButton({
  ...otherProps
}) {
  return (
    <Button {...otherProps}>Hello</Button>
  )
}

export default BaseButton;
