import React from 'react';
import { Show, TextField, SimpleShowLayout, ArrayField, Datagrid } from 'react-admin';

const Client = (props) => (
    <Show title={<ClientName />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <ArrayField source="phones">
                <Datagrid>
                    <TextField source="phoneType" />
                    <TextField source="phoneNumber" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

const ClientName = ({ record }) => (<h3>{record ? `${record.name}` : ''}</h3>);

export { Client, ClientName };