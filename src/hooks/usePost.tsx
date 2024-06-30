import { useState } from "react";
import showToast from "../utils/showToast";
import Cookies from "js-cookie";
import { ServerResponse } from "../utils/types";

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const postData = async (url: `/${string}`, body: any) => {
    setLoading(true);
    try {
      const usertoken = Cookies.get("coinswag-token");
      const resp = await fetch(`${import.meta.env.VITE_BASE_URL}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usertoken}`,
        },
        body: body,
      });
      const result = (await resp.json()) as ServerResponse;

      if (!resp.ok) {
        console.log(result);
        return showToast.error(result.message);
      }
      return result;
    } catch (error) {
      if (error instanceof Error) {
        showToast.error(error.message);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading };
};

export default usePost;
