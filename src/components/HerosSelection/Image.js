import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    heroImage: {
        width: 'auto',
        height: '200px',
        borderRadius: '10px',
        backgroundColor: '#fff'
    }
}));

const Image = props => {

    const classes = useStyles();
    const { image } = props;
    const [imageLoading, setImageLoading] = useState(true);
    const imageLoading_Error = () => {
        setImageLoading(false)
    }

    return (
        <>
            <img className={classes.heroImage} src={imageLoading
                ?
                `https://frontend-interview-hero-63u64o32qq-uk.a.run.app${image}`
                :
                `${window.location.origin}/assets/defaultImg.png`}
                onError={() => imageLoading_Error()}
            />
        </>
    )
}

export default Image;