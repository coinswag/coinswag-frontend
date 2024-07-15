import "./style.scss";
// import { useState } from "react";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { UserOptions } from "./UserOptions";
import { Button } from "../../ui/button";
import { useConnectWallet } from "@web3-onboard/react";
import useCurrentShop from "@/src/hooks/useCurrentShop";

function TopNav() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const abbreviateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // const [loading] = useState(false);
  // const [isPresent, setIsPresent] = useState(false);
  // const handlePresentChange = () => {
  //   setIsPresent(!isPresent);
  // };
  const { setSideBar, sideBar } = useCurrentUser();
  const { currentShop } = useCurrentShop();
  return (
    <nav className="dash__nav">
      <div className="logo__container">coinSwag</div>
      <h1 className="capitalize">{currentShop?.name}</h1>
      <Button
        className="ml-auto mr-4 px-4 text-sm bg-primary text-white font-bold"
        variant="outline"
        disabled={connecting || !!wallet}
        onClick={() =>
          wallet ? disconnect({ label: wallet.label }) : connect()
        }
      >
        {connecting
          ? "connecting..."
          : wallet
          ? abbreviateAddress(wallet.accounts[0].address)
          : "connect wallet"}{" "}
      </Button>
      <UserOptions />

      <button onClick={() => setSideBar(!sideBar)} className="menu__btn">
        <img src={`/icons/${sideBar ? "cancel" : "menu"}.svg`} alt="" />
      </button>
    </nav>
  );
}
export default TopNav;
