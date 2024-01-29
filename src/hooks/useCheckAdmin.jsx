import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import { useInfo } from "../contexts/InfoContext";
import { useNavigate } from "react-router-dom";
import { returnToken } from "../Functions/returnToken";
export const useCheckAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  let num = 0;
  const { info, changeInfo } = useInfo();
  useEffect(() => {
    const token = returnToken();

    const fetchData = async () => {
      try {
        const profileResponse = await fetch(apis["accounts"]["checkIsAdmin"], {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await profileResponse.json();
        console.log("🚀 ~ fetchData ~ data:", data)
        changeInfo("checkAdmin", data.is_admin);
        setIsAdmin(data.is_admin);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (!info.oneTimeLoadCheckAdmin) {
      fetchData();
      changeInfo("oneTimeLoadCheckAdmin", true);
    } else {
      setIsAdmin(info.checkAdmin);
      setLoading(false);
    }
  }, []);
  return { isAdmin, setIsAdmin, loading };
};
