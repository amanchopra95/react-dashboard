import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'react-admin';
import decodeJwt from 'jwt-decode';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({  username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                response.json()
                    .then(({ token }) => {
                        const decodedToken = decodeJwt(token)
                        localStorage.setItem('token', token);
                        localStorage.setItem('role', decodedToken.role);
                        return Promise.resolve();
                    });
            })
    }

    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        return Promise.resolve();
    }

    if (type === AUTH_ERROR) {
        const { status } = params
        console.log(params);
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            return Promise.reject()
        }
        return Promise.resolve()
    }

    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
    }

    if (type === AUTH_GET_PERMISSIONS) {
        const role = localStorage.getItem('role');
        return role ? Promise.resolve(role) : Promise.reject();
    }

    return Promise.reject();
};