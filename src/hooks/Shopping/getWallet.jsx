import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apis } from "../../assets/apis";
import { saveWallet } from "../../Functions/Shopping/saveWallet";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
export const useSaveWallet = () => {
  const [wallet, setWallet] = useState([]);
  
  useEffect(() => {
    showLoading();
    saveWallet(setWallet);
  }, []);
  return { wallet, setWallet };
};
