import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from "./NagiationItem/NavigationItem";

function NavigationItems(props) {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" exact >Burger Builder</NavigationItem>
            {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
            {!props.isAuthenticated
                ? <NavigationItem link="/auth">Authenticate</NavigationItem>
                : <NavigationItem link="/logout">Logout</NavigationItem>}
        </ul>
    );
}

export default NavigationItems;