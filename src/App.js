import React from 'react';
import { Grid } from '@material-ui/core';
import { PushToTalkButtonContainer, PushToTalkButton } from '@speechly/react-ui';
import useStyles from './styles';

import DetailsCard from './components/detailsCard/DetailsCard';
import InputCard from './components/inputCard/InputCard';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>

        <Grid item xs={12} sm={3} className={classes.mobile}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.main}>
          <InputCard />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <DetailsCard title="Expence" />
        </Grid>

      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
  )
}


export default App;