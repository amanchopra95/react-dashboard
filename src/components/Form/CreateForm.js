import React from 'react';
import { 
    NumberInput,
    RadioButtonGroupInput, 
    CheckboxGroupInput,
    SimpleFormIterator,
    LongTextInput,
    ArrayInput,
    TextInput,
    SelectInput,
    DateInput,
    SimpleForm, 
    Create 
} from 'react-admin';

import { ClientCreateAction } from '../Action/Action';
// import GridLayout from '../../containers/GridLayout/GridLayout';

const clientDefaultValues = { createdAt: new Date() };

const createForm = (props) => {
    return (
        <Create {...props} actions={<ClientCreateAction />}>
            <SimpleForm defaultValue={clientDefaultValues}>
                <NumberInput source="id" label="SNo" />
                <TextInput source="name" label="Name" />
                <RadioButtonGroupInput source="gender" label="Gender" choices={[
                    { id: 'M', name: 'Male' },
                    { id: 'F', name: 'Female' }
                ]} />
                <ArrayInput source="phones">
                    <SimpleFormIterator>
                        <SelectInput source="phoneType" label="Phone Type" choices={[
                            {id: 'Mobile', name: 'Mobile'},
                            {id: 'Landline', name: 'Landline'},
                            {id: 'Whatsapp', name: 'WhatsApp'}
                        ]} />
                        <TextInput source="phoneNumber" label="Number" />
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput source="age" label="Age" />
                <DateInput source="date_of_joining" label="Date of Joining" />
                <DateInput source="end_date" label="End Date" />
                <TextInput source="height" label="Height" />
                <TextInput source="weight" label="Weight" />
                <TextInput source="package" label="Package" />
                <TextInput source="paid" label="Paid" />
                <TextInput source="balance" label="Balance" />
                <TextInput source="food_habit" label="Food Habit" />
                <TextInput source="ref" label="Ref" />
                <RadioButtonGroupInput source="visit" label="Visit" choices={[
                    {id: 'Online', name: 'Online'},
                    {id: 'Visit', name: 'Visit'}
                ]} />
                <CheckboxGroupInput source="looking_for" label="Looking For" choices={[
                    {id: 'Weight Loss', name: 'Weight Loss'},
                    { id: 'Weight Gain', name: 'Weight Gain' },
                    { id: 'Healthy Plan', name: 'Healthy Plan' },
                ]} />
                <LongTextInput source="address" label="Address" />
            </SimpleForm>
        </Create>
    );
};

export default createForm;

