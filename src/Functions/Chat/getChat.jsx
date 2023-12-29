import axios from "axios";
import { apis } from "../../assets/apis";
export function getChat(setValue, username, setLoading) {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  axios(apis["chat"]["chatWith"]+username+"/", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((data) => {
      console.log("🚀 ~ file: getChat.jsx:9 ~ .then ~ data:", data.data.messages)
      setValue((x) => {
        let val = data.data.messages.map((item,index) => {
          return { id: item.author, messageId: index, text: item.content };
        });
        return [...x, ...val];
      });
    })
    .catch((error) => console.error(error));
}
