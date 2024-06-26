import { useNavigate } from "react-router-dom";
import "./auth.scss";
import FormInput from "../../../components/auth/form-input/FormInput";
import { Fragment, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import useCurrentUser from "../../../hooks/useCurrentUser";
import showToast from "../../../utils/showToast";
import Loader from "../../../components/loader/circle-loader/Loader";
import handleGoogleAuth from "../../../firebase/firebase.google";
import { FirebaseError } from "firebase/app";


import usePost from "../../../hooks/usePost";

export interface LoginResponse {
	success: boolean;
	data: {
		_id: string;
		username: string;
		email: string;
		type: string;
		password: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
		accessToken: string;
	};
	message: string;
}

function NewStore() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const { setCurrentUser } = useCurrentUser();
	const [searchParam, setSearchParam] = useSearchParams();
	const [newStore, seteNewStore] = useState({
		name: searchParam.get("name") ?? "",
	});
	const { postData } = usePost();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		seteNewStore((userData) => ({
			...userData,
			[name]: value,
		}));
      if (name === "email") {
			setSearchParam({ ...searchParam, [name]: value });
		}
	};

	const handelSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const result = await postData("/store", newStore)

			showToast.success("Store created Sucessfully");
			navigate("/dashboard");
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
				showToast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	const loginWithGoogle = async () => {
		setLoading(true);
		try {
			const userDetails = await handleGoogleAuth();
			const resp = await fetch(
				`${import.meta.env.VITE_BASE_URL}/auth/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						...userDetails,
						username: userDetails?.displayName,
						type: "google",
					}),
				}
			);
			const result = (await resp.json()) as LoginResponse;

			if (!resp.ok) {
				console.log(result);
				throw new Error(result.message);
			}
			console.log(result);

			setCurrentUser(result.data);
			navigate("/dashboard");
			showToast.success("Welcome Back");
		} catch (error) {
			if (error instanceof FirebaseError) {
				console.log(error.message);
				showToast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="auth__modal">
			<div className="logo__container">coinswag</div>
			<h3 className="text-center text-gray-700 text-sm">
				Create you First shop.
			</h3>
			<form onSubmit={handelSubmit}>
				<FormInput
					name="name"
					type="text"
					label="Store Name"
					id="email"
					handleChange={handleChange}
					value={newStore.name}
					required
				/>
				<FormInput
					name="url"
					type="text"
					label="Shop Url"
					id="url"
					handleChange={handleChange}
					value={newStore.name}
					required
					placeholder=".coinswag.shop"
				/>
        <div className="social">
					
					<button onClick={loginWithGoogle} type="button">
          <img className="invert-[.3]" src="/icons/new-wallet.svg" alt="" />
          <p className="text-gray-900">Connect wallet</p>
					</button>
				</div>
				<button className="submit__btn">
					{" "}
					{loading ? <Loader /> : "Submit"}
				</button>

			</form>
		</div>
	);
}
export default NewStore;
