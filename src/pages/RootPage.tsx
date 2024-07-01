import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import MyShop from "./my-shop/MyShop";

function RootPage() {
	const hostname = window.location.hostname;
   console.log(hostname)
	const parts = hostname.split(".");
	const isSubdomain = parts.length > 1;
	const subdomain = isSubdomain ? parts[0] : null;

	return (
		<Routes>
			{" "}
			{subdomain ? (
				
            <Route index element={<MyShop subdomain={subdomain} />} />
			) : (
				<Route
					index
					element={<LandingPage />}
					
				/>
			)}
		</Routes>
	);
}
export default RootPage;
