import React from 'react';

import Style from './CustomDateInput.module.css';

const customDateInput = (props) => {
    return (
        <div className ={Style.CustomDateInput}>
            <p>{props.Label}</p>
            <input type="date" onChange={props.OnChange} value={props.Value} disabled={props.Disabled}></input>
        </div>
    );
}

export default customDateInput;