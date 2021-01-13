import React from 'react'
import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem'

const navItem = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" active>Burger Builder</NavItem>
        <NavItem link="/" >Check Out</NavItem>
    </ul>
);


export default navItem;