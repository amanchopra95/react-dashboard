import React from 'react';
import { 
    NumberInput,
    RadioButtonGroupInput, 
    CheckboxGroupInput,
    SimpleFormIterator,
    FormDataConsumer,
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
import { getDate, getBalance } from '../../utils/utils';

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
                <SelectInput source="blood_group" label="Blood Group" choices={[
                    { id: "A+", name: "A+" },
                    { id: "B+", name: "B+" },
                    { id: "AB+", name: "AB+" },
                    { id: "O+", name: "O+" },
                    { id: "A-", name: "A-" },
                    { id: "B-", name: "B-" },
                    { id: "AB-", name: "AB-" },
                    { id: "O-", name: "O-" },
                ]} />
                <TextInput source="email" label="Email" validate={validateEmail} />
                <TextInput source="height" label="Height" />
                <TextInput source="weight" label="Weight" />
                <SelectInput source="package" label="Package" choices={[
                    { id: "1", name: "1 Month" },
                    { id: "3", name: "3 Months" },
                    { id: "6", name: "6 Months" },
                ]} />
                <DateInput source="date_of_joining" label="Date of Joining" validate={validateDOJ} />
                <FormDataConsumer>
                    {({ formData, ...rest }) => {
                        return(
                            formData.package && formData.date_of_joining ? <DateInput 
                                source="end_date" 
                                label="End Date" 
                                validate={validateED} 
                                defaultValue={getDate(formData.date_of_joining, formData.package)} 
                                {...rest} /> : <DateInput
                                    source="end_date"
                                    label="End Date"
                                    validate={validateED}
                                    {...rest} />
                        );
                    }}
                </FormDataConsumer>
                <TextInput source="paid" label="Paid" validate={validatePaid} />
                <FormDataConsumer>
                    {({ formData, ...rest }) => {
                        return (
                            formData.package && formData.paid ? 
                                <TextInput 
                                    source="balance" 
                                    label="Balance" 
                                    validate={validateBalance} 
                                    defaultValue={getBalance(formData.package, formData.paid)} 
                                    {...rest}/>
                                    :
                                <TextInput 
                                    source="balance" 
                                    label="Balance" 
                                    validate={validateBalance}
                                    {...rest} />
                        );
                    }}
                </FormDataConsumer>
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

