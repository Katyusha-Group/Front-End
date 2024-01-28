import { apis } from "../../assets/apis";
import axios from "axios"
export const getReplies = (setData, setLoading, link) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
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
    })
    .catch();
};
