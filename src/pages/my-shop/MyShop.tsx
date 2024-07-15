import "./style.scss";
import { Button } from "@/src/components/ui/button";
import ShopList from "@/src/components/dashboard/lists/ShopList";
import CartSheet from "@/src/components/dashboard/cards/CartSheet";
import { useEffect, useState } from "react";
import useFetch from "@/src/hooks/useFetch";
import { ServerResponse } from "@/src/utils/types";
import Loader from "@/src/components/loader/linear-loader/Loader";
import useCurrentShop, { IShop } from "@/src/hooks/useCurrentShop";
import { useConnectWallet } from "@web3-onboard/react";
import useCurrentStore from "@/src/hooks/useCurrentStore";
import useCart from "@/src/hooks/useCart";

type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export type Merch = {
  createdAt: string;
  description: string;
  images: string[];
  isActive: boolean;
  name: string;
  price: number;
  sizes: ProductSize[];
  store: string;
  tokenId: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

function MyShop({ subdomain }: { subdomain: string }) {
  const [userMerch, setUserMerch] = useState<Merch[] | null>(null);
  const [filteredMerch, setFilteredMerch] = useState<Merch[] | null>(null);
  const { fetchData, loading } = useFetch();
  const { setCurrentShop } = useCurrentShop();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const { setCartItems } = useCart();
  const { currentStore } = useCurrentStore();
  console.log("hey! I have a new store: ", currentStore);

  const abbreviateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getUsersProduct = async () => {
    try {
      console.log(subdomain);
      const storeName = subdomain;
      const merch = (await fetchData(
        `/store/find?name=${storeName}`
      )) as ServerResponse<{ products: Merch[] }>;
      console.log(merch);
      setUserMerch(merch.data.products);
      setFilteredMerch(merch.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value.toLowerCase();
    if (!searchValue) {
      return setFilteredMerch(userMerch);
    }
    const matchingProducts = userMerch?.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setFilteredMerch(matchingProducts!);
  };

  useEffect(() => {
    getUsersProduct();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!loading && Array.isArray(filteredMerch)) {
    return (
      <section className="my__shop bg-gray-50">
        <div className=" relative h-[14rem] bg shop__bg">
          <div className="absolute -translate-x-1/2 -translate-y-12 left-1/2 top-full flex flex-col justify-center ">
            <img
              className="bg-white p-2 shadow-lg w-[6rem] h-[6rem] rounded-full block mx-auto"
              src="/icons/dummy-logo.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-8 h-[8vh] fixed w-full top-0 left-0 bg-white z-20 shadow-lg gap-3">
          <div>
            <p className="flex justify-center items-center text-primary font-black uppercase text-xl font-raleway">
              Sweatr
            </p>
          </div>
          <Button
            variant="outline"
            className="ml-auto text-semeibold block border border-gray-300 px-4 h-[70%] text-gray-500 rounded-lg text-sm bg-white"
            disabled={connecting || !!wallet}
            onClick={() =>
              wallet ? disconnect({ label: wallet.label }) : connect()
            }
          >
            {connecting
              ? "connecting"
              : wallet
              ? abbreviateAddress(wallet.accounts[0].address)
              : "Connect Wallet"}
          </Button>
          <CartSheet />
        </div>
        <div className="relative mt-[5rem] w-[45%] h-12  mx-auto">
          <input
            className=" rounded-3xl   block border h-full w-full border-gray-500 outline- indent-12 focus:outline-none -z-10 text-gray-700"
            placeholder="Search Products here"
            onChange={handleSearchChange}
          />
          <img
            className="h-[50%] absolute top-1/2 -translate-y-1/2 left-4 invert-[.5]"
            src="/icons/search.svg"
            alt=""
          />
        </div>

        <ShopList products={filteredMerch} />
      </section>
    );
  }

  if (!loading && filteredMerch === null) {
    return (
      <div>
        <img src="/icons/shop-color.svg" alt="" />
        <h2>Shop Does Not Exist</h2>
      </div>
    );
  }
}
export default MyShop;
