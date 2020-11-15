import React from 'react';

import Style from './CustomSelect.module.css';

const customSelect = (props) => {
    let options = [];
    for(let option of props.Options){
        options.push(<option key={option.value} value={option.value}>{option.value}</option>);
    }
    return (
        <div className={Style.CustomSelect}>
            <p>{props.Label}</p>
            <select onChange={props.OnChange} value={props.Value} disabled={props.Disabled}>
                {
                   options 
                }
            </select>
        </div>
    );
}

export default customSelect;