import "./style.scss";
import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className="auth__layout">
      <div className="testimony__bg">
        <div className="testimony">
          
        </div>
      </div>
      <div className="auth__cover">
         <Outlet />
      </div>
    </div>
  )
}
export default AuthLayout;