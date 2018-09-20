import React from 'react';
import { Filter, TextInput, SelectInput, ReferenceInput } from 'react-admin';

const clientFilter = (props) => {
    return (
        <Filter {...props}>
            <TextInput label="Search" source="q" />
            <ReferenceInput label="name" source="name" reference="clients" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );
};

export default clientFilter;