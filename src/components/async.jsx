import { useRef, useState } from "react";
import { requestData } from "../utils/server-mock";

export function Async() {
    const [data, setData] = useState("");
    const ref = useRef(null);

    function onClick() {
        setData("loading...");
        requestData().then((message) => {
            if (ref.current !== null) {
                setData(message);
            }
        });
    }

    return (
        <div ref={ref}>
            <h2>Async</h2>
            <button onClick={onClick}>Starte Server Abfrage</button>
            <p>{data}</p>
        </div>
    );
}
