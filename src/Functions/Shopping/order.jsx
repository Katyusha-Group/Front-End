import { showLoading, closeLoading } from "../../components/LoadingAlert/LoadingAlert";
import { apis } from "../../assets/apis";
import { notify } from "../notify";
export function order(notificationAlertRef,saveWallet, CartCreator, setState,setTotalPrice, setAmount) {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  showLoading();
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    fetch(apis["orders"], {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_id: shopId.id,
        payment_method: "W",
      }),
    })
      .then((response) => {
        if (response.status == 400) {
          return response.json().then((data) => {
            alert(
              data.telegram +
                "\n لطفا به صفحه پروفایل بروید و روی آیکون تلگرام کلیک کنید و ربات تلگرام را فعال کنید"
            );
          });
        } else
          return response.json().then((data) => {
            notify("tl",notificationAlertRef);
            saveWallet();
            let newCart = CartCreator({ setState, setTotalPrice, setAmount });
          });
      })

      .catch((error) => {
        console.error(error);
      });
    closeLoading();
  }
