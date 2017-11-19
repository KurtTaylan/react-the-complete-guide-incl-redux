const INVALID_EMPTY_STRING = 'Check for Empty Input';
const INVALID_MIN_LENGTH = 'Check for Min Length';
const INVALID_MAX_LENGTH = 'Check for Max Length';

export const checkValidity = (value, rules) => {
    let validity = {
        isValid: true,
        errorMessage: ''
    };

    if (rules) {

        if (rules.required) {
            validity.isValid = value.trim() !== '' && validity.isValid;
            if (validity.isValid) {
                validity.errorMessage = INVALID_EMPTY_STRING
            }
        }

        if (rules.minLength) {
            validity.isValid = value.length >= rules.minLength && validity.isValid;
            if (validity.isValid) {
                validity.errorMessage = INVALID_MIN_LENGTH
            }
        }

        if (rules.maxLength) {
            validity.isValid = value.length <= rules.maxLength && validity.isValid;
            if (validity.isValid) {
                validity.errorMessage = INVALID_MAX_LENGTH
            }
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            validity.isValid = pattern.test(value) && validity.isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            validity.isValid = pattern.test(value) && validity.isValid
        }
    }

    return validity;
};