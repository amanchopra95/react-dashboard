import React from 'react';
import { 
    Show,
    TextField,
    NumberField
} from 'react-admin';

import GridLayout from '../../containers/GridLayout/GridLayout';
import UserList from './UserList/UserList';
import UserEdit from './UserEdit/UserEdit';
import UserCreate from './UserCreate/UserCreate';

const User = (props) => (
    <Show {...props}>
        <GridLayout>
            <NumberField source="id" label="id" />
            <GridLayout container>
                <GridLayout item xs={6}>
                    <TextField source="firstName" label="First Name" />
                </GridLayout>
                <GridLayout item xs={6}>
                    <TextField source="lastName" label="Last Name" />
                </GridLayout>
            </GridLayout>
            <TextField source="role" label="role" />
        </GridLayout>
    </Show>
);

const UserName = ({ record }) => (<span>{record ? `${record.firstName}` : ''}</span>);

export {
    UserList,
    UserEdit,
    UserName,
    UserCreate,
    User
}; 