import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

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

function SuccessModel(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button variant="outlined" color="primary" sx={{ display: 'none' }}
 onClick={handleClickOpen}>
        Open Modal
      </Button> */}
      <Dialog open={props.open} onClose={handleClose} className={classes.root}>
      <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor:'DarkSlateGray' }}>

        <DialogTitle className={classes.title} ><strong>Success</strong></DialogTitle>
       </Box>
        <DialogContent className={classes.content}>
          <p><strong>Patient Details Added Successfully</strong></p>
        </DialogContent>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <DialogActions className={classes.actions}>
          <Button
            variant="outlined"
            onClick={handleClose}
            color="primary"
            className={classes.button}
          >
            OK
          </Button>
     
        </DialogActions>
      </Box>
      </Dialog>
    </>
  );
}

export default SuccessModel;
