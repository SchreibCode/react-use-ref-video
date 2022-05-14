import { useState } from "react";
import { requestData } from "../utils/server-mock";

export function Async() {
    const [data, setData] = useState("");
    function onClick() {
        setData("loading...");
        requestData().then((message) => {
            setData(message);
        });
    }

    return (
        <div>
            <button onClick={onClick}>Starte Server Abfrage</button>
            <p>{data}</p>
        </div>
    );
}
