import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import './TaskForm.style.css';

export const TaskForm = () => {

    const initialValues = {
        title: '',
        status: '',
        priority: '',
        description: '',
    }

    const required = "* Campo obligatorio";

    const validationSchema = () =>
        Yup.object().shape({
            title: Yup.string()
                .min(6, "La cantidad mínima de caracteres es 6")
                .required(required),
            status: Yup.string().required(required),
            priority: Yup.string().required(required),
        })

    const onSubmit = () => {
        alert('ye')
    }

    const formik = useFormik({ initialValues, validationSchema, onSubmit });

    const { handleSubmit, handleChange, errors, touched, handleBlur } = formik  //Touched y handleBlur es para salir del campo y que aparezca error si no complete nada

    return (
        <section className="task-form">
            <h2>Crear Tarea</h2>
            <p>Crea tus tareas</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <input
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.title && touched.title && (
                            <span className="error-message">{errors.title}</span>
                        )}
                    </div>
                    <div>
                        <select
                            name="status"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="">Seleccionar un estado</option>
                            <option value="new">Nueva</option>
                            <option value="inProcess">En Proceso</option>
                            <option value="finished">Terminada</option>
                        </select>
                        {errors.status && touched.status && (
                            <span className="error-message">{errors.status}</span>
                        )}
                    </div>
                    <div>
                        <select
                            name="priority"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        >
                            <option value="">Seleccionar una prioridad</option>
                            <option value="low">Baja</option>
                            <option value="midium">Media</option>
                            <option value="high">Alta</option>
                        </select>
                        {errors.priority && touched.priority && (
                            <span className="error-message">{errors.priority}</span>
                        )}
                    </div>
                </div>
                <div>
                    <textarea
                        name="description"
                        onChange={handleChange}
                        placeholder='descripcion'
                        cols="30"
                        rows="10"
                    />
                </div>
                <button type='submit'>Crear</button>
            </form>
        </section>
    )
}
