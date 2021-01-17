import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from "./NagiationItem/NavigationItem";

function NavigationItems(props) {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
}

export default NavigationItems;