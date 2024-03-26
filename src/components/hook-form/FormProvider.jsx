import PropTypes from 'prop-types';
import { FormProvider as Form } from 'react-hook-form';
import React from 'react';

FormProvider.propTypes = {
    children: PropTypes.node,
    methods: PropTypes.object,
    onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods }) {
    return (
        <Form {...methods}>
            <form onSubmit={onSubmit}>{children}</form>
        </Form>
    );   
}
