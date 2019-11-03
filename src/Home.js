import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }

}));

export default function Home() {

  const classes = useStyles();

  return (<Paper className={classes.root}>

    <Typography variant="h2" component="h2">
      Welcome
    </Typography>

    <Typography component="p">
      My name is
      <Typography component="h5" variant="h5">
        Panchajanya Mysarla
      </Typography>
      and I am a  programming enthusiast


    </Typography>

  </Paper>)
}
