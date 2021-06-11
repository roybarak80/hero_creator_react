import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import HerosList from '../HerosSelection/HerosList'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
        <Box p={3} >
          <Typography component="div" className="center-box">{children}</Typography>
        </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
  tabsHeader:{backgroundColor:"#181f1f", color:"#f76a03"},
  tab: {fontFamily:'Exo' ,fontSize: '30px'},
  label: {
      backgroundColor: '#aa0',
      fontSize: '50px'
  },
  indicator:{backgroundColor:"#f76a03"}
}));

export default function TabsWrapper() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const[herosData, setHerosData] = useState([]);
  const [selectedHero, setSelectedHero] = useState({});

  useEffect(()=> {
    async function fetchHeros() {
        const response = await fetch('https://frontend-interview-hero-63u64o32qq-uk.a.run.app/heroes');
        const data = await response.json();
        setHerosData(data.heroes);
    }
    fetchHeros();
}, []);

  console.log(herosData);
  const handleChange = (event, newValue) => {
      if(!selectedHero || !Object.keys(selectedHero).length){
          return
      }else{

        setValue(newValue);
      }
    
  };

  function handleSelect(hero){
    setSelectedHero(hero)
    console.log(selectedHero)
}
const handleChangeIndex = (index) => {
  setValue(index);
};


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabsHeader}>
        <Tabs classes={{ indicator: classes.indicator }} value={value} onChange={handleChange} centered>
          <Tab className={classes.tab}  label="Class"  />
          <Tab className={classes.tab} label="Skills"  />
          <Tab className={classes.tab} label="Result" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <span className="tab-title">Create Your Hero</span>
          <HerosList heroes={herosData} onSelect={handleSelect}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <span className="tab-title">Fine Tune Your Skills</span>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <span className="tab-title">Your Hero Is Ready!</span>
        </TabPanel>
      </SwipeableViews>

     
    </div>
  );
}