import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Cheese", type: "cheese"},
    {label: "Cheese", type: "cheese"},
    {label: 'Bacon', type: 'bacon'}
];


const buildControl = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map((ctrl) => <BuildControl key={ctrl.label} label={ctrl.label} />)}
        </div>
    );
}

export default buildControl;