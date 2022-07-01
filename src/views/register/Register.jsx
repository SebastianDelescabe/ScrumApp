import React from 'react';
import { useFormik } from 'formik';

export const Register = () => {

    const initialValues = {
        userName: '',
        password: '',
        email: '',
        teamID: '',
        role: '',
        continent: '',
        region: '',
    }

    const onSubmit = () => {
        alert('regustradi')
    }

    const formik = useFormik({ initialValues, onSubmit });

    const { handleSubmit, handleChange, values, errors } = formik


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <div>
                    <label>Nombre de usuario</label>
                    <input
                        name='userName'
                        type='text'
                        value={values.userName}
                        onChange={handleChange}
                    />
                    {errors.userName && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
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
                    <label>Email</label>
                    <input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
                </div>
                <input type='hidden' name='teamID' value='' />
                <div>
                    <label>Rol</label>
                    <select name='role' onChange={handleChange} value={values.role}>
                        <option value='Team Member'>Team Member</option>
                        <option value='Team Leader'>Team Leader</option>
                    </select>
                    {errors.role && <div style={{ color: 'red' }}>{formik.errors.role}</div>}
                </div>
                <div>
                    <label>Continente</label>
                    <select name='continent' onChange={handleChange} value={values.continent}>
                        <option value='America'>America</option>
                        <option value='Europa'>Europa</option>
                        <option value='Otros'>Otros</option>
                    </select>
                    {errors.continent && <div style={{ color: 'red' }}>{formik.errors.continent}</div>}
                </div>
                <div>
                    <label>Region</label>
                    <select name='region' onChange={handleChange} value={values.region}>
                        <option value='Latam'>Latam</option>
                        <option value='Brasil'>Brasil</option>
                        <option value='America del Norte'>America del Norte</option>
                        <option value='Otros'>Otros</option>
                    </select>
                    {errors.region && <div style={{ color: 'red' }}>{formik.errors.region}</div>}
                </div>
                <div>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
