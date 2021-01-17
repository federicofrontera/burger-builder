import React from 'react';
import styles from './Toolbar.module.css'
import Logo from "../../Logo/Logo";

function Toolbar(props) {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav>
                <ul>Links</ul>
            </nav>
        </header>
    );
}

export default Toolbar;