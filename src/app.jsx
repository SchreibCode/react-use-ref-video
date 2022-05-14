import React from "react";
import "./app.css";
import { Async } from "./components/async";
import { Focus } from "./components/focus";
import { Toggle } from "./components/toggle";

export default function App() {
    return (
        <div>
            <h1>React useRef</h1>
            <h2>Beispiel 1</h2>
            <Toggle>
                <Focus />
            </Toggle>
            <h2>Beispiel 2</h2>
            <Toggle>
                <Async />
            </Toggle>
        </div>
    );
}
