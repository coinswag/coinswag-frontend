import "./style.scss";
import { useState } from "react";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { UserOptions } from "./UserOptions";
import { Button } from "../../ui/button";

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
      <Button className="ml-auto mr-4 px-4 text-sm bg-primary text-white font-bold" variant="outline">Connect wallet</Button>
      <UserOptions />

      <button onClick={() => setSideBar(!sideBar)} className="menu__btn">
        <img src={`/icons/${sideBar ? "cancel" : "menu"}.svg`} alt="" />
      </button>
    </nav>
  );
}
export default TopNav;
