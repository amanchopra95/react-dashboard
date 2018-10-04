import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DisabledInput,
    DateInput,
    ArrayInput,
    RadioButtonGroupInput,
    SimpleFormIterator,
    FormDataConsumer,
    SelectInput,
    LongTextInput,
    Toolbar,
    SaveButton
} from 'react-admin';

import {
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
import { ClientName } from '../Client/Client';
import { EditAction } from '../Action/Action';
import { getDate, getBalance } from '../../utils/utils';

const editDefaultValues = {updatedAt: new Date()};



const ClientToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton
            label="Save and Show"
            submitOnEnter={true}
            redirect="show"
        />
        <SaveButton
            label="Save and Add"
            submitOnEnter={false}
            redirect={false}
            variant="flat"
        />

    </Toolbar>
);

const editForm = (props) => {
    return (
        <Edit title={<ClientName />} actions={<EditAction />} {...props}>
            <SimpleForm defaultValue={editDefaultValues} toolbar={<ClientToolbar />}>
                <DisabledInput source="id" label="SNo"/>
                <TextInput source="name" label="Name" validate={validateName} />
                <RadioButtonGroupInput source="gender" label="Gender" choices={[
                    { id: 'M', name: 'Male' },
                    { id: 'F', name: 'Female' }
                ]} validate={validateGender} />
                <ArrayInput source="phones">
                    <SimpleFormIterator>
                        <SelectInput source="phoneType" label="Phone Type" choices={[
                            { id: 'Mobile', name: 'Mobile' },
                            { id: 'Landline', name: 'Landline' },
                            { id: 'Whatsapp', name: 'WhatsApp' }
                        ]} validate={validatePhoneType} />
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
                        return (
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
                                    {...rest} />
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
                    { id: 'Online', name: 'Online' },
                    { id: 'Visit', name: 'Visit' }
                ]} validate={validateVisit} />
                <LongTextInput source="address" label="Address" />
            </SimpleForm>
        </Edit>
    );
}

export default editForm;