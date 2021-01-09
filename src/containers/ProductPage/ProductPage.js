import React, { useState } from 'react';
import { ProductMock, RelatedProductsMock } from './constants';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ProductImages from '../../components/product/ProductImages';
import ProductDetails from '../../components/product/ProductDetails';
import ProductDescription from '../../components/product/ProductDescription';
import ProductCard from '../../components/product/ProductCard';
import { Typography } from '@material-ui/core';

function ItemPage() {
  const [product, setProduct] = useState(ProductMock)

  return (
    <Container style={{padding: 20}}>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <ProductImages product={product} />
        </Grid>
        <Grid item md={7}>
          <ProductDetails product={product} />
        </Grid>
      </Grid>
      <div style={{margin: '20px 0'}}>
        <ProductDescription product={product} />
      </div>
      <div>
        <Typography variant="h6" style={{margin: '20px 0'}}>
          Related products
        </Typography>
        <Grid container spacing={6}>
          {RelatedProductsMock.map((p, idx) => (
            <Grid item md={4} xs={12} key={idx}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}

export default ItemPage;
