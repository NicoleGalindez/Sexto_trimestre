import { Navigate } from "react-router-dom"

export const Landing =()=> <h2>Landign page (public) </h2> 


export const Home =()=>{ 
   
return <h2>Home page (private) </h2> 
}


export const Dashboard =()=> <h2> Dashboard page (private)</h2>

export const Analytics =()=> <h2> Analytics  (private, permission: 'analize')</h2>

export const Admin =()=> <h2> Admin  (private, permission: 'admin')</h2>


