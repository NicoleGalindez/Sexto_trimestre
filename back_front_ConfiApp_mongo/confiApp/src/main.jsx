import React from "react";
import  ReactDOM  from "react-dom/client";
// import { App } from "./holamundo";
// import { Avatar, FirstApp5 , FirstApp4, } from "./FirstApp";
// import { TutorApp, MentorApp} from "./TutorApp";
import {Hook_U_STATE, 
       Hook_U_EFFECT,
       Hook_U_CONTEXT,
       Hook_U_REF,
       Hook_U_REDUCER,
       Hook_U_MEMO
       
     } from "./Hooks";
import './style.css';


//renderizacion:
ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
       
     
     <Hook_U_STATE/>
     <Hook_U_EFFECT/>
     <Hook_U_CONTEXT/>
     <Hook_U_REF/>
     <Hook_U_REDUCER/>
     <Hook_U_MEMO/>
     

     </React.StrictMode>
)



// <HOOk_U_CALLBACK/>
// <HOOk_U_LAYOUTEFFECT/>