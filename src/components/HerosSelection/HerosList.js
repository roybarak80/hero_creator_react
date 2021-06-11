import React, { useState, useEffect } from 'react';
import HeroItem from './HeroItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const HerosList = props => {
  const classes = useStyles();
   return <div className={classes.root}>
           <Grid container spacing={3}>
   {props.heroes.map((item, i) => (
          <Grid item xs={12} sm={12 / (props.heroes.length)}>
            <Paper className={classes.paper}><HeroItem key={i} hero={item} onSelect={props.onSelect}/></Paper>
           </Grid>
         ))}
         </Grid>
       </div>

}

export default HerosList;