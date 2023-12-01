import { apis } from "../../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";

export function getCartInfo(setState, setTotalPrice, setAmount,setLoading) {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  showLoading();
  const shopId = JSON.parse(localStorage.getItem("shopId"));
  fetch(apis["carts"], {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("🚀 ~ file: getCartInfo.jsx:16 ~ .then ~ data:", data.items)
      setState(data.items);
      setTotalPrice(data.total_price);
      setAmount(data.total_number);
      closeLoading();
      setLoading(false);
    })
    .catch((error) => console.error(error));
  closeLoading();
}
