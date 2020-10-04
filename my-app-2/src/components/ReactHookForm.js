import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);

        //limpiar los campos
        e.target.reset();
    };

    return (
        <Fragment>
            <h2>Formulario Hook</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <input
                    name="titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {
                                value: true, 
                                message: "Título Obligatorio"
                            },
                            minLength: {
                                value: 2,
                                message: "No menos de 2 caracteres"
                            },
                            maxLength: {
                                value: 7,
                                message: "No más de 7 caracteres"
                            }
                        })
                    }
                />

                <span className="text-danger text-small d-block mb-2">
                    {errors.titulo && errors.titulo.message}
                </span>

                <button className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
    );
}
 
export default FormHook;