import React from 'react';
import { Login } from 'ra-ui-materialui';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    login: {
        main: {
            background: '#fff !important'
        }
    }
};

const MyLogin = withStyles(styles.login)(({classes, ...props}) => (
    <Login classes={classes} {...props} />
));

export default MyLogin;



