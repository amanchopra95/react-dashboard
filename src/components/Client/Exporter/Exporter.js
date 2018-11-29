import { downloadCSV } from 'react-admin';
//import { unparse as converToCSV } from 'papaparse/papaparse.min';

const exporter = (clients) => {
    const clientsForExport = objectsToCSV(clients);
    //let type = '';
    //let number = '';
    /* const exporter = clients.map((client) => {
        client.phones.forEach((phone) => {
            type += phone.phoneType;
            number += phone.phoneNumber;
            client.phoneType = type;
            client.phoneNumber = number;
        })
        return client;
    }) */
    downloadCSV(clientsForExport, 'client');
}


const objectsToCSV = (arrayOfObjects) => {
    const keys = new Set(arrayOfObjects.reduce((acc, item) => [...acc, ...getKeys(item)], [])); 
    const values = arrayOfObjects.map(item => {
        const fo = flatObject(item);
        const val = Array.from(keys).map((key) => (key in fo ? escapeCsvValue(`${fo[key]}`) : ''));
        return val.join(',');
    });
    return `${Array.from(keys).join(',')}\n${values.join('\n')}`;
}

const getKeys = (obj, prefix = '') => {
    if (typeof obj === 'undefined' || obj === null) return [];
    return [
        ...Object.keys(obj).map(key => `${prefix}${key}`),
        ...Object.entries(obj).reduce((acc, [key, value]) => {
            if (typeof value === 'object') return [...acc, ...getKeys(value, `${prefix}${key}.`)];
            return acc;
        }, []),
    ];
}

const flatObject = (obj, prefix = '') => {
    if (typeof obj === 'undefined' || obj === null) return {};
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (typeof value === 'object') return { ...acc, ...flatObject(value, `${prefix}${key}.`) };
        return { ...acc, [`${prefix}${key}`]: value };
    }, {});
}

const escapeCsvValue = (cell) => {
    if (cell.replace(/ /g, '').match(/[\s,"]/)) {
        return '"' + cell.replace(/"/g, '""') + '"';
    }
    return cell;
}

export default exporter;