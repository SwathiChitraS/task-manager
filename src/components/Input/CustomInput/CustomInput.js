import React from 'react';

import Style from './CustomInput.module.css';

const customInput = (props) => {
    return (
        <div className ={Style.CustomInput}>
            <p>{props.Label}</p>
            <input type="text" onChange={props.OnChange} value={props.Value} disabled={props.Disabled}></input>
        </div>
    );
}

export default customInput;