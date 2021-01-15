import React, {Fragment} from 'react'
import NavItems from "../NavItems/NavItems";
import Logo from '../../../Logo/Logo'
import classes from './SideDrawer.module.css'
import Backdrop from './../../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close];

    return (
        <Fragment>
            <Backdrop  show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Fragment>

    );
};

export default sideDrawer;