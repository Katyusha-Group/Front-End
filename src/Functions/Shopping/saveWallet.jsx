
import axios from "axios";
import { apis } from "../../assets/apis";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";
export function saveWallet(setWallet) {
    const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
    axios(apis["accounts"]["wallet"]["seeWallet"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((data) => {
        setWallet(data.balance);
        closeLoading();
      })
      .catch((error) => console.error(error));
  }