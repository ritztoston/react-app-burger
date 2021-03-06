import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/ReactAux/ReactAux';

const sideDrawer = ( props ) => {
  let attachedClasses = [style.SideDrawer, style.Close];
  if (props.open) {
    attachedClasses = [style.SideDrawer, style.Open];
  }
  return (
     <Aux>
       <Backdrop show={props.open} clicked={props.closed}/>
       <div className={attachedClasses.join(' ')}>
         <div className={style.Logo}>
           <Logo />
         </div>
         <nav>
           <NavigationItems />
         </nav>
       </div>
     </Aux>
  );
};

export default sideDrawer;