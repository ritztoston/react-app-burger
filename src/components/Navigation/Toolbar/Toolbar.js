import React from 'react';
import style from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={style.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      <div className={style.Logo}>
        <Logo/>
      </div>

        <nav className={style.DesktopOnly }>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;