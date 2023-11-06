import { apis } from "../../assets/apis";
/**
 *
 * @param {number} num
 * @param {number} index
 * @param {[{contain_sms, contain_email, contain_telegram,id, price}]} state
 * @param {function} setState
 */
export function changeChecked(num, index, state, setState) {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  const shopId = JSON.parse(localStorage.getItem("shopId"));
  let u = state;
  switch (num) {
    case 1:
      u[index].contain_email = !u[index].contain_email;
      break;
    case 2:
      u[index].contain_sms = !u[index].contain_sms;
      break;
    case 3:
      u[index].contain_telegram = !u[index].contain_telegram;
      break;

    default:
      break;
  }
  setState(u);
  fetch(apis["carts"] + `${shopId.id}/items/${state[index].id}/`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      complete_course_number: num,
      contain_telegram: u[index].contain_telegram,
      contain_sms: u[index].contain_sms,
      contain_email: u[index].contain_email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      let newData = state[index];
      if (data.total_price !== undefined) {
        newData.price = data.total_price;
      }
      let newList = state.map((item) => {
        if (item.id === newData.id) {
          return newData;
        }
        return item;
      });
      setState([...newList]);
    })
    .then((error) => {
      console.error(error);
    });
}
