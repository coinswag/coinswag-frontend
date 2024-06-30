import "./style.scss";
import { Outlet } from "react-router-dom";
import useCurrentStore from "@/src/hooks/useCurrentStore";

function AuthLayout() {
  const { currentStore } = useCurrentStore();
  return (
    <div className="auth__layout">
      <div className="testimony__bg">
        <div className="testimony">
          <img src="/images/merch/sweater.webp" alt="" />
          <div className="shop__details">
            <div className="initials">S</div>
            <div className="detials">
              <h2>{currentStore?.name}</h2>
              <p>{currentStore?.url}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="auth__cover">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
