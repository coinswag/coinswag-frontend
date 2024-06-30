import { useConnectWallet } from "@web3-onboard/react";

export function ConnectWallet() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const abbreviateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div>
      <button
        disabled={connecting || !!wallet}
        onClick={() =>
          wallet ? disconnect({ label: wallet.label }) : connect()
        }
      >
        {connecting
          ? "connecting"
          : wallet
          ? abbreviateAddress(wallet.accounts[0].address)
          : "connect"}
      </button>
    </div>
  );
}
