import * as style from "../assets/css/SignUp.module.css";
export function OldPasCloseEyeIcon() {
  // toggle the type attribute
  const togglePassword = document.querySelector("#oldTogglePassword");
  const passwordV = document.querySelector("#old_password_field");
  const type =
    passwordV.getAttribute("type") === "password" ? "text" : "password";

  togglePassword.className === "fa fa-eye viewpass mr-4 text-muted"
    ? (document.getElementById("oldTogglePassword").className =
      `fa fa-eye-slash ${style.viewpass} mr-4 text-muted`)
    : (document.getElementById("oldTogglePassword").className =
      `fa fa-eye ${style.viewpass} mr-4 text-muted`)
  passwordV.setAttribute("type", type);
}