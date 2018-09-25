import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const phoneList = (props) => (
    <List>
        <Datagrid>
            <TextField source="clientId" label="SNo" />
            <TextField source="phoneType" label="Phone Type" />
            <TextField source="phoneNumber" label="Number" />
        </Datagrid>
    </List>
);

export default phoneList;