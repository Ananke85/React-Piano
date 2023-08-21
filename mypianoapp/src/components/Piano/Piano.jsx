import React from 'react';
import styles from './piano.module.css';
import WhiteKeys from '../WhiteKeys/whiteKeys';
import BlackKeys from '../BlackKeys/BlackKeys';
import Keyboard from '../Keyboard/Keyboard';

const Piano = () => {
    return (
        <div className={styles.piano}>
            {/* <h2>Play with music</h2> */}
            <Keyboard />
            <WhiteKeys />
            <BlackKeys />
            
        </div>
    );
};


export default Piano;