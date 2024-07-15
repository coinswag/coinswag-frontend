// import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import useCurrentUser from "../../../hooks/useCurrentUser";
import "./style.scss";
// import showToast from "../../../utils/showToast";
// import Cookies from "js-cookie";
import ShopAvatar from "./ShopAvatar";
import useCurrentStore from "@/src/hooks/useCurrentStore";
import useCurrentShop from "@/src/hooks/useCurrentShop";
import { Link } from "react-router-dom";

function SideBar() {
  const setSideBar = useCurrentUser((state) => state.setSideBar);
  const currentUser = useCurrentUser((state) => state.currentUser);
  const { currentShop } = useCurrentShop();
  // const sideBarState = useCurrentUser((state) => state.sideBar);
  // const navigate = useNavigate();

  const { sideBar } = useCurrentUser();

  const handleNavLinkClick = () => {
    setSideBar(false);
  };
  console.log(currentUser);

  // const handleLogOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   Cookies.remove("doctor-token");
  //   showToast.success("Signed Out");
  //   navigate("/login", { replace: true });
  // };
  return (
    <nav className={`side__bar ${!sideBar && "hide__sidebar"}`}>
      <SidebarItem
        link="/dashboard"
        icon="/icons/home.svg"
        title="Home"
        handleClick={handleNavLinkClick}
      />
      <SidebarItem
        link="/dashboard/products"
        icon="/icons/product.svg"
        title="Products"
        handleClick={handleNavLinkClick}
      />
      <SidebarItem
        link="/dashboard/customers"
        icon="/icons/customers.svg"
        title="Customers"
        handleClick={handleNavLinkClick}
      />
      <SidebarItem
        link="/dashboard/orders"
        icon="/icons/orders.svg"
        title="Orders"
        handleClick={handleNavLinkClick}
      />
      <SidebarItem
        link="/dashboard/settings"
        icon="/icons/settings.svg"
        title="Settings"
        handleClick={handleNavLinkClick}
      />
      <div className="logout__container">
        <div className="shop__details">
          <ShopAvatar backgroundColor="#4629FA" color="#fff" initial="CN" />
          <div>
            <h2 className="text-sm font-bold text-gray-600 capitalize text-md">
              {currentShop?.name} 
            </h2>
            <Link target="_blank" to={`https://${currentShop?.name}.coinswag.shop`} >
            <div className="flex items-center text-[.8rem] text-blue-800 underline gap-1">
              view shop{" "}
              <img className="w-4" src="/icons/outside-link.svg" alt="" />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default SideBar;
