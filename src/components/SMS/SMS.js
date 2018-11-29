import React from 'react';
import { Toolbar, SaveButton } from 'react-admin';
import SendWhatsApp from './SendMsg';

const SMS = (props) => {

    return (
        <Toolbar {...props}>
            <SaveButton
                label="Save"
                submitOnEnter={false}
                redirect="show"
            />
            <SendWhatsApp
                variant="flat"
                redirect={false}
                submitOnEnter={false} 
                label="Send On WhatsApp"/>
            {/* <SaveButton
                label="Save and send sms"
                submitOnEnter={false}
                redirect={false}
                variant="flat"
                {...props}
            /> */}
        </Toolbar >
    )
}
/* const sms = (props) => (
    <Toolbar {...props}>
        <SaveButton 
            label="Save"
            submitOnEnter={false}
            redirect="edit"
        />
        <SaveButton
            label="Save and send sms"
            submitOnEnter={false}
            redirect={false}
            variant="flat"
        />
    </Toolbar>
); */

export default SMS;