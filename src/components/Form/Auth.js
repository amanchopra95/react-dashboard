import React from 'react';
import { Login, LoginForm } from 'ra-ui-materialui';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    login: {
        main: {
            background: '#fff'
        }
    }
}

const Auth = (props) => (
    <Login loginForm={<LoginForm />} {...props} />
);

export default withStyles(styles.login.main)(Auth);



