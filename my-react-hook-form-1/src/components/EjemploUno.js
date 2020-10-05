import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {

    const {register, errors, handleSubmit} = useForm();

    const [Entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data);
        
        setEntradas([
            ...Entradas,
            data
        ]);

        e.target.reset();
    };

    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="title"
                    placeholder="Ingrese Título"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Campo obligatorio'},
                            minLength: {value:2, message: 'Mínimo dos letras'}
                        })
                    }
                ></input>

                { errors.description &&           
                    <span className="text-danger text-small d-block mb-2">
                        {errors.title.message}
                    </span>
                }

                <input
                    name="description"
                    placeholder="Ingrese Descripción"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Campo obligatorio'},
                        })
                    }
                ></input>

                { errors.description &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.description.message}
                    </span>
                }

                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
            <ul className="mt-2">
                {
                    Entradas.map((item, index) => 
                        <li key={index}>
                            {item.title} - {item.description}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default EjemploUno;