import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EditButton, 
    EmailField,
    ShowButton,
    ArrayField
    } from 'react-admin';

import ClientFilter from '../ClientFilter/ClientFilter';


const clientList = (props) => {

    return (
        <List {...props} filters={<ClientFilter />} perPage={1}>
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
                <ShowButton />
            </Datagrid>
        </List>
    );
};

export default clientList;