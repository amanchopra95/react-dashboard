import simpleRestProvider from 'ra-data-json-server';
import { fetchUtils } from 'react-admin';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ 'Accept': "application/json" });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

export default simpleRestProvider('http://localhost:5000', httpClient);

