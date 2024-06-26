import "./style.scss";
import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className="auth__layout">
      <div className="testimony__bg">
        <div className="testimony">
          <img src="/images/merch/sweater.webp" alt="" />
          <div className="shop__details">
            <div className="initials">S</div>
            <div className="detials">
              <h2>Sweatr Shop</h2>
              <p>sweatr.coinswap.shop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="auth__cover">
         <Outlet />
      </div>
    </div>
  )
}
export default AuthLayout;