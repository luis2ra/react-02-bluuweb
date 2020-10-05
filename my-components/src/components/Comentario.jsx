import React, { Fragment } from 'react'
import Avatar from './Avatar';

const Comentario = ( { sujeto }) => {

    return ( 
        <Fragment>
            <h1>Comentario</h1>
            <hr/>
            <div className="media">
                {/* <img src= { sujeto.imagen } className="mr-3" alt=""/> */}
                <Avatar urlImagen={ sujeto.imagen } />
                <div className="media-body">
                    <h5 className="mt-0">{ sujeto.nombre }</h5>
                    { sujeto.texto }
                </div>
            </div>
        </Fragment>
    );
}
 
export default Comentario;