import React from 'react';
import { NumberInput, SimpleForm, Create } from 'react-admin';

const clientCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <NumberInput source="id" label="SNo" />
            </SimpleForm>
        </Create>
    );
}

export default clientCreate;