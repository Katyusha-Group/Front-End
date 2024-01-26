import axios from "axios";
import { apis } from "../../assets/apis";
export async function getChat(setValue, username, setLoading, setInfo) {
  console.log("🚀 ~ getChat ~ username:", username)
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  await axios(apis["chat"]["chatWith"]+username+"/", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((data) => {
      console.log("🚀 ~ file: getChat.jsx:9 ~ .then ~ data:", data.data)
      setValue((x) => {
        let val = data.data.messages.map((item,index) => {
          return { id: item.author, messageId: index, text: item.content };
        });
        return [...val];
      });
      setLoading(false)
      setInfo({id:data.data.id, participants:data.data.participants})
      return data.data
    })
    .catch((error) => console.error(error));
}
