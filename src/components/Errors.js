import React, { useState, useEffect } from 'react';
const Errors = props => {


    const [userErrors, setError] = useState()
    return (
        <div>
<h5>{JSON.stringify(userErrors)}</h5>
        </div>
    )
}

export default Errors;