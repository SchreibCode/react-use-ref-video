import { useEffect, useRef } from "react";

export function Focus() {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <div>
            <input ref={ref} placeholder="Dein Name"></input>
        </div>
    );
}
