import { useState } from "react";
import showToast from "../utils/showToast";
import Cookies from "js-cookie";
import { ServerResponse } from "../utils/types";

const usePost = () => {
	const [loading, setLoading] = useState(false);
	async function postData<T = any>(
		url: `/${string}`,
		body: any
	): Promise<ServerResponse<T> | void>{
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
			const result = (await resp.json()) as ServerResponse<T>;

			if (!resp.ok) {
				console.log(result);
			  showToast.error(result.message);
        throw new Error(result.message)
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
	}

	return { postData, loading };
};

export default usePost;
