import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const DetailsCard = ({title}) => {
    const classes = useStyles();

    return (
        <Card className={title === 'Income' ? classes.income : classes.expence}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>$500</Typography>
                {/* <Doughnut data={} /> */}
            </CardContent>
        </Card>
    );
}


export default DetailsCard;