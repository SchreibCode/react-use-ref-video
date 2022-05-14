import { useState, useRef } from "react";
import { requestData } from "../utils/server-mock";

export function Async() {
    const [data, setData] = useState("");
    const ref = useRef(null);
    function onClick() {
        setData("loading...");
        requestData().then((message) => {
            console.log(ref.current);
            if (ref.current) {
                setData(message);
            }
        });
    }

    return (
        <div ref={ref}>
            <button onClick={onClick}>Starte Server Abfrage</button>
            <p>{data}</p>
        </div>
    );
}
