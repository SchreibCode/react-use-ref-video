import { useRef, useState } from "react";

export function Beispiel() {
    const ref = useRef(0);
    const [number, setNumber] = useState(0);

    function onClick() {}

    return (
        <div>
            <span>
                Ref: {ref.current} / State: {number}
            </span>
            <button onClick={onClick}>+</button>
        </div>
    );
}
