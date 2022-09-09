import React from 'react';
import { Avatar, IconButton, List as MuiList, ListItem, ListItemAvatar, ListItemText, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const transactions = [
        { id: '1', category: 'Income', amount: '2000', date: "09-09-2022" },
        { id: '2', category: 'Expence', amount: '500', date: "10-09-2022" }
    ];

    return (
        <MuiList>
            {transactions.map((transaction) => (
                <Slide direction='down' in moinOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.category === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemAvatar>
                            <IconButton edge='end' aria-label='delete' onClick=''>
                                <Delete />
                            </IconButton>
                        </ListItemAvatar>
                    </ListItem>
                </Slide>
            ))}
        </MuiList>
    )
}

export default List;