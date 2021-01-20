import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }


    /*    componentDidMount() {
            const query = new URLSearchParams(this.props.location.search);
            const ingredients = {};
            let price = 0;
            for (let param of query.entries()) {
                if(param[0] === 'price'){
                    price = param[1];
                }else{
                    ingredients[param[0]] = +param[1];

                }
            }
            this.setState({ingredients: ingredients, totalPrice: price})
        }*/

    static getDerivedStateFromProps(props, state) {
        if (props.location.search && !state.ingredients) {
            console.log(state);
            const query = new URLSearchParams(props.location.search);
            const ingredients = {};
            let price = 0;
            for (let param of query.entries()) {
                if (param[0] === 'price') {
                    price = param[1];
                } else {
                    ingredients[param[0]] = +param[1];

                }
            }
            return {ingredients: ingredients, totalPrice: price};
        } else {
            return null;
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    render={() => (<ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        {...this.props}/>)}
                />
            </div>
        );
    }
}

export default Checkout;