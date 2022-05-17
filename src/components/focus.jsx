import { useEffect, useRef } from "react";

export function Focus() {
    const ref = useRef(null);
    useEffect(() => {
        console.log("rendered");
        ref.current.focus();
    }, []);

    return (
        <div>
            <h2>Focus</h2>
            <input ref={ref} placeholder="Dein Name"></input>
        </div>
    );
}
