import React from 'react';
import styles from './Modal.module.css';
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
       return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={styles.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Auxiliary>

        );
    }
}

export default Modal;