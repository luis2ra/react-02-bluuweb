import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';


const EjemploDos = () => {

    const {register, errors, handleSubmit, setError, clearError} = useForm();
    const [Decimal, setDecimal] = useState('');

    const onSubmit = (data, e) => {
        // console.log(data)
        e.preventDefault() // prevents refresh of the browser

        if (data.binario.match(/^[0-1]+$/g) === null) {
            setError(
                "binario",
                "notMatch",
                "Ingrese 0 o 1"
            );
            return
        }else{
            clearError("binario");
        }

        // Formula:
        // input = 1 => output = 1 * (2^0) = 1
        // input = 10 => output = (0 * (2^0)) + (1 * (2^1)) = 2
        // So we reverse and iterate from the back
        const reversedBinaryText = data.binario
            .split('')
            .map(Number) // Convert to a number from string
            .reverse()

        // Calculate the result by accumulating previous vaue
        const result = reversedBinaryText.reduce(
            (accumulator, currentValue, idx) =>
                accumulator + currentValue * Math.pow(2, idx)
        )
        
        console.log(result)
        setDecimal(result)
    };

    return (
        <Fragment>
            <h1>Ejemplo #2 - Calculadora Binaria</h1>
            <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <input 
                        name="binario"
                        className="form-control rounded-0"
                        placeholder="Ingrese 0 y 1"
                        ref={
                            register({
                                required:{value: true, message: 'Campo obligatorio'}
                            })
                        }
                    />
                </div>
                <div className="form-group mb-2">
                    <button className="btn btn-primary rounded-0">
                        Transformar
                    </button>
                </div>
            </form>
            {errors.binario && 
                <span className="text-danger text-small d-block mb-2">
                    {errors.binario.message}
                </span>
            }
            <p>Resultado: {Decimal}</p>
        </Fragment>
    );
}
 
export default EjemploDos;