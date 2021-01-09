import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Colors } from '../../styles/colors';

const useStyles = makeStyles({
  root: {
    background: Colors.Secondary,
    border: 0,
    borderRadius: 8,
    color: 'white',
    minWidth: 'unset'
  },
});

const PrimaryButton = (props) => {
  const classes = useStyles();
  return <Button {...props} className={classes.root}>
    {props.children}
  </Button>;
};

export default PrimaryButton;
