import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EditButton, 
    ArrayField, 
    EmailField,
    } from 'react-admin';

import ClientFilter from '../ClientFilter/ClientFilter';

const clientList = (props) => {

    return (
        <List {...props} perPage={10} filters={<ClientFilter />}>
            <Datagrid>
                <TextField source="id" label="SNo" />
                <TextField source="name" />
                <EmailField source="email" />
                <ArrayField source="phones">
                    <Datagrid>
                        <TextField source="phoneNumber" />
                        <TextField source="phoneType" />
                    </Datagrid>
                </ArrayField>
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default clientList;