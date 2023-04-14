import LoginModal from "../../views/LoginLms";

export const setLoginModalShow = (props) => {
  console.log("PROPS", props);
  return <LoginModal showModal={props} />;
};