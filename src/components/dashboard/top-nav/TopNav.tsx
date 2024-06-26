import "./style.scss";
import { useState } from "react";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { UserOptions } from "./UserOptions";

function TopNav() {
  const [loading] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const handlePresentChange = () => {
    setIsPresent(!isPresent);
  };
  const { setSideBar , sideBar} = useCurrentUser();
  return (
    <nav className="dash__nav">
      <div className="logo__container">coinswag</div>
      <h1>My Sweatr Shop</h1>
      <UserOptions />

      <button onClick={() => setSideBar(!sideBar)} className="menu__btn">
        <img src={`/icons/${sideBar ? "cancel" : "menu"}.svg`} alt="" />
      </button>
    </nav>
  );
}
export default TopNav;
