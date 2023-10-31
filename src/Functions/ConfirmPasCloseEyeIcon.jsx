export function ConfirmPasCloseEyeIcon() {
    const toggleConfirmPassword = document.querySelector(
      "#toggleConfirmPassword"
    );
    const confirmPasswordV = document.querySelector("#confirm_password_field");
    const type =
      confirmPasswordV.getAttribute("type") === "password"
        ? "text"
        : "password";

    toggleConfirmPassword.className === "fa fa-eye viewpass mr-4 text-muted"
      ? (document.getElementById("toggleConfirmPassword").className =
          "fa fa-eye-slash viewpass mr-4 text-muted")
      : (document.getElementById("toggleConfirmPassword").className =
          "fa fa-eye viewpass mr-4 text-muted");
    confirmPasswordV.setAttribute("type", type);
}