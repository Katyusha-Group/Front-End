import * as style from "../assets/css/SignUp.module.css";
export function PasCloseEyeIcon() {
    const togglePassword = document.querySelector("#togglePassword");
    const passwordV = document.querySelector("#password_field");
    const type = passwordV.getAttribute("type") === "password" ? "text" : "password";

    togglePassword.className === `fa fa-eye ${style.viewpass} mr-4 text-muted`
      ? (document.getElementById("togglePassword").className =
      `fa fa-eye-slash ${style.viewpass} mr-4 text-muted`)
      : (document.getElementById("togglePassword").className =
      `fa fa-eye ${style.viewpass} mr-4 text-muted`);
    passwordV.setAttribute("type", type);
  }