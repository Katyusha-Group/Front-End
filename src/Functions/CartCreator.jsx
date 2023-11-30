import React from "react";
import { apis } from "../assets/apis";
import axios from "axios";
export const CartCreator = (props) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access
  const getCart = async () => {
    const shopId = await axios(apis["carts"], {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("🚀 ~ file: CartCreator.jsx:9 ~ getCart ~ axios:", axios)
    let idShop = await shopId.json();
    if (shopId.status == 201 || shopId.status == 200) {
      localStorage.setItem("shopId", JSON.stringify(idShop));
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
