import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SaveButton,  
    CREATE,
 } from 'react-admin';
//import dataProvider from '../../dataProvider';

const WHATSAPP_SENT = 'WHATSAPP_SENT';
const sendWhatsAppMessge = (data, basePath, redirect) => ({
    type: WHATSAPP_SENT,
    payload: { data: {...data} },
    meta: { fetch: CREATE, 
        resource: 'client',
        onSuccess: {
            notification: {
                body: 'Client Created',
                level: 'info'
            },
            callback: saveAfterSendingWhatsApp,
            basePath: basePath,
            redirectTo: redirect
        },
        onFailure: {
            notification: {
                body: 'Client Not Created',
                level: 'warning'
            }
        },
        basePath: basePath,
        redirectTo: redirect
    }
})


const saveAfterSendingWhatsApp = (req, resp) => {
    console.log(req, resp);
    const phones = req.payload.data.phones;
    let number = phones.map((phone) => {
        let number = ''
        if (phone.phoneType === 'WhatsApp') {
            number = phone.phoneNumber;
        }
        return `91${number}`;
    })
    sendWhatsapp(number);
}

const sendWhatsapp = (number) => {
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=%20Welcome%20To%20Just%20Diet%20Clinic`, '_blank');
}


class SendMsg extends Component {

    state = {
        msg: 'Welcome to Just Diet',
        url: 'https://api.whatsapp.com/send?phone='
    }

    sendWhatsAppHandler = () => {
        console.log(this.props.record)
        const { basePath, handleSubmit, redirect, sendWhatsAppMessge } = this.props;

        return handleSubmit((values) => {
            sendWhatsAppMessge(values, basePath, redirect);
        })
    }

    render() {
        const { handleSubmitWithRedirect, saveAfterSendingWhatsApp, ...props } = this.props;

        return (
            <SaveButton 
                handleSubmitWithRedirect={this.sendWhatsAppHandler}
                {...props} />
        )
    }
 
}

/* const sendWhatsApp = connect(
    undefined,
    { saveAfterSendingWhatsApp }
)(SendMsg); */

export default connect(null, { sendWhatsAppMessge })(SendMsg);