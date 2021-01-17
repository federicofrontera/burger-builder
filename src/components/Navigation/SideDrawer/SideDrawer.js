import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from './SideDrawer.module.css'
import Auxiliary from "../../../hoc/Auxiliary";

function SideDrawer(props) {
    let classes = [styles.SideDrawer, styles.Close];
    if (props.show){
        classes =[styles.SideDrawer, styles.Open];
    }

    return (
        <Auxiliary>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={classes.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>
    );
}

export default SideDrawer;