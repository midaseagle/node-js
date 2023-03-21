const validator = require('validator')

const email1 = 'test@test.com';
const email2 = 'abcDE123';

const isValidEmail1 = validator.isEmail(email1)
const isValidEmail2 = validator.isEmail(email2)

if(isValidEmail1 && isValidEmail2) {
    console.log('Both emails are valid.')
} else if (isValidEmail1) {
    console.log('First email is valid, but second email is not.')
} else if (isValidEmail2) {
    console.log('Second email is valid, but first email is not.')
} else {
    console.log('Neither email is valid.')
}

