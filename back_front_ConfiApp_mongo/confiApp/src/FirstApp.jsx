import { Fragment } from "react"

const mensaje= "hola mundo con variable"
const arreglo= [1,2,3,4,5]
const aprendiz={
    nombre:'nicole ',
    apellido:'galindez'
}

export const FirstApp=()=>{
    return (
        <>
            <h1>bienvenidos a mi app con componentes react</h1>
            <p>esto seria un parrafo</p>
            <h1> {5+6} </h1>
            <h1>{mensaje}</h1>
            <h1>{arreglo}</h1>
            <h1> {JSON.stringify(aprendiz)}</h1>
        </>
    );

}