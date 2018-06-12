import React from 'react';
import Aux from '../../hoc/ReactAux.js';
import style from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={style.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;