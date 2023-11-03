import React from "react";
import  ReactDOM  from "react-dom/client";
import { App } from "./holamundo";
import { Avatar, FirstApp5 , FirstApp4, } from "./FirstApp";
import { TutorApp, MentorApp} from "./TutorApp";
import './style.css';


//renderizacion:
ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
       
        <Avatar/>
        <FirstApp4/>
       <TutorApp/>



       <FirstApp5/>
       
     </React.StrictMode>
)
