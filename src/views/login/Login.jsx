import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import './Login.style.css'

export const Login = () => {

    const navigate = useNavigate()

    const initialValues = {
        email: '',
        password: ''
    }

    const validate = (values) => {

        const errors = {};

        if (!values.email) {
            errors.email = "El email es requerido"
        }
        if (!values.password) {
            errors.password = "El password es requerido"
        }

        return errors
    }

    const onSubmit = () => {
        localStorage.setItem('logged', 'yes')
        navigate('/')
    }

    //Le tengo que pasar estos tres valores
    const formik = useFormik({ initialValues, validate, onSubmit });
    //1 initialValues= son los estados
    //2 validate = funcion de validacion
    //3 onSubmit = lo que mandas al completar correctamente la validacion

    const { handleSubmit, handleChange, values, errors } = formik

    return (
        <div className='auth'>
            <form onSubmit={handleSubmit}>
                <h1>Iniciar Sesión</h1>
                <div>
                    <label>Email</label>
                    <input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div style={{ color: 'red' }}>{formik.errors.password}</div>}
                </div>
                <div>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
