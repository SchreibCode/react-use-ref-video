import { useRef, useState } from "react";

export function Beispiel() {
    const ref = useRef(0);
    let numberVariable = 0;

    function onClick() {}

    return (
        <div>
            <h3>
                Ref: {ref.current}
                <br></br>
                Variable: {numberVariable}
            </h3>
            <button onClick={onClick}>+</button>
        </div>
    );
}
