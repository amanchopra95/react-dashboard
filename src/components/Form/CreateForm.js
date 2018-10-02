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

import { CreateAction } from '../Action/Action';
import {
    validateId,
    validateName,
    validateEmail,
    validateBalance,
    validateAge,
    validateDOJ,
    validateGender,
    validatePhoneType,
    validatePhoneNumber,
    validatePaid,
    validateVisit,
    validateED
} from '../ValidateInput/ValidateInput';

const clientDefaultValues = { createdAt: new Date() };

const createForm = (props) => {
    return (
        <Create {...props} actions={<CreateAction />}>
            <SimpleForm defaultValue={clientDefaultValues}>
                <NumberInput source="id" label="SNo" validate={validateId} />
                <TextInput source="name" label="Name" validate={validateName} />
                <RadioButtonGroupInput source="gender" label="Gender" choices={[
                    { id: 'M', name: 'Male' },
                    { id: 'F', name: 'Female' }
                ]} validate={validateGender} />
                <ArrayInput source="phones">
                    <SimpleFormIterator>
                        <SelectInput source="phoneType" label="Phone Type" choices={[
                            {id: 'Mobile', name: 'Mobile'},
                            {id: 'Landline', name: 'Landline'},
                            {id: 'Whatsapp', name: 'WhatsApp'}
                        ]} validate={validatePhoneType}/>
                        <TextInput source="phoneNumber" label="Number" validate={validatePhoneNumber} />
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput source="age" label="Age" validate={validateAge} />
                <TextInput source="email" label="Email" validate={validateEmail} />
                <DateInput source="date_of_joining" label="Date of Joining" validate={validateDOJ} />
                <DateInput source="end_date" label="End Date" validate={validateED} />
                <TextInput source="height" label="Height" />
                <TextInput source="weight" label="Weight" />
                <TextInput source="package" label="Package" />
                <TextInput source="paid" label="Paid" validate={validatePaid} />
                <TextInput source="balance" label="Balance" validate={validateBalance} />
                <TextInput source="food_habit" label="Food Habit" />
                <TextInput source="ref" label="Ref" />
                <RadioButtonGroupInput source="visit" label="Visit" choices={[
                    {id: 'Online', name: 'Online'},
                    {id: 'Visit', name: 'Visit'}
                ]} validate={validateVisit} />
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

