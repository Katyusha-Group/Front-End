import { apis } from "../../assets/apis";
import { returnToken } from "../returnToken";

export function getCartInfo(setState, setTotalPrice, setAmount, setLoading) {
  const token = returnToken();
  const shopId = JSON.parse(localStorage.getItem("shopId"));
  fetch(apis["carts"], {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .then((data) => {
      setState(data.length >= 0 ? data[0].items : []);
      setTotalPrice(data.total_price);
      setAmount(data.total_number);
      setLoading(false);
    })
    .catch((error) => console.error(error));
}
