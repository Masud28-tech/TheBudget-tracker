import { useState, useContext, useEffect } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import { v4 as uuidv4 } from 'uuid';

import { TransactionsContext } from '../../../context/transactionsContext';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import useStyles from './styles';
import CustomAlert from '../../customAlert/CustomAlert';

const initialValues = {
    id: '',
    type: "",
    category: "",
    amount: 0,
    date: formatDate(new Date()),
}
const Form = () => {
    const classes = useStyles();
    const { segment } = useSpeechContext();
    const { addTransaction } = useContext(TransactionsContext);
    const [formData, setFormData] = useState(initialValues);
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const { type, category, amount, date, id } = formData;

    const selectedCategory = type === "Income" ? incomeCategories : expenseCategories;

    //CREATION OF TRANSACTIONS 
    const createTransaction = () => {
        if (Number.isNaN(Number(amount)) || !date.includes('-'))
            return;

        const transaction = { ...formData, amount: Number(amount), id: uuidv4(), date: formatDate(date) };
        addTransaction(transaction);
        setFormData(initialValues);
        setIsAlertOpen(true);
    }

    //B) USIGN SPEECH OR VOICE VIA SPEECHLY 
    useEffect(() => {
        if (segment) {
            if (segment.intent.intent === 'add_income') {
                setFormData({ ...formData, type: 'Income' });
            }
            else if (segment.intent.intent === 'add_expense') {
                setFormData({ ...formData, type: 'Expense' })
            }
            else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
                createTransaction();
            }
            else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
                return setFormData(initialValues);
            }

            segment.entities.forEach((e) => {
                switch (e.type) {
                    case 'amount':
                        setFormData({ ...formData, amount: e.value });
                        break;
                    case 'category':
                        const category = `${e.value.charAt(0)}${e.value.slice(1).toLocaleLowerCase()}`
                        if (incomeCategories.map((iC) => iC.type).includes(category)) {
                            setFormData({ ...formData, type: 'Income', category: category });
                        }
                        else if (expenseCategories.map((iC) => iC.type).includes(category)) {
                            setFormData({ ...formData, type: 'Expense', category: category });
                        }
                        break;
                    case 'date':
                        setFormData({ ...formData, date: e.value });
                        break;
                    default:
                        break;
                }
            });

            if (segment.isFinal && amount && category && type && date) {
                createTransaction();
            }
        }

    }, [segment])



    return (
        <Grid container spacing={2}>
            <CustomAlert open={isAlertOpen} setOpen={setIsAlertOpen} />
            
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    {
                        segment && segment.words.map((word) => word.value).join(" ")
                    }
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                        {
                            selectedCategory.map((c) => (
                                <MenuItem key={c.type} value={c.type}>
                                    {c.type}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label="Amount" fullWidth value={amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            </Grid>
            <Grid item xs={6}>
                <TextField type='date' label="Date" fullWidth value={date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            </Grid>
            <Button className={classes.button} fullWidth variant='outlined' color="primary" onClick={createTransaction}>
                Create
            </Button>
        </Grid>
    )
}

export default Form;