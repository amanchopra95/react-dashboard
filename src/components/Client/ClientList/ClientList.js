import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const clientList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
        </Datagrid>
    </List>
);

export default clientList;