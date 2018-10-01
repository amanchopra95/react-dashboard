import React from 'react';
import { connect } from 'react-redux';
import { userLogout, Responsive } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button';
import { sanitizeListRestProps } from 'ra-core/lib/controller';

const logout = ({ userLogout, ...rest }) => (
    <Responsive
        xsmall={
            <MenuItem 
                onClick={userLogout}
                {...sanitizeListRestProps(rest)}
            >
            <ExitIcon /> Logout
            </MenuItem>
        }
        medium={
            <Button 
                onClick={userLogout}
                {...sanitizeListRestProps(rest)}
            >
            <ExitIcon /> Logout
            </Button>
        }   
    / >
);

export default connect(undefined, {userLogout: userLogout()})(logout);