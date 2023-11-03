import PropTypes  from "prop-types";


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

export const Avatar =()=>{
    return(
        <img
             className="avatar"
             src="src/img/jake.gif"
             alt="jake"
             width={250}
             heigth={250}
        />
    );
}

export const FirstApp2=(props)=>{

    return(
        <>
        <h1>{props.tittle}</h1>
        </>
    )
}

export const FirstApp3=({name, birth, age })=>{

    return(
        <>
        <h1>{name}</h1>
        <h1>{birth}</h1>
        <h1>{age}</h1>
        </>
    )
}
export const FirstApp4=({name="ramoncito cortez", birth="sep/21/2010", age=25 })=>{

    return(
        <>
        <h1>{name}</h1>
        <h1>{birth}</h1>
        <h1>{age}</h1>
        </>
    )
}


FirstApp4.PropTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    birth:PropTypes.string
}


FirstApp3.defaultProps={
    name:'nombre por defeto',
    age:30,
    birth:'00/00/00'
}





const Mensaje =()=>alert('hola')

export const FirstApp5=({name, birth, age })=>{

    return(
        <>
        <h1>{name}</h1>
        <h1>{birth}</h1>
        <h1>{age}</h1>
        <button onClick={Mensaje}>
            aceptar
        </button>
        </>
    )
}