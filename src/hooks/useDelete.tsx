import { useState } from "react";
import { ServerResponse } from "../utils/types";
import showToast from "../utils/showToast";
import Cookies from "js-cookie";

const useDelete = () => {
  const [loading, setLoading] = useState(false);
  const deleteData = async(url: string) => {
    setLoading(true);
    try {
      const usertoken= Cookies.get("coinswag-token")
      const resp = await fetch(
         `${import.meta.env.VITE_BASE_URL}/${url}`,
         {
            method: "DELETE",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${usertoken}`
            },
         }
      );
      const result = await resp.json() as ServerResponse;
      if (!resp.ok) {
         return showToast.error(result.message);
      }
      return result;
    } catch (error) {
      if(error instanceof Error) {
         showToast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading };
};

export default useDelete;