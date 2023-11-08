import React, {useState} from "react";

function Detail() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Detail</h1>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default Detail;