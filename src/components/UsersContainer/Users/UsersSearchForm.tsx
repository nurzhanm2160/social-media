import React, { FC } from 'react';
import { Field, Form, Formik } from 'formik';
import { $fixMe } from '../../../type';
import { useDispatch, useSelector } from 'react-redux';
import { usersSlice } from '../../../redux/reducers/usersReducer';

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

    const filter = useSelector((state: $fixMe) => state.usersPage.filter);

    const submit: $fixMe = (
        values: UsersSeacrhFormValidateObjectType,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    ) => {
        const { term, isFriend } = values;
        dispatch(usersSlice.actions.setFilter({ term, isFriend }));
        getFilteredUsers(term, isFriend);
        setSubmitting(false);
    };

    return (
        <Formik
            enableReinitialize
            initialValues={{ term: filter.term, isFriend: String(filter.isFriend) }}
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
