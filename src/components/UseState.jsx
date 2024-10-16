import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>useState Hook</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

export default UseState
