import {
    required,
    minLength,
    maxLength,
    number,
    email,
    choices
} from 'react-admin';

const validateId = [required(), number()];
const validateName = required();
const validateGender = [required(), choices(['M','F'])];
const validatePhoneType = [required(), choices(['Mobile', 'Landline', 'Whatsapp'])];
const validatePhoneNumber = [required(), minLength(0), maxLength(10)];
const validateAge = number();
const validateDOJ = required();
const validateED = required();
const validatePaid = [required(), number()];
const validateBalance = [required(), number()];
const validateVisit = choices(['Online', 'Visit']);
const validateEmail = email();

export {
    validateId,
    validateName,
    validateEmail,
    validateBalance,
    validateAge,
    validateDOJ,
    validateGender,
    validatePhoneType,
    validatePhoneNumber,
    validatePaid,
    validateVisit,
    validateED
};
