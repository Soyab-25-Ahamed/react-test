import React from 'react';
import { useState } from 'react';
import './Changing.css';
const Changing = () => {
    const [count, setCount] = useState(100);
    const handelIncrease = () => setCount(count * 2);
    return (
        <div>
            <h1 className='hil'>changing this number by click button <span>the Num:{count}</span> </h1>
            <button onClick={handelIncrease}>Click me {count}</button>
        </div>
    );
};

export default Changing;