import React from "react";
import "./app.css";
import { Async } from "./components/async";
import { Counter } from "./components/counter";
import { Focus } from "./components/focus";
import { Toggle } from "./components/toggle";

export default function App() {
    return (
        <div>
            {/* <Counter /> */}

            {/* <Toggle>
                <Focus />
            </Toggle> */}

            <Toggle>
                <Async />
            </Toggle>
        </div>
    );
}
