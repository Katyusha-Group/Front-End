import { apis } from "../../assets/apis";
import axios from "axios"
import { showLoading, closeLoading } from "../../components/LoadingAlert/LoadingAlert";
export const getReplies = (setData, setLoading, link) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  showLoading();
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: link,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .request(config)
    .then((response) => {
      setLoading(false);
      setData(response.data);
      console.log("🚀 ~ file: getReplies.jsx:21 ~ .then ~ response.data:", response.data)
      closeLoading();
    })
    .catch();
};
