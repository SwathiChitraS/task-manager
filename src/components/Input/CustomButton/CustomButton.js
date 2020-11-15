import React from 'react';

import Style from './CustomButton.module.css';
// import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

const customButton = (props) => {
    return (
        <div className={Style.CustomButton} style={props.CustomStyle}>
            <button onClick={props.OnClick} disabled={props.Disabled}>{props.children}</button>
            {/* <NavigationItem linkUrl="/search" Params={"date=" + this.state.today} State={this.state.today}>{props.children}</NavigationItem> */}
        </div>
    );
}
// {props.CustomStyle}
export default customButton;