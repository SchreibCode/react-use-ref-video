import { useState } from "react";
export function Toggle(props) {
    const [show, setShow] = useState(true);
    return (
        <div style={{ padding: "1rem", border: "1px solid white" }}>
            <button
                onClick={() => {
                    setShow((show) => !show);
                }}
            >
                Toggle
            </button>
            {show ? props.children : null}
        </div>
    );
}
