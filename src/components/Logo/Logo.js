import React from 'react';

import Styles from './Logo.module.css';
// import ToDo from '../../assets/Images/ToDo.jpg'

const logo = (props) => (
    <div className={Styles.Logo} style={{width : props.width, height : props.height}}>
        {/* <img src={ToDo} alt="ToDo Logo"></img> */}
    </div>
);

export default logo;