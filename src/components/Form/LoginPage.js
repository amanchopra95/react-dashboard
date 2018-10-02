import React from 'react';
import { Login, LoginForm } from 'ra-ui-materialui';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    login: {
        main: {
            background: '#fff !important'
        }
    }
};

const MyLogin = withStyles(styles.login)(({classes, ...props}) => {
    return (
        <Login loginForm={<LoginForm {...props} />} classes={classes} {...props} />
    );
});

export default MyLogin;



