import React from 'react';

import Style from './CustomTextArea.module.css';

const customTextArea = (props) => {
    return (
        <div className ={Style.CustomTextarea}>
            <p>{props.Label}</p>
            <textarea onChange={props.OnChange} value={props.Value} disabled={props.Disabled}></textarea>
        </div>
    );
}

export default customTextArea;