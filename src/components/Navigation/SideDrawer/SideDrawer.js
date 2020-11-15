import React from 'react';

import Styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Parent from '../../../hoc/parent';

const sideDrawer = (props) => {
    return (
        <Parent>
            <Backdrop show={props.open} clicked={props.documentClick}></Backdrop>
            <div className={[Styles.SideDrawer, props.open ? Styles.Open : Styles.Close].join(' ')}>
                <div className={Styles.Logo}>
                    {/* <Logo></Logo> */}
                </div>
                <nav className={Styles.Navigation}>
                    <NavigationItem linkUrl="/add-item">Add New Item</NavigationItem>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Parent>

    );
};

export default sideDrawer;