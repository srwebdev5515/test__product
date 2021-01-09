import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Facebook, Pinterest, Description } from '@material-ui/icons';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import PrimaryButton from '../buttons/PrimaryButton';
import { Colors } from '../../styles';

const styles = {
  paper: {
    padding: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  category: {
    color: Colors.Description,
    fontSize: 13,
  },
  brand: {
    color: Colors.Label,
    fontSize: 17,
    margin: '16px 0',
  },
  name: {
    color: Colors.Primary,
    fontSize: 21,
    fontWeight: 600,
    marginBottom: 20,
  },
  freeSampleWrapper: {
    display: 'flex',
    alignItems: 'center',
    color: Colors.Primary,
    fontSize: 13,
  },
  freeButton: {
    width: 48,
    height: 48,
    marginLeft: 10,
  },
  price: {
    color: Colors.Green,
    textAlign: 'right',
  },
  totalPrice: {
    color: Colors.Green,
    fontSize: 25,
    textAlign: 'right',
  },
  totalBricks: {
    color: Colors.Label,
    textAlign: 'right',
  },
  totalPriceWrapper: {
    marginTop: 20,
    padding: '20px 0',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: 'solid',
    borderColor: Colors.Border
  },
  btnAddToCart: {
    padding: 12,
    width: '100%'
  }
}

const ProductDetails = ({ product }) => {
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState('')
  const [unit, setUnit] = useState('')
  const [totalPrice, setTotalPrice] = useState(8940.9)
  const [totalBricks, setTotalBricks] = useState(8500)

  const handleSizeChange = (evt) => {
    setSize(evt.target.value)
  }

  const handleQuantityChange = (evt) => {
    setQuantity(evt.target.value)
  }

  const handleUnitChange = (evt) => {
    setUnit(evt.target.value)
  }

  return (
    <Paper variant="outlined" style={styles.paper}>
      <div style={styles.header}>
        <div>
          <div style={styles.category}>{product.category}</div>
          <div style={styles.brand}>{product.brand}</div>
          <div style={styles.name}>{product.name}</div>
        </div>
        <div style={styles.freeSampleWrapper}>
          <span>Free Sample</span>
          <PrimaryButton style={styles.freeButton}>
            <Description fontSize="large" />
          </PrimaryButton>
        </div>
      </div>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={7}>
          <FormControl variant="outlined" className="form-control">
            <InputLabel htmlFor="size">Size</InputLabel>
            <Select
              value={size}
              onChange={handleSizeChange}
              label="Size"
              placeholder="Choose a size"
              inputProps={{
                name: 'size',
                id: 'size',
              }}
            >
              {product.sizes.map((size, idx) => (
                <MenuItem value={size} key={idx}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          1/Brick
        </Grid>
        <Grid item md={3} style={styles.price}>
          ${product.minPrice} - ${product.maxPrice}
        </Grid>
        <Grid item md={2}>
          <TextField
            id="quantity"
            label="Qty"
            variant="outlined"
            onChange={handleQuantityChange}
            className="form-control"
          />
        </Grid>
        <Grid item md={5}>
          <FormControl variant="outlined" className="form-control">
            <InputLabel htmlFor="unit">Unit</InputLabel>
            <Select
              native
              value={unit}
              onChange={handleUnitChange}
              label="Unit"
              placeholder="Choose Unit of Measure"
              inputProps={{
                name: 'unit',
                id: 'unit',
              }}
            ></Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          Total:
        </Grid>
        <Grid item md={3} style={styles.totalBricks}>
          {totalBricks} Bricks
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" style={styles.totalPriceWrapper}>
        <Grid item md={7}>
          <p className="text-secondary">
            Manufacturer Production Lead Time: <span className="text-primary">Thu Dec 10 2020</span>
          </p>
          <p className="text-secondary">
            Earliest Pick up or Delivery: <span className="text-primary">Dec 10 2020</span>
          </p>
        </Grid>
        <Grid item md={2}>
          Total Price:
        </Grid>
        <Grid item md={3} style={styles.totalPrice}>
          $ {totalPrice}
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="flex-end" style={{marginTop: 30}}>
        <Grid item md={7}>
          Share on: <Facebook /> <Pinterest />
        </Grid>
        <Grid item md={5} className="text-right">
          <p>
            Shipping Calculated in Cart
          </p>
          <PrimaryButton style={styles.btnAddToCart}>
            Add to Cart
          </PrimaryButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductDetails
