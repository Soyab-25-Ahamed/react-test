import React from 'react';
import { useState, useEffect } from 'react';

const Api = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3/all')
            .then(res => res.json())
            .then(data => setState(data));
    }, [])

    return (
        <div>
            {
                state.map(data => <Show key={data.cca2} value={data}></Show>)
            }
        </div>
    );
};
function Show(props) {
    console.log(props);
    const showStyle = { border: '2px solid red', margin: '20px' };
    return (
        <div style={showStyle}>
            <img src={props.value.flags[0]} alt="" />
            <h2>{props.value.region}</h2>
        </div>
    );

}

export default Api;