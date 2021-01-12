import React, {Fragment} from "react";
import Button from './../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        (igKey) => <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}</li>
    );


    return (
        <Fragment>
            <h3>Your Order is</h3>
            <p>a delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
        </Fragment>
    );
}

export default orderSummary