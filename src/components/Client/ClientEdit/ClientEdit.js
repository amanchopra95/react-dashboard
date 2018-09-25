import React from 'react';
import {  
        Edit,
        SimpleForm,
        TextInput,
        NumberInput,
        } from 'react-admin';

import { ClientName } from '../Client';

const clientEdit = (props) => {
    return (
        <Edit title={<ClientName />} {...props}>
            <SimpleForm>
                <NumberInput source="id" label="SNo" />
                <TextInput source="name" label="Name" />
            </SimpleForm>
        </Edit>
    );
}

export default clientEdit;