import React, {useState, Fragment} from 'react';

const Contador = () => {

    // acá va la lógica del componente en JS
    const [numero, setNumero] = useState(0);

    // función para animar el button
    const aumentar = () => {
        console.log('Me diste un click...');
        setNumero(numero + 1)
    };

    // el return debe envolver todo en un contenedor: div, fragment
    return ( 
        <Fragment>
            <h3>Mi primer Componente en React: {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
        
    );
}
 
export default Contador;