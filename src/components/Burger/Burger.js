import React from 'react';
import styles from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const Burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);
    if(ingredientsArray.length === 0){
        ingredientsArray = <p>Please add ingredients</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;
