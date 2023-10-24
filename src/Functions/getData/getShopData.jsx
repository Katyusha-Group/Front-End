import { apis } from "../../assets/apis";
export function getShopData(x, SetOrderInfo, setPrices) {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  const shopId = JSON.parse(localStorage.getItem("shopId"));
  fetch(
    apis["courseCartOrderInfo"] +
      `?cart_id=${shopId.id}&complete_course_number=${x}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      SetOrderInfo(data[0]);
    })
    .catch((error) => {
      console.error(error);
    });
  fetch(apis["getPrice"], {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .then((data) => {
      setPrices(data);
    })
    .catch((error) => console.error(error));
}
