export function returnToken() {
  try {
    const token =
      localStorage.getItem("authTokens") === null
        ? ""
        : JSON.parse(localStorage.getItem("authTokens")).token.access;
    return token;
  } catch (e) {
    return "";
  }
}
