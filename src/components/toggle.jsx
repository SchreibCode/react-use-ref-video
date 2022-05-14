import { useState } from "react";
import { Async } from "./async";
export function Toggle(props) {
    const [show, setShow] = useState(true);
    return (
        <div>
            <h2>Beispiel 2</h2>
            <button
                onClick={() => {
                    setShow((show) => !show);
                }}
            >
                Toggle
            </button>
            {show ? <Async /> : null}
        </div>
    );
}
