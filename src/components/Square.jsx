import React from 'react';

//Apaguei a classe Square  e criei a function Square para receber o props
//e retornar um botão
function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            { props.value }
        </button>
    );
}

export default Square;