import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";

function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>Nice burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Auxiliary>

    );
}

export default OrderSummary;