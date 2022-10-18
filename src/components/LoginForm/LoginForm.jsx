import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/authReducer';

const LoginForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: '',
        },
        validate: (values) => {},
        onSubmit: (values) => {
            const { email, password, rememberMe } = values;
            dispatch(login(email, password, rememberMe));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type='text' id='email' name='email' onChange={formik.handleChange} />
                </div>
                <div>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <input
                        type='checkbox'
                        id='rememberMe'
                        name='rememberMe'
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
