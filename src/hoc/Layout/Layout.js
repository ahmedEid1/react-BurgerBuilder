import React, {Fragment, Component} from 'react'
import classes from './Layout.module.css'
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggledHandler = () => {
        this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}))
    }


    render() {
        return (
            <Fragment>
                <Toolbar drawToggleClicked={this.sideDrawerToggledHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.main}>
                    {this.props.children}
                </main>
            </Fragment>);
    };
}

export default Layout;