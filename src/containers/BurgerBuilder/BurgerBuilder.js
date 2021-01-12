import React, {Component, Fragment} from 'react';

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary'

const INGREDIENT_PRICES = {
    salad: 2,
    cheese: 1,
    meat: 4,
    bacon: 1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0,
        },
        total_price: 4,
        purchasable: false,
    }

    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map((igKey) => ingredients[igKey]).reduce((sum, el) => sum + el ,0)

        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type];
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = oldValue + 1;
        const newPrice = this.state.total_price + INGREDIENT_PRICES[type];

        this.setState({total_price: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    };


    removeIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type];
        if (oldValue <= 0){
            return
        }
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = oldValue - 1;
        const newPrice = this.state.total_price - INGREDIENT_PRICES[type];

        this.setState({total_price: newPrice, ingredients: updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    };


    render() {
        const disableInfo = {...this.state.ingredients};
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Fragment>
                <Modal>
                    <Ordersummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemove={this.removeIngredientHandler}
                               purchasable={this.state.purchasable}
                               disabled={disableInfo}
                               total_price={this.state.total_price}
                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;