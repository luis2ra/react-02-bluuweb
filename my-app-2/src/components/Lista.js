import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5]);

    const agregarElemento = () => {
        console.log('Click al botón');
        setArrayNumero([ ...arrayNumero, (arrayNumero.length+1)]);
    };

    return (
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item, index) => 
                    <p key={index}>{item} - {index}</p>
                )
            }
        </Fragment>
    );
}
 
export default Lista;