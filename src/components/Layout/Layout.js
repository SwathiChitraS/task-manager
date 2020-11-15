import React, { Component } from 'react';

import Parent from '../../hoc/parent';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosed = () => {
        // var show = this.state.showSideDrawer;
        // this.setState({showSideDrawer:!show});
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    };

    render() {
        return (
            <Parent>
                <div>
                    {/* <ToolBar click={this.sideDrawerClosed}></ToolBar> */}
                    {/* <SideDrawer open={this.state.showSideDrawer} documentClick={this.sideDrawerClosed}></SideDrawer> */}
                    {/* <p>Backdrop</p> */}
                </div>
                <content className={classes.Content}>
                    {this.props.children}
                </content>
            </Parent>
        );
    }
}

export default Layout;