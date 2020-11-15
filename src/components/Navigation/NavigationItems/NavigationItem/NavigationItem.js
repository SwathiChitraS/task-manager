import React from 'react';
import  {NavLink} from 'react-router-dom';

import Styles from './NavigationItem.module.css';

const navigationItem = (props) => {
    return (
        <li className={Styles.NavigationItem}>
            <NavLink to={{
                pathname: props.linkUrl,
                search: props.Params,
                state: props.State
            }}
               className={props.active ? Styles.active : null}>{props.children}</NavLink>
        </li>
    );
}

export default navigationItem;