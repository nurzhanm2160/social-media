import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { $fixMe } from '../../../type';

interface PropsType {
    getFilteredUsers: (term: string, isFriend: boolean | null) => void;
}

interface UsersSeacrhFormValidateObjectType {
    term: string;
    isFriend: boolean;
}

const usersSeacrhFormValidate: $fixMe = (values: UsersSeacrhFormValidateObjectType) => {
    const errors = {};
    return errors;
};

const UsersSearchForm: FC<PropsType> = ({ getFilteredUsers }) => {
    const submit: $fixMe = (
        values: UsersSeacrhFormValidateObjectType,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    ) => {
        const { term, isFriend } = values;
        getFilteredUsers(term, isFriend);
        // setTimeout(() => {
        //     alert(JSON.stringify(values));
        //     setSubmitting(false);
        // }, 400);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ term: '', isFriend: null }}
            validate={usersSeacrhFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type='text' name='term' />
                    <button type='submit' disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default UsersSearchForm;
