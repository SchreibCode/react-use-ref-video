import { useRef, useState } from "react";

export function Counter() {
    const [zahl, setZahl] = useState(0);
    const ref = useRef(0);
    let numberVariable = 0;

    function onClick() {
        // setZahl(zahl + 1);
        numberVariable++;
        ref.current++;
        console.log(numberVariable);
    }

    return (
        <div>
            <h2>Counter</h2>
            <h3>Variable: {numberVariable}</h3>
            <h3>Ref: {ref.current}</h3>
            <h3>State: {zahl}</h3>
            <button onClick={onClick}>+</button>
        </div>
    );
}
