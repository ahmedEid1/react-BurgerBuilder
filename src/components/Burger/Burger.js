import React from 'react';

import BurgerIngredient from "./BurgerIgredient/BurgerIngerdient";
import classes from './Burger.module.css'

const burger = (props) => {

    let ingredientsArr = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    }).reduce((arr, el) => arr.concat(el), [])


    if (ingredientsArr.length === 0)
        ingredientsArr = <p>Start adding Ingredients</p>

    return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top"/>
          {ingredientsArr}
          <BurgerIngredient type="bread-bottom"/>
      </div>
    );
}


export default burger;