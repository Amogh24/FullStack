import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const App = (props)=>{
const[counter,setCounter]=useState(0)
const handleClick=()=>{
    console.log('clicked')
    setCounter(counter)
    {
        counter=counter+1
    }
    return(
        <div><p>Hello World</p></div>
    )
}

return(
    <div>
    <div>
 {counter}
    </div>
    <button onClick={handleClick}>
        plus
    </button>
    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

