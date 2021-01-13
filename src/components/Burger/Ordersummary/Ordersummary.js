import React, {Fragment, Component} from "react";
import Button from './../../UI/Button/Button'

class OrderSummary extends Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('the OrderSummary did update');
    }


    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey) => <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}</li>
        );

        return (

            <Fragment>
                <h3>Your Order is</h3>
                <p>a delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
            </Fragment>
        );
    }


}

export default OrderSummary