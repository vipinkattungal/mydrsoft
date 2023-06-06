import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import  {Button} from '@mui/material';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 400,
  },
}));

const Note = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Doctor's Note
      </Typography>
      
    
      <Button variant="contained" >
        Add Note
      </Button>

      <Paper elevation={3} className={classes.paper}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate, enim eu sagittis bibendum, justo magna
          lacinia nulla, in ultrices nisi neque sit amet ante.
        </Typography>
      </Paper>
    </div>
  );
};

export default Note;
