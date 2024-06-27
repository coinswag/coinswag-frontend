import SideBar from "@/src/components/dashboard/side-bar/SideBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import TopNav from "../../../components/dashboard/top-nav/TopNav";
import "./style.scss";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import showToast from "../../../utils/showToast";
import { LoginResponse } from "../../auth/auth-section/Login";
import useCurrentUser from "../../../hooks/useCurrentUser";
import Loader from "../../../components/loader/linear-loader/Loader";

function DashboardLayout() {
  const token = Cookies.get("coinswag-token");
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = token !== undefined;
  const navigate = useNavigate();
  const { setCurrentUser, currentUser } = useCurrentUser();

  const getCurrentUserInfo = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(`${import.meta.env.VITE_BASE_URL}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = (await resp.json()) as LoginResponse;
      if (!resp.ok) {
        setIsLoading(false);
        navigate("/login");
        return showToast.error(result.message);
      }
      setCurrentUser(result.data);
      showToast.success("User Retrieved");
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        showToast.error(error.message);
        console.log(error);
        navigate("/login");
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && !currentUser) {
      getCurrentUserInfo();
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isAuthenticated && currentUser) {
    return (
      <div className="dashboard__layout">
        <TopNav />
        <SideBar />
        <div className="dashboard__outlet">
          <Outlet />
        </div>
      </div>
    );
  }
  if (!isAuthenticated && !currentUser) {
    return <Navigate to="/login" />;
  }
}

export default DashboardLayout;
