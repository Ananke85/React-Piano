import { useState } from 'react';
import styles from './whiteKeys.module.css';

const WhiteKeys = () => {
    const whiteNotes = ['DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI'];
    
    return (
        <div className={styles.whiteKeys}>

            {whiteNotes.map((note) => (
                <button key={note}>{note}</button>
            ))}
            {/* <button>DO</button>
            <button>RE</button>
            <button>MI</button>
            <button>FA</button>
            <button>SOL</button>
            <button>LA</button>
            <button>SI</button> */}
        
        </div>
    );
};

export default WhiteKeys;