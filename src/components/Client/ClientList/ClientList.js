import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EditButton, 
    EmailField,
    ShowButton,
    ArrayField,
    Responsive,
    SimpleList
    } from 'react-admin';

import ClientFilter from '../ClientFilter/ClientFilter';
import Exporter from '../Exporter/Exporter';

const clientList = (props) => {

    return (
        <List {...props} filters={<ClientFilter />} perPage={1} exporter={Exporter}>
            <Responsive 
                small={
                    <SimpleList
                        primaryText={record => `SNo: ${record.id}`}
                        secondaryText={record => <span>Name: {record.name}</span>}
                        tertiaryText={record => `Phone: ${record.phones[0].phoneNumber}`}
                    />
                }
                medium={
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
                }
            />
        </List>
    );
};

export default clientList;