import React from 'react';
import Burger from "../Burger/Burger";
import Button from '../UI/Button/Button';
import styles from './CheckoutSummary.module.css'

function CheckoutSummary(props) {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Burger summary</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnTye="Danger"
                clicked>CANCEL</Button>
            <Button
                btnTye="Success"
                clicked>CONTINUE</Button>
        </div>
    );
}

export default CheckoutSummary;