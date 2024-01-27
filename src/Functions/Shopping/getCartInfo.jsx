import { apis } from "../../assets/apis";


export function getCartInfo(setState, setTotalPrice, setAmount,setLoading) {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const shopId = JSON.parse(localStorage.getItem("shopId"));
  fetch(apis["carts"], {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .then((data) => {
      setState(data.items);
      setTotalPrice(data.total_price);
      setAmount(data.total_number);
      setLoading(false);
    })
    .catch((error) => console.error(error));
}
