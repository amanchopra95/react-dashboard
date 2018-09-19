import { stringify } from 'query-string';
import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    DELETE,
    GET_MANY,
    GET_MANY_REFERENCE,
} from 'react-admin';

const apiURL = 'http://localhost:5000';

const convertDataProviderToRequestToHTTP = (type, resource, params) => {
    let url = '';
    const options = {
        headers: new Headers({
            Accept: 'application/json'
        })
    };

    switch(type) {
        case GET_LIST: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                filter: JSON.stringify(params.filter),
            };
            url = `${apiURL}/${resource}?${stringify(query)}`;
            break;
        }

        case GET_ONE: 
            url = `${apiURL}/${resource}/${params.id}`;
            break;

        case CREATE:
            break; 

        case UPDATE: 
            break;

        case DELETE: 
            break;

        case GET_MANY: 
            const query = {
                filter: JSON.stringify({ id: params.id })
            }
            url = `${apiURL}/${resource}?${stringify(query)}`;
            break;

        case GET_MANY_REFERENCE: { 
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                filter: JSON.stringify(params.filter),
            };
            url = `${apiURL}/${resource}?${stringify(query)}`;
            break;
        }
        default: 
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }

    return { url, options };
};

const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
    const { headers, json } = response;

    switch(type) {
        case GET_LIST:
        case GET_MANY_REFERENCE: {
            if (!headers.has('content-range')) {
                throw new Error('The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?');
            }
            return {
                data: json.map(resource => ({...resource, id: resource.SNo})),
                total: parseInt(headers.get('content-range').split('/').pop(), 10)
            };
        }

        case CREATE: 
            return { data: { ...params.data, id: json.SNo } };

        default: return { json };
    }
};

export default (type, resource, params) => {
    const { url, options } = convertDataProviderToRequestToHTTP(type, resource, params);

    return fetch(url, options)
        .then((res) => {
            return convertHTTPResponseToDataProvider(res, type, resource, params);
        });
};



