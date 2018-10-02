import React from 'react';
import {
    Show,
    TextField,
    ArrayField,
    Datagrid,
    NumberField,
    DateField,
    SimpleShowLayout,
    EmailField,
    RichTextField
} from 'react-admin';
import classes from './ClientShow.css';
import GridLayout from '../../../containers/GridLayout/GridLayout';

const styles = {
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
    }
};

const ClientShow = (props) => (
    <Show title={<ClientName />} {...props}>
        <SimpleShowLayout className={[classes.container, classes.header].join(' ')}>
            <SimpleShowLayout>
                <NumberField source="id" label="SNo" style={styles.header} />
            </SimpleShowLayout>
            <SimpleShowLayout {...props} className={classes.flexContainer}>
                <GridLayout container>
                    <GridLayout item xs={6}>
                        <TextField source="name" label="Name" />
                    </GridLayout>
                    <GridLayout item xs={6} >
                        <EmailField source="email" label="Email" />
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
            <DateField source="DOB" label="Date Of Birth" />
            <TextField source="package" label="Package" />
            <DateField source="date_of_joining" label="Date Of Joining" />
            <DateField source="end_date" label="End Date" />
            <TextField source="paid" label="Paid" />
            <TextField source="balance" label="Balance" />
            <TextField source="blood_group" label="Blood Group" />
            <TextField source="looking_for" label="Looking For" />
            <TextField source="visit" label="Online/Visit" />
            <TextField source="food_habit" label="Food Habit" />
            <TextField source="ref" label="Ref" />
            <RichTextField source="address" label="Address" />
            <DateField source="createdAt" showTime />
        </SimpleShowLayout>
    </Show>
);

const ClientName = ({ record }) => (<span>{record ? `${record.name}` : ''}</span>);

export {
    ClientName,
    ClientShow
}