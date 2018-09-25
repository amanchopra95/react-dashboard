import React from 'react';
import { Filter, TextInput, NumberInput, ReferenceInput } from 'react-admin';

const clientFilter = (props) => {
    return (
        <Filter {...props}>
            <NumberInput label="SNo" source="q" alwaysOn/>
            <TextInput label="Mobile" source="phone" />
        </Filter>
    );
};

export default clientFilter;