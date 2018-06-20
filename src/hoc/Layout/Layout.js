import React, { Component } from 'react';
import Aux from '../ReactAux/ReactAux.js';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import style from './Layout.css';
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  };


  render () {
    return (
       <Aux>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
      <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
      <main className={style.Content}>
        {this.props.children}
      </main>
    </Aux>
    )
  }
}

export default Layout;