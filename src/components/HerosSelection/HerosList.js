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
    border:'2px solid',
    borderColor:'#f76a03',
    borderRadius:'10px',
    transition: "background 0.5s, color 1s",
    '&:hover': {
      backgroundColor: '#e8ecec',
   },
  },
}));

const HerosList = props => {
  const classes = useStyles();
   return <div className={classes.root}>
           <Grid container spacing={3}>
   {props.heros.map((item, i) => (
          <Grid key={ i} item xs={12} sm={12 / (props.heros.length)}>
            <Paper className={classes.paper}><HeroItem key={i} hero={item} isSingleItem={false} onSelect={props.onSelect}/></Paper>
           </Grid>
         ))}
         </Grid>
       </div>

}

export default HerosList;