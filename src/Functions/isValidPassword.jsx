export function isValidPassword(pass) {
    //console.log(/[a-zA-Z]/.test(pass));
    return /[a-zA-Z]/.test(pass);
}