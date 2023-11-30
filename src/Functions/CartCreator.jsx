import React from "react";
import { apis } from "../assets/apis";
import axios from "axios";
export const CartCreator = (props) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access
  const getCart = async () => {
    const shopId = await axios(apis["carts"], {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    let idShop = await shopId.data;
    if (shopId.status == 201 || shopId.status == 200) {
      localStorage.removeItem("shopId");
      console.log("shopId deleted")
      localStorage.setItem("shopId", JSON.stringify(idShop));
      console.log("new shopId added")
      console.log("🚀 ~ file: CartCreator.jsx:22 ~ getCart ~ idShop:", idShop)
      props.setState(idShop.items);
      props.setTotalPrice(idShop.total_price)
      props.setAmount(idShop.total_number)
      return idShop
    } else {
      console.error("shopId error", shopId.status);
    }
  };
  return getCart();
};
