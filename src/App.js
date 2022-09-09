import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

import DetailsCard from './components/detailsCard/DetailsCard';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>

        <Grid item xs={12} sm={4}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          Main form
        </Grid>
        <Grid item xs={12} sm={4}>
          <DetailsCard title="Expence" />
        </Grid>
        
      </Grid>
    </div>
  )
}


export default App;