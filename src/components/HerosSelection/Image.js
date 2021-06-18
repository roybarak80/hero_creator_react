import React, { useState } from 'react';

const Image = props => {

    const { image } = props;
    const [imageLoading, setImageLoading] = useState(true);
    const heroPic = `https://frontend-interview-hero-63u64o32qq-uk.a.run.app${image}`

    const imageLoading_Error = () => {
        setImageLoading(false)
    }

    return (
        <div>

            <img className="hero-image" src={imageLoading
                ?
                `https://frontend-interview-hero-63u64o32qq-uk.a.run.app${image}`
                :
                `${window.location.origin}/assets/defaultImg.png`}
                onError={() => imageLoading_Error()}
            />

        </div>
    )
}

export default Image;