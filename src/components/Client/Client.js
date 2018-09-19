import React from 'react';
import { Show, TextField, SimpleShowLayout } from 'react-admin';

const client = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="SNo" />
            <TextField source="name" />
            <TextField source="email" />
        </SimpleShowLayout>
    </Show>
);

export default client;