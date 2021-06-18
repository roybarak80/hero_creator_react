import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, formatMs } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300 + theme.spacing(3) * 2,
        color:'#fff',
        '& p':{fontFamily:'Exo'}
    },
    margin: {
        height: theme.spacing(3),
    },
    
}));

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};



const SkillsSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
        
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
        
        
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        
        color:'#181f1f'
        
    },
    track: {
        height: 8,
        borderRadius: 4,
        color:'#f76a03',
        
    },
    rail: {
        height: 8,
        borderRadius: 4,
        color:'#f76a03'
    },
})(Slider);


const SkillsWrapper = props => {
    const classes = useStyles();
    const sliderNames = Object.keys(props.skills);
    
    return (
        <div className={classes.root}>

            {sliderNames.map((itemValue, i) => (
                <div key={i}>
                    <Typography gutterBottom>{itemValue}</Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <SkillsSlider onChange={props.changeSkill}  value ={props.skills[itemValue]} data-tag={itemValue} valueLabelDisplay="auto" aria-label="Skills Slider" defaultValue={0} />
                        </Grid>
                        <Grid item>
                            {props.skills[itemValue]}
                        </Grid>
                    </Grid>
                </div>
            ))}
        </div>
    );
}
export default SkillsWrapper;