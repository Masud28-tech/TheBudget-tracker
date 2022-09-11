import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useTransactions from '../../utils/useTransactions';

import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const DetailsCard = ({title}) => {
    const classes = useStyles();
    const {chartData, total} = useTransactions(title);

    return (
        <Card className={title === 'Income' ? classes.income : classes.expence}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>₹{total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    );
}


export default DetailsCard;