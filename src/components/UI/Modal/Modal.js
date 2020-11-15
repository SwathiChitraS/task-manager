import React from 'react';

import styles from './Modal.module.css';
import Parent from '../../../hoc/parent';
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
   return(
       <Parent>
           <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
            <div className={styles.Modal} 
            style ={{
            transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
       </Parent>
   )
}

export default modal;