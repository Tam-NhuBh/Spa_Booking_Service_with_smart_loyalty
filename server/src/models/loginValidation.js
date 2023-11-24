function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=[A-Z])(?=\w{4,})/

    if (values.email === "") {
        error.email = 'Email should not be empty';
    } else if (!email_pattern.test(values.email)) {
        error.email = 'Email is not matched';
    } else {
        error.email = '';
    }

    if (values.password === "") {
        error.password = 'Password should not be empty';
    } else if (!password_pattern.test(values.password)) {
        error.password = 'Password must have at least 4 letters with first letter is capital';
    } else {
        error.password = '';
    }
    return error;
}
export default Validation;