'use client';
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncr = () => {
        setCount(count => count +1);
    }

    return (
        <div>
            <h1>Counter !</h1>
            <h2>{count}</h2>
            <button onClick={handleIncr}>+1</button>
        </div>
    );
}

export default Counter