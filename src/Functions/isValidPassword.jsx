export function isValidPassword(pass) {
    return /[a-zA-Z]/.test(pass);
}