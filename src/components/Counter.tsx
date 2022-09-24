import React, { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)} className={styles.btn}>
                plus
            </button>
        </div>
    );
};

export default Counter;
