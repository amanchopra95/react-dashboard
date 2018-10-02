import React from 'react';
import { 
    List,
    Datagrid,
    TextField,
    EditButton,
    ShowButton 
} from 'react-admin';

const userList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" label="id" />
            <TextField source="username" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="role" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export default userList; 