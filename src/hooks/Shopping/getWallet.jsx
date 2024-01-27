import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apis } from "../../assets/apis";
import { saveWallet } from "../../Functions/Shopping/saveWallet";
export const useSaveWallet = () => {
  const [wallet, setWallet] = useState([]);
  
  useEffect(() => {
    saveWallet(setWallet);
  }, []);
  return { wallet, setWallet };
};
