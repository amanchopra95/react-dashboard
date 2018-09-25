import React from 'react';
import { Show, TextField, ArrayField, Datagrid, NumberField, DateField, SimpleShowLayout, EmailField } from 'react-admin';
import classes from './Client.css';
//import Grid from '@material-ui/core/Grid';
import GridLayout from '../../containers/GridLayout/GridLayout';

const styles = {
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
    }
};

const Client = (props) => (
    <Show title={<ClientName />} {...props}>
        <SimpleShowLayout className={[classes.container, classes.header].join(' ')}> 
            <SimpleShowLayout>
                <NumberField source="id" label="SNo" style={styles.header} />
            </SimpleShowLayout>
            <SimpleShowLayout {...props} className={classes.flexContainer}>
                <GridLayout container justify="center">
                    <GridLayout item xs={6}>
                        <TextField source="name" label="Name" />
                    </GridLayout>
                    <GridLayout item xs={6} >
                        <TextField source="email" label="Email"/>
                    </GridLayout> 
                </GridLayout>
                <GridLayout container>
                    <GridLayout item xs={6}>
                        <TextField source="weight" label="Weight" />
                    </GridLayout>
                    <GridLayout item xs={6}>
                        <TextField source="height" label="Height" />
                    </GridLayout>
                </GridLayout>
            </SimpleShowLayout>
            <ArrayField source="phones" label="Phones">
                <Datagrid>
                    <TextField source="phoneType" />
                    <NumberField source="phoneNumber" />
                </Datagrid>
            </ArrayField>
            <DateField source="date_of_joining"/>
            <DateField source="createdAt" showTime />
            <DateField source="DOB" label="Date Of Birth"/>
        </SimpleShowLayout>
    </Show>
);

const ClientName = ({ record }) => (<span>{record ? `${record.name}` : ''}</span>);

export { Client, ClientName };