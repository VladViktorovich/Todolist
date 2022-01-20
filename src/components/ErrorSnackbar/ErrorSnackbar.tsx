import React, {useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppSelector} from '../../state/store';
import {useDispatch} from 'react-redux';
import {setAppErrorAC} from '../../state/app-reducer';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
    // const [open, setOpen] = useState(true);

    const isError = useAppSelector<string | null>(state => state.app.isError)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppErrorAC(null))
        // setOpen(false);
    };

    return (
        <Snackbar open={isError !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {isError}
            </Alert>
        </Snackbar>
    );
}
