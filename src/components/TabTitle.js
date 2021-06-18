import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    tabTitleText: {
        fontFamily: 'Exo',
        fontSize: 'x-large',
        fontWeight: '800',
        color:'#fff'
    },

    tabErrorText: {
        fontFamily: 'Exo',
        fontSize: 'large',
        fontWeight: 'bold',
        marginBottom: '20px',
        color:'red'
    },

}));

const TabTitle = props => {

    const classes = useStyles();
    const {tabError, tabText} = props;

    return (
        <>
            <span className={classes.tabTitleText}>{tabText}</span>
            <span className={classes.tabErrorText}>{tabError.length ? <span className="tab-error-text">{tabError}</span> : ''}</span>
        </>
    )
}

export default TabTitle;