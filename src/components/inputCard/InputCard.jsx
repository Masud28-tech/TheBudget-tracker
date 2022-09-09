import React from 'react';
import { Card, CardHeader, CardContent, Divider, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

import Form from './form.component/Form';
import List from './list.component/List';

const InputCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Budget Tracker" subheader="Build on speechly" />
            <CardContent>
                <Typography align='center' variant='h5'>
                    Total Balance $500
                </Typography>
                <Typography
                    variant='subtitle1'
                    style={{ lineHeight: '1.5em', marginTop: '20px' }}
                >
                    Try saying: Add income $100 in Category Salary for Monday...
                </Typography>
                <Divider />
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