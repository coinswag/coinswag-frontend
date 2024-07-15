import { useState } from "react";
import { ServerResponse } from "../utils/types";
import showToast from "../utils/showToast";
import Cookies from "js-cookie";

const useFetch = () => {
	const [loading, setLoading] = useState(false);
	async function fetchData<T = any>(
		url: `/${string}`,
	): Promise<ServerResponse<T> | void>{
		setLoading(true);
		try {
			const usertoken = Cookies.get("coinswag-token");
			const resp = await fetch(`${import.meta.env.VITE_BASE_URL}${url}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${usertoken}`,
				},
			});
			const result = (await resp.json()) as ServerResponse<T>;
			if (!resp.ok) {
				showToast.error(result.message);
				throw new Error(result.message)
			}
			return result;
		} catch (error) {
			if (error instanceof Error) {
				showToast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return { fetchData, loading };
};

export default useFetch;
