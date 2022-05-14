import React from "react";
import "./app.css";
import { Async } from "./components/async";
import { Focus } from "./components/focus";
import { Toggle } from "./components/toggle";

export default function App() {
    return (
        <div>
            <h1>React useRef</h1>
            <Focus />
            {/* <Toggle></Toggle> */}
        </div>
    );
}
