import Image from '../HerosSelection/Image';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';

const useStyles = makeStyles(() => ({

    heroItem: {
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },

    heroName: {
        width: '100%',
        padding: '10px',
        borderBottom: '1px solid #f76a03',
        marginBottom: '10px',
        backgroundColor: '#272b2b',
        fontFamily: 'Exo',
        color: '#fff',
        overflow: 'hidden',

    },

    heroNameTitle: {
        fontWeight: 'bold',
        fontSize: 'larger',
        padding: '10px',
        borderBottom: '1px solid #f76a03',
        marginBottom: '15px',
    },
    heroInfoWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
       
    },
    
    ['@media only screen and (max-width : 768px)']: {
        heroItem: {
            width: '100%',
        },
    }

}));

const HeroItem = props => {
    const classes = useStyles();
    const { isSingleItem, skills, hero } = props;
    const skillNames = skills && _.isObject(skills) && !_.isEmpty(skills) ? _.keys(skills) : [];
    const styles = { button: { cursor: 'pointer', testAlign: 'center' } }
    const buttonMarkup = <div onClick={() => props.onSelect(hero)} style={styles.button} className={classes.heroItem}>
        <div className={classes.heroName} >{hero.name}</div>
        <Image image={hero.image} />
    </div>

    const singleItemMarkUp = <div className={classes.heroItem}>
        <div className={classes.heroName}>
            <div className={classes.heroNameTitle}>{hero.name}</div>
            <div className={classes.heroInfoWrapper}>
                <ul style={{listStyleType: 'none', padding:'0px'}}>
                    {skillNames.map((item, i) => (
                        <li key={i}> <span style={{ fontWeight: 'bold' }}>{skills[item]}% </span>{item}</li>
                    ))}
                </ul>
                <Image image={hero.image} />

            </div>
        </div>

    </div>

    return !isSingleItem ? buttonMarkup : singleItemMarkUp
}

export default HeroItem;