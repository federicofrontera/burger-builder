import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavigationItem.module.css'

function NavigationItem(props) {
    return (
        <li className={styles.NavigationItem}>
            <NavLink to={props.link}
                     exact={props.exact}
                     activeClassName={styles.active}>
                {props.children}
            </NavLink>
        </li>
    );
}

export default NavigationItem;