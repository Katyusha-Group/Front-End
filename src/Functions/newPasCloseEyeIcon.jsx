export function newPasCloseEyeIcon() {
    // toggle the type attribute
    const togglePassword = document.querySelector("#newtogglePassword");
    const passwordV = document.querySelector("#newpassword_field");
    const type =
      passwordV.getAttribute("type") === "password" ? "text" : "password";

    togglePassword.className === "fa fa-eye viewpass mr-4 text-muted"
      ? (document.getElementById("newtogglePassword").className =
          "fa fa-eye-slash viewpass mr-4 text-muted")
      : (document.getElementById("newtogglePassword").className =
          "fa fa-eye viewpass mr-4 text-muted");
    passwordV.setAttribute("type", type);
  }