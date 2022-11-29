import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { $fixMe } from '../../../type';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/reducers/usersReducer';

interface PropsType {
    getFilteredUsers: (term: string, isFriend: boolean | null) => void;
}

interface UsersSeacrhFormValidateObjectType {
    term: string;
    isFriend: null | boolean;
}

const usersSeacrhFormValidate: $fixMe = (values: UsersSeacrhFormValidateObjectType) => {
    const errors = {};
    return errors;
};

const UsersSearchForm: FC<PropsType> = ({ getFilteredUsers }) => {
    const dispatch = useDispatch();

    const submit: $fixMe = (
        values: UsersSeacrhFormValidateObjectType,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    ) => {
        const { term, isFriend } = values;
        dispatch(actions.setFilter({ term, isFriend }));
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
                    <Field as='select' name='isFriend'>
                        <option value='null'>Without filter</option>
                        <option value='true'>Only friends</option>
                        <option value='false'>Only non-friends</option>
                    </Field>
                    <button type='submit' disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default UsersSearchForm;
