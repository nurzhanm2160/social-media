import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/authReducer';

const LoginForm = () => {
    const dispatch = useDispatch();
    const captchaUrl = useSelector((state) => state.auth.captchaUrl);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: '',
        },
        validate: (values) => {},
        onSubmit: (values) => {
            const { email, password, rememberMe, captcha } = values;
            dispatch(login(email, password, rememberMe, captcha));
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
                {captchaUrl && (
                    <div>
                        <img src={captchaUrl} alt='Captcha' />
                        <input
                            id='captcha'
                            name='captcha'
                            onChange={formik.handleChange}
                            value={formik.values.captcha}
                            placeholder='captcha'
                        />
                    </div>
                )}
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
