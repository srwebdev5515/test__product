import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const tabs = ['description', 'specification', 'review'];
const styles = {
  emptyWrapper: {
    minHeight: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab: {
    textTransform: 'capitalize',
    textAlign: 'center',
    padding: 30,
    cursor: 'pointer'
  }
};

const ProductDescription = ({ product }) => {
  const [tab, setTab] = useState(tabs[0])

  return (
    <>
      <Paper variant="outlined">
        <Grid container spacing={2}>
          {tabs.map((tab) => (
            <Grid
              item
              xs={4}
              onClick={() => setTab(tab)}
              key={tab}
              style={styles.tab}
            >
              {tab}
            </Grid>
          ))}
        </Grid>
      </Paper>
      {
        product[tab] ? <p>{product[tab]}</p> : <div style={styles.emptyWrapper}>No {tab} for this product</div>
      }
    </>
  )
}

export default ProductDescription
