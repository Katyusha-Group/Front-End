import { apis } from "../../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
const token = JSON.parse(localStorage.getItem("authTokens")).token.access;

export function getCartInfo(setState, setTotalPrice, setAmount) {
  showLoading();
  const shopId = JSON.parse(localStorage.getItem("shopId"));
  fetch(apis["carts"], {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .then((data) => {
      setState(data.items);
      setTotalPrice(data.total_price);
      setAmount(data.total_number);
      closeLoading();
    })
    .catch((error) => console.error(error));
  closeLoading();
}
