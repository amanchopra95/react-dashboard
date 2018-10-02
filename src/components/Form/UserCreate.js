import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    SelectInput
} from 'react-admin';

import { CreateAction } from '../Action/Action';
import { validateName } from '../ValidateInput/ValidateInput';

const clientDefaultValues = { createdAt: new Date() };

const createForm = (props) => {
    return (
        <Create {...props} actions={<CreateAction />}>
            <SimpleForm defaultValue={clientDefaultValues}>
                <TextInput source="username" label="Username" />
                <TextInput source="firstName" label="First Name" validate={validateName} />
                <TextInput source="lastName" label="Last Name" validate={validateName} />
                <SelectInput source="role" choices={[
                    { id: 'admin', name: 'Admin' },
                    { id: 'employee', name: 'Employee' },
                    { id: 'intern', name: 'Intern' }
                ]} />
                <TextInput source="password" label="Password" type="password" />
            </SimpleForm>
        </Create>
    );
};

export default createForm;
