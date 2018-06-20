import React from 'react';

import style from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';

const toolbar = () => (
    <header className={style.Toolbar}>
      <div>MENU</div>
        <Logo/>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;