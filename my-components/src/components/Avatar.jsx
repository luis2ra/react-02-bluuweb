import React, { Fragment } from 'react'

const Avatar = ( { urlImagen }) => {

    return ( 
        <Fragment>
            <img src= { urlImagen } className="mr-3" alt=""/>
        </Fragment>
    );
}
 
export default Avatar;