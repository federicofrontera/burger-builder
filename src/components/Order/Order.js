import React from 'react';
import styles from './Order.module.css'

function Order(props) {
    return (
        <div className={styles.Order}>
            <p>Ingredients: </p>
            <p>Price: <strong>5</strong></p>
        </div>
    );
}

export default Order;