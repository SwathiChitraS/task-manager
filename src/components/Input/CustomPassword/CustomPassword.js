import React from 'react';

import Style from './CustomPassword.module.css';

const customPassword = (props) => {
    return (
        <div className ={Style.CustomPassword}>
            <p>{props.Label}</p>
            <input type="password" onChange={props.OnChange} value={props.Value}></input>
        </div>
    );
}

export default customPassword;