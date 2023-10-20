export function IsValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }