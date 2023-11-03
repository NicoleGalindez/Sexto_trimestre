import PropTypes from 'prop-types';


export const TutorApp=({name,lastname,age})=>{
    return (
        <>
            <h1> {name} </h1>
            <h2>{lastname}</h2>
            <h2>{age}</h2>
        </>
    );

}

TutorApp.PropTypes={
    name:PropTypes.string.isRequired,
    lastname:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}


TutorApp.defaultProps={
    name:'nombre por defeto',
    lastname:'apellido por defeto',
    age:22,
    
}