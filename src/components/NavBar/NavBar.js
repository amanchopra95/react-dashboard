import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const navBar = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Just Diet Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default navBar;