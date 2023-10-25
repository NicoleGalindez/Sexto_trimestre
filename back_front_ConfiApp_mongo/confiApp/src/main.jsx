import React from "react";
import  ReactDOM  from "react-dom/client";
import { App } from "./holamundo";
import { FirstApp } from "./FirstApp";

//renderizacion:
ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <FirstApp/>
    // </React.StrictMode>
)
