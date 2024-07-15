import useCurrentShop from "@/src/hooks/useCurrentShop";
import useCurrentUser from "@/src/hooks/useCurrentUser";
import { Link } from "react-router-dom";

function WelcomeBoard() {
  const { currentUser } = useCurrentUser();
  const { currentShop } = useCurrentShop();
  return (
    <div className="bg-white rounded-2xl mt-4 flex justify-between  px-10 py-8 gap-4 overflow-hidden h-[18rem]">
      <div>
        <p className="text-blue-700 text-sm">Hi, {currentUser?.username}</p>
        <p className="text-2xl font-bold mt-5 leading-[1.4] text-gray-800">
          Welcome back to your {currentShop?.name}. This page gives a
          brief overview of your recent orders and sales.
        </p>
        <Link target="_blank" to={`https://${currentShop?.name}.coinswag.shop`} className="flex items-center justify-center mt-8 gap-2 bg-slate-800 text-white px-8 py-3 text-sm rounded-2xl w-fit">
          View shop{" "}
          <img className="invert w-5" src="/icons/outside-link.svg" alt="" />
        </Link>
      </div>
      <img
        className="relative bottom-12 h-[30rem] block"
        src="/icons/welcome-home-2.svg"
        alt=""
      />
    </div>
  );
}
export default WelcomeBoard;
