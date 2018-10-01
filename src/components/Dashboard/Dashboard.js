import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

class Dashboard extends Component {

    render() {
        return(
            <Card>
                <Title title="Just Diet Administration" />
                <CardContent>Welcome To Administration</CardContent>
            </Card>
        );
    };
};

export default withRouter(Dashboard);