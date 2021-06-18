import React, { useState, useEffect } from 'react';

const TabContainer = props => {

    return (
        <div>
{props.tabData.name}
<h2>{props.testing}</h2>

        </div>
    )
}

export default TabContainer;