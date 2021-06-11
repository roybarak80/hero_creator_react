import React, { useState } from 'react';

const Image = props => {

    const { image } = props;
    const [imageLoading, setImageLoading] = useState(true);
    const heroPic = `https://frontend-interview-hero-63u64o32qq-uk.a.run.app${image}`

    console.log(imageLoading);

    const imageLoading_Error = () => {
        setImageLoading(false)
    }

    return (
        <div>

            <img className="hero-image" src={imageLoading
                ?
                `https://frontend-interview-hero-63u64o32qq-uk.a.run.app${image}`
                :
                `${window.location.origin}/assets/default.png`}
                onError={() => imageLoading_Error()}
            />

        </div>
    )
}

export default Image;