import { useContext } from 'react';
import { Card, CardHeader, CardContent, Divider, Typography, Grid } from '@material-ui/core';
import { TransactionsContext } from '../../context/transactionsContext';
import useStyles from './styles';

import Form from './form.component/Form';
import List from './list.component/List';
import InfoSpeech from './infoSpeech.component.jsx/InfoSpeech';

const InputCard = () => {
    const classes = useStyles();
    const { totalBalance } = useContext(TransactionsContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Budget Tracker" subheader="Created by Masud" />
            <CardContent>
                <Typography align='center' variant='h5'>
                    Total Balance ₹{totalBalance}
                </Typography>
                <Typography
                    variant='subtitle1'
                    style={{ lineHeight: '1.5em', marginTop: '20px' }}
                >
                    <InfoSpeech />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default InputCard;