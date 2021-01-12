import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},
    {label: 'Bacon', type: 'bacon'}
];


const buildControl = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: {props.total_price.toFixed(2)}</p>

            {controls.map((ctrl) => <BuildControl key={ctrl.label} label={ctrl.label}
                                                  added={() => props.ingredientAdded(ctrl.type)}
                                                  removed={() => props.ingredientRemove(ctrl.type)}
                                                  disabled={props.disabled[ctrl.type]}
                                            />)}

            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>
                ORDER NOW
            </button>
        </div>
    );
}

export default buildControl;