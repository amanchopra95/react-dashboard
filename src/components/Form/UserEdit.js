import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DisabledInput,
    Toolbar,
    SaveButton
} from 'react-admin';

import { UserName } from '../User/User';
import { validateName } from '../ValidateInput/ValidateInput';
import { EditAction } from '../Action/Action';

const editDefaultValues = { updatedAt: new Date() };

const UserToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton
            label="Save and Show"
            submitOnEnter={true}
            redirect="show"
        />
        <SaveButton
            label="Save and Add"
            submitOnEnter={false}
            redirect={false}
            variant="flat"
        />
    </Toolbar>
);

const editForm = (props) => {
    return (
        <Edit title={<UserName />} actions={<EditAction />} {...props} >
            <SimpleForm defaultValue={editDefaultValues} toolbar={<UserToolbar />}>
                <DisabledInput source="id" label="SNo" />
                <DisabledInput source="username" label="Username" />
                <TextInput source="firstName" label="First Name" validate={validateName} />
                <TextInput source="lastName" label="Last Name" validate={validateName} />
                <TextInput source="password" label="Password" type="password" />
            </SimpleForm>
        </Edit>
    );
}

export default editForm;