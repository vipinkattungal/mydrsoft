import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      '& .MuiDialog-paper': {
        margin: '0',
        maxWidth: '100%',
        width: '100%',
      },
    },
  },
  title: {
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  content: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 1),
    },
  },
}));

function ConfirmationModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" sx={{ display: 'none' }}
 onClick={handleClickOpen}>
        Open Modal
      </Button>
      <Dialog open={open} onClose={handleClose} className={classes.root}>
        <DialogTitle  className={classes.title}>Confirmation</DialogTitle>
        <DialogContent className={classes.content}>
          <p>Are you sure you want to perform this action?</p>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button
            variant="outlined"
            onClick={handleClose}
            color="primary"
            className={classes.button}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            color="primary"
            className={classes.button}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ConfirmationModal;
