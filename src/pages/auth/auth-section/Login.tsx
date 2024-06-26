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
import Cookie from "js-cookie";

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

function Login() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const { setCurrentUser } = useCurrentUser();
	const [searchParam, setSearchParam] = useSearchParams();
	const [formalUser, setFormalUser] = useState({
		email: searchParam.get("email") ?? "",
		password: "",
	});

	const handleClick = () => {
		navigate("/");
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormalUser((userData) => ({
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
			const resp = await fetch(
				`${import.meta.env.VITE_BASE_URL}/auth/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: formalUser.email,
						password: formalUser.password,
						type: "local"
					}),
				}
			);

			const result = (await resp.json()) as LoginResponse;

			if (!resp.ok) {
				return showToast.error(result.message);
			}
			Cookie.set("doctor-token", result.data.accessToken, {
				expires: 1,
				secure: true,
				sameSite: "strict",
			});
			console.log(result);
			setCurrentUser(result.data);
			showToast.success("Login Successful");
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
				<div className="logo__container">
					coinswag
				</div>
				<form onSubmit={handelSubmit}>
					<FormInput
						name="email"
						type="email"
						label
						id="email"
						handleChange={handleChange}
						value={formalUser.email}
						required
					/>
					<FormInput
						name="password"
						type="password"
						eyeicon
						label
						id="password"
						handleChange={handleChange}
						value={formalUser.password}
						required
					/>
					<label className="policy__label login__policy" htmlFor="policy">
						We use industry-standard encryption techniques to protect your
						password and other sensitive information.
					</label>
					<button className="submit__btn">
						{" "}
						{loading ? <Loader /> : "Submit"}
					</button>

					<div className="social">
						<div className="social__text">
							<p>Social Login</p>
							<span className="hr__line" />
						</div>
						<button onClick={loginWithGoogle} type="button">
							<img src="/icons/goggle.svg" alt="" />
							<p>Continue with Google</p>
						</button>
					</div>

					<label className="policy__label" htmlFor="policy">
						Don't have an account? <Link to="/register">SIGN UP</Link>
					</label>
				</form>
			</div>
	);
}
export default Login;
