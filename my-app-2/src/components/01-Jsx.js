import React, {Fragment} from 'react';

const Jsx = () => {

    const saludo = 'Hola!!! Soy JSX';
    const temperatura = 21;

    return (
        <Fragment>
            <h2>{saludo}</h2>
            <h2>Frío o Calor?</h2>
            <h4>
                {
                    temperatura > 20 ? 'Hace calor...' : 'Hace frío...'
                }
            </h4>
        </Fragment>
    );
}
 
export default Jsx;