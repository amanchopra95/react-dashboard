import React from 'react';
import { CardActions, ShowButton, ListButton, CreateButton } from 'react-admin';

const ClientEditAction = ({basePath, data, resource}) => (
    <CardActions>
        <ShowButton basePath={basePath} record={data} />
        <ListButton basePath={basePath} record={data} />
        <CreateButton basePath={basePath} resource={resource} />
    </CardActions>
);

const ClientCreateAction = ({basePath, data, resource}) => (
    <CardActions>
        <ListButton basePath={basePath} record={data} />

    </CardActions>

);

export {
    ClientEditAction,
    ClientCreateAction
};