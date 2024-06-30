import { useNavigate } from "react-router-dom";
import "./auth.scss";
import FormInput from "../../../components/auth/form-input/FormInput";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import useCurrentUser from "../../../hooks/useCurrentUser";
import showToast from "../../../utils/showToast";
import Loader from "../../../components/loader/circle-loader/Loader";
// import handleGoogleAuth from "../../../firebase/firebase.google";
// import { FirebaseError } from "firebase/app";

import usePost from "../../../hooks/usePost";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import { merchStoreFactoryAbi, merchStoreFactoryAddress } from "@/src/lib/abi";
import { ConnectWallet } from "@/src/components/ui/connect-wallet";
import { parseEventLogs } from "viem";
import { useConnectWallet } from "@web3-onboard/react";
import useCurrentStore from "@/src/hooks/useCurrentStore";

export interface LoginResponse {
  success: boolean;
  data: {
    _id: string;
    username: string;
    email: string;
    type: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    accessToken: string;
  };
  message: string;
}

function NewStore() {
  const { data: hash, error, writeContract, isPending } = useWriteContract();

  const [{ wallet, connecting: connectingWallet }] = useConnectWallet();

  const { isDisconnected } = useAccount();
  const { addStore, setCurrentStore } = useCurrentStore();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  // const { setCurrentUser } = useCurrentUser();
  const [searchParam, setSearchParam] = useSearchParams();
  const [newStore, setNewStore] = useState({
    name: searchParam.get("name") ?? "",
  });
  const { postData } = usePost();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setNewStore((userData) => ({
      ...userData,
      [name]: value,
    }));

    if (name === "email") {
      setSearchParam({ ...searchParam, [name]: value });
    }
  };

  const {
    data: txReceipt,
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    writeContract({
      address: merchStoreFactoryAddress,
      abi: merchStoreFactoryAbi,
      functionName: "createStore",
      args: [newStore.name, "MERCHANT", `${newStore.name}.coinSwag.shop`],
    });
  };

  useEffect(() => {
    if (isDisconnected) {
      showToast.error("Please connect your wallet");
      setIsLoading(false);
      return;
    }
    // function getEventArgs(
    //   txReceipt: ethers.ContractReceipt,
    //   eventSignature: string
    // ) {
    //   const iface = new ethers.utils.Interface(merchStoreFactoryAbi);
    //   // Find the log for your event
    //   const log = txReceipt.logs.find(
    //     (log) => log.topics[0] === ethers.utils.id(eventSignature)
    //   );
    //   if (log) {
    //     const parsedLog = iface.parseLog(log);
    //     return parsedLog.args;
    //   }
    // }
    const createStoreOnBackend = async () => {
      // console.log(txReceipt);
      if (txReceipt && isConfirmed) {
        const parsedLogArgs = parseEventLogs({
          logs: txReceipt.logs,
          abi: merchStoreFactoryAbi,
          eventName: "StoreCreated",
        })[0].args;

        try {
          const result = await postData(
            "/store",
            JSON.stringify({
              name: parsedLogArgs.name,
              owner: parsedLogArgs.owner,
              storeAddress: parsedLogArgs.storeAddress,
              tokenId: parsedLogArgs.storeId.toString(),
              url: `${newStore.name}.coinswag.shop`,
            })
          );
          if (result) {
            console.log("result: ", result);

            const store = result.data;
            setCurrentStore(store);

            console.log("result from backend call: ", result);
            showToast.success("Store created Successfully onChain");
            navigate("/dashboard");
          }
        } catch (error) {
          if (error instanceof Error) {
            console.log(error);
            showToast.error("Error creating store");
          }
        } finally {
          setIsLoading(false);
        }
      }
    };

    createStoreOnBackend();
  }, [
    txReceipt,
    isConfirmed,
    newStore.name,
    postData,
    isDisconnected,
    navigate,
    isConfirming,
    addStore,
    setCurrentStore,
  ]);

  // if (isConfirming) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="auth__modal">
      <div className="logo__container">coinswag</div>
      <h3 className="text-center text-gray-700 text-sm">
        Create you First shop.
      </h3>
      <form onSubmit={handelSubmit}>
        <FormInput
          name="name"
          type="text"
          label="Store Name"
          id="email"
          handleChange={handleChange}
          value={newStore.name}
          required
        />
        <FormInput
          name="url"
          type="text"
          label="Shop Url"
          id="url"
          handleChange={handleChange}
          value={newStore.name}
          required
          disabled
          text=".coinswag.shop"
        />
        <div className="social">
          <ConnectWallet />
        </div>
        <button
          className="submit__btn"
          disabled={!wallet || connectingWallet || isConfirming}
        >
          {" "}
          {isLoading || isConfirming || isPending ? <Loader /> : "Create Shop"}
        </button>
      </form>
    </div>
  );
}
export default NewStore;
