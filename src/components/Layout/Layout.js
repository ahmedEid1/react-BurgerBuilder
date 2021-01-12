import React, {Fragment} from 'react'
import classes from './Layout.module.css'
import Toolbar from './../UI/Navigation/Toolbar/Toolbar'

const layout = (props) => (
  <Fragment>
      <Toolbar></Toolbar>
      <main className={classes.main}>
          {props.children}
      </main>
  </Fragment>
);

export default layout;