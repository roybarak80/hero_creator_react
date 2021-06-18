import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Helpers from '../../Helpers';

// UI libraries
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Components
import Heros from '../main/Heros';
import Skills from '../main/Skills';
import Result from '../main/Result';

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
    tabsPanel:{
        backgroundColor: '#425050'
    },
    centerBox:{display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'},

    indicator:{backgroundColor:"#f76a03"},
   
    
        ['@media only screen and (max-width : 768px)']: {
            tabsHeader:{position:"fixed"},
            centerBox:{marginTop:'64px'},
            tabsPanel:{height: 'calc(100vh - 64px)',overflow: 'auto'}
      }
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
          <Box className={classes.tabsPanel} p={3} >
            <Typography component="div" className={classes.centerBox}>{children}</Typography>
          </Box>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  

  const createSkillsInitObj = (skills)=>{
      
    let tempObj = {};
    for (let index = 0; index < skills.length; index++) {
        const element = skills[index].name;
        tempObj[element] = 0;
    }

    return tempObj 
  }

  const skillsInitVal = {
    Constitution:0,
    Dexterity:0,
    Charisma:0,
    Strength:0,
  }
  
export default function Main() {

  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const[herosData, setHerosData] = useState([]);
  const [selectedHero, setSelectedHero] = useState({});
  const [skills, setSkill] = useState(skillsInitVal);
  const [tabError, setTabError] = useState('');
  const skillsSum = !_.isEmpty(skills) ? _.values(skills).reduce((a,b)=>{return a +b }) : 0;

  useEffect(()=> {
    async function fetchHeros() {
        const response = await fetch('https://frontend-interview-hero-63u64o32qq-uk.a.run.app/heroes');
        const data = await response.json();
        setHerosData(data.heroes);
    }
    fetchHeros();
}, []);

    const selectTab = (event, index)=>{
       
        
        if(!_.isObject(event) && Number.isInteger(event)){
            index = event;
        }
        let tabName = tabs[index];
        switch (tabName.name) {
            case 'Heros':
                setSelectedTab(index);
                setSelectedHero({})
                break;
                case 'Skills':
                    if( !_.isEmpty(selectedHero)){
                        let skillsObj = createSkillsInitObj(selectedHero.skills)
                        setSkill(skillsObj)
                        setSelectedTab(index);
                        setTabError('')
                        
                    }else{
                        setTabError(tabName.tabError)
                    }
                break;
                case 'Result':
                    
              if(!_.isEmpty(selectedHero)  && skillsSum >=4){

                setSelectedTab(index);
                setTabError('')
                
              }else{
                setTabError(tabName.tabError)
              }

                    
                break;
        
            
        }
        
    }

    const selectHero = (heroObj)=>{
        setSelectedHero(heroObj);
        setTabError('')
    }

    const nextTab = (tabIndex)=>{
        selectTab(tabIndex)
    }

    const selectSkill = (event, newValue) => {
        if(event.currentTarget.attributes && event.currentTarget.attributes.length && event.currentTarget.attributes['data-tag']){
         let skillName = event.currentTarget.getAttribute('data-tag');
       
         let skillsKeys = Object.keys(skills)
         let newValueIndex = skillsKeys.indexOf(skillName);
       
         let currentValuesToCalc = Object.values(skills)
         let updatedSkills = Helpers.calcSkills(currentValuesToCalc, newValue, newValueIndex)
       
         Object.keys(skills).forEach(function(key, index){ 
            skills[key] = updatedSkills[index] 
         });
       
         let stateCopy = Object.assign({}, skills);
         stateCopy[skillName] = newValue
         setSkill(stateCopy)
         
        }
       
       };

        const tabs = [
        {
            name: 'Heros',
            tabDisplayName:'Class',
            available: false,
            component: (herosData.length ? 
            <Heros heros={herosData} buttonText={'Next'}
             tabText="Create Your Hero!"
             tabIndex={selectedTab}
             isDisabled={_.isEmpty(selectedHero)}
             onSelect={selectHero} tabError={tabError}
             nextButtonClick={nextTab}/> : '')
            
        },
        {
            name: 'Skills',
            tabDisplayName:'Skills',
            available: false,
            tabError:"Please select hero to continue",
            component: <Skills buttonText={'Finish'} 
            tabText="Fine Tune Your Skills!"
            tabIndex={selectedTab}
            tabError={tabError} 
            isDisabled={skillsSum === 0}
            skills={skills}
            onSelect={selectSkill}
            nextButtonClick={nextTab}
            />
        },
        {
            name: 'Result',
            tabDisplayName:'Result',
            tabError:"Please select skill to continue",
            available: false,
            component: <Result tabText="Your Hero Is Ready!" 
            tabData={[selectedHero, skills]}
            tabError={tabError} />
        },
        
    ]
    return (
     <div className={classes.root}>
      <AppBar position="static" className={classes.tabsHeader}>
        <Tabs classes={{ indicator: classes.indicator }} value={selectedTab} onChange={selectTab} centered>
          {tabs.map((item,i)=>(
            <Tab key={i} className={classes.tab}  label={item.tabDisplayName}  />
          ))}
          
        </Tabs>
      </AppBar>
      <TabPanel  value={selectedTab} index={selectedTab}>
      {tabs[selectedTab].component}
     </TabPanel>
    </div>
    )
}

// src/components => shareable components betwwen pages - in the best scenario between apps.
// src/routes -> src/pages => the application pages that should consume components </SwipeableViews>

{/* <Navigation tabs={[]} activeTab={activeTab} onClick={setActiveTab}/>
<SwipeableViews
axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
index={value}
onChangeIndex={handleChangeIndex}
>

<TabPanel value={value} index={0} dir={theme.direction}>
{!tabs[activeTab].available && <span> not available</span>}
{tabs[activeTab].available && tabs[activeTab].component}
</SwipeableViews> */}