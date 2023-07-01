import React from "react";
export const CartCreator = (props) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access
  const getCart = async () => {
    const shopId = await fetch("https://katyushaiust.ir/carts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
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
