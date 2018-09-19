import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

const dashboard = (props) => {
    return (
        <Card>
            <Title title="Just Diet Administration" />
            <CardContent>Welcome To Administration</CardContent>
        </Card>
    );
};

export default dashboard;