import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';

import PrimaryButton from '../buttons/PrimaryButton';

const styles = {
  materialWrapper: {
    fontSize: 14,
    lineHeight: 1.5,
  },
  btnViewDetails: {
    padding: 12,
    width: '100%',
  }
};

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.images[0]}
        title={product.name}
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h5">
              {product.category}
            </Typography>
          </Grid>
          <Grid item xs={6} className="text-right" style={styles.materialWrapper}>
            <div>
              Material:
            </div>
            <div className="text-primary">
              {product.material}
            </div>
          </Grid>
        </Grid>
        <p>
          {product.name}
        </p>
        <p>
          Manufacturer: {product.manufacturer}
        </p>
        <p>
          Available Size: {product.sizes.join(', ')}
        </p>
        <p className="text-secondary">
          Turn Location on to view prices in your region
          <CheckCircle style={{float: 'right'}} />
        </p>
      </CardContent>
      <CardActions>
        <PrimaryButton style={styles.btnViewDetails}>
          View Details
        </PrimaryButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard
