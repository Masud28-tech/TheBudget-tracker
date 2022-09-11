import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const CustomAlert = ({ open, setOpen }) => {

    const handleClose = (e, reason) => {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <MuiAlert
                onClose={handleClose}
                severity="success"
                variant='filled'
                elevation={6}
            >
                Transaction created successfully.
            </MuiAlert>
        </Snackbar>
    );
}

export default CustomAlert;