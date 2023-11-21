import './style.css';

//importar de react :
const r='__________________________';
const USE_STATE='useState';
const USE_EFFECT='useEffect';
const USE_CONTEXT='useContext';
const USE_REF='useRef';
const USE_REDUCER='useReducer';
const USE_MEMO='useMemo';
const USE_CALLBACK= 'useCallback';
const USE_LAYOUT_EFFECT= 'useLayoutEffect';



import React, {useState, useEffect, useRef, useReducer, useMemo, useCallback, useLayoutEffect} from 'react';

//useState_______________________________________________
export function Hook_U_STATE(){
   const [counter,setCounte]= useState(0);
   const [name,SetName]= useState('hello');
  
// primera variable es para actualizar el componente y la segunda para llamar cuando uno quiera y actualizar
   return(
    <>
    <h5>{USE_STATE}</h5>
	<h1>{counter}</h1>
	<button onClick={()=> setCounte(counter + 5)}> + </button>
    <button onClick={()=> setCounte(counter - 10)}> - </button>
    <h1>{  name  }</h1>
    <h4>{  r  }</h4>
   </>
);

}



//useEffetc_______________________________________________

export function Hook_U_EFFECT(){

    const [count,setCounte]= useState(0);

    useEffect(()=>{
        // hacer cualquier cosa al momento de correr o hacer algo en la aplicacion //controla (carga) las actualizaciones
        setCounte(count+1 );  
        return()=>{
           console.log('Cleanup') 
        } 
    },[])

    return(
     <>   <h5>{USE_EFFECT}</h5>
        <h1> {count} </h1>
        <h4>{r}</h4>
    </>
 );
 
 }

//useContext______________________________________________ es como callbacks?
// no necesariamente importa desde react sino que lo llama con la palabra reservada React.creatContext

const themes ={
    light:{     foreground:"#000000", background:"#eeeeee"},
    dark: {     foreground:"#ffffff", background:"#222222"},
    blue: {     foreground:"#ffffff", background:"#2000DB"},
    blue2:{     foreground:"#ffffff", background:"#405ADB"}
};

const ThemeContext= React.createContext(themes.light);

export function Hook_U_CONTEXT(){
    return(        <ThemeContext.Provider value={themes.blue2}>
                        <Toolbar />
                   </ThemeContext.Provider>)
}

function Toolbar (){
    return( <>
              <ThemeButton/>
            </> );
}

function ThemeButton(){

    const theme=React.useContext(ThemeContext);

    return(<>   <h5>{USE_CONTEXT}</h5>
        <button style={{background:theme.background, color:theme.foreground}}>
         context!
        </button>

      <br></br>
      <br></br>

    
    <div style={{background:theme.background, color:theme.foreground}}
     class="cuadro"></div>



        <h4>{r}</h4>  </>
          );
}


//useRef_______________________________________________


export function Hook_U_REF(){

    const inputRef= useRef();

    const handleClick=()=>{
        alert(inputRef.current.value)
    }

    return(
        <>    <h5>{USE_REF}</h5>
        <h1>Hello ADSO</h1>
        <input type='text' ref={inputRef}/>
        <button onClick={handleClick}> UseRef</button>
        <h4>{r}</h4>
        </>
    )
}
// para buscar?

//useReducer_______________________________________________
// similar al useState, la diferencia es que actualiza el estado en el estorage     // más facil de entender y a escala
// envuelve multiples subvalores, los componentes dependen de esos valores/ o mejor dicho del valor que tenia antes

const initialState= {count:0};

 function  reducer(state,action){
    switch (action.type){
        case 'increment':
            return{count:state.count + 1};
        case 'decrement':
            return{count: state.count -1};
            default:
                throw new Error();
    }}
// dispatch envia al store y el al componente
export  function Hook_U_REDUCER(){ 
     const [state, dispatch] = useReducer(reducer, initialState);
     return ( <>    <h5>{USE_REDUCER}</h5>
          Count: {state.count} <br/>
          <button onClick={()=>dispatch({type:'increment'})}>+</button> 
          <button onClick={()=>dispatch({type:'decrement'})}>-</button> 
          <h4>{r}</h4>
        </> )
}

//useMemo________memoriza solo un valor______________________________
//operaciones muy complejas que usen muchos recursos del pc o del sistema
// memorizar hasta que se actualice

function computeExpensiveValue(a,b){
    return a*b;
}

export function Hook_U_MEMO(){
    const change=true;
    const memoizedValue=useMemo(()=> computeExpensiveValue(2,2),[change]);
    return(<>  <h5>{USE_MEMO}</h5>
            <h1>{memoizedValue}</h1>
            <h4>{r}</h4>
          </>)
}

//useCallbak________memoriza una funcion______________________________
// y renderiza cada que cambia

// export function HOOk_U_CALLBACK() {
//     const [count, setCount] = useState(100);
  
//     const showCount = useCallback(() => {
//       alert( count);
//     }, [count]);
  
//     return (
//       <>
//         <h5>USE_CALLBACK</h5>
//         <ExampleChild handler={showCount} />
//       </>
//     );
//   }


//useLayoutEffect____________________________________________
// similar a useEffect
export function HOOk_U_LAYOUTEFFECT(){

    const [count, setCount] =useState(100);

   useLayoutEffect(()=>{
        fetch("https://github.com/NicoleGalindez/Sexto_trimestre ") .then(res=> res.json()).then(data=>{
            console.log(data);
        }) 
    })
    return(<>  <h5>{USE_LAYOUT_EFFECT}</h5>
           <h1>{data}</h1>
            </>
    );
}