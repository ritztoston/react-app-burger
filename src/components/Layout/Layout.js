import React from 'react';
import Aux from '../../hoc/ReactAux.js';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import style from './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={style.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;