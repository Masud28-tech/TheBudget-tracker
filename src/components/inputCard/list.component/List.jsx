import {useContext} from 'react';
import { Avatar, IconButton, List as MuiList, ListItem, ListItemAvatar, ListItemText, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import {TransactionsContext} from '../../../context/transactionsContext';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const {transactions, deleteTransaction} = useContext(TransactionsContext);

    return (
        <MuiList className={classes.list}>
            {transactions && transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`} />
                        <ListItemAvatar>
                            <IconButton edge='end' aria-label='delete' onClick={() => deleteTransaction(transaction.id)}>
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