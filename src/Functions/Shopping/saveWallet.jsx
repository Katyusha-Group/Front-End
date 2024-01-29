
import axios from "axios";
import { apis } from "../../assets/apis";
import { returnToken } from "../returnToken";
export function saveWallet(setWallet) {
  const token = returnToken();
  axios(apis["accounts"]["wallet"]["seeWallet"], {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((data) => {
      setWallet(data.balance);
    })
    .catch((error) => console.error(error));
}