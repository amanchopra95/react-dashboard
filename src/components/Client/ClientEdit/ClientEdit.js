import React from 'react';
import { TextField, Edit } from 'react-admin';

import { ClientName } from '../Client';

const clientEdit = (props) => {
    return (
        <Edit title={<ClientName />} {...props}>
            <TextField source="name" />
        </Edit>
    );
}

export default clientEdit;