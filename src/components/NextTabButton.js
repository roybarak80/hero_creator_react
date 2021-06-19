import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },

  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px'
  },
  buttonClass: {
    background: '#f76a03',
    '&:hover': {
      background: '#ff8831',
    },
    ['@media only screen and (max-width : 768px)']: {
      width: '100%'
    }
  }
}));

const NextTabButton = props => {

  const classes = useStyles();
  const { onClick, isDisabled, buttonText } = props;
  return (
    <div className={classes.buttonWrapper}>
      <Button variant="contained"
        disabled={isDisabled} className={classes.buttonClass} onClick={onClick}>
        {buttonText}
      </Button>
    </div>

  )
}

export default NextTabButton;