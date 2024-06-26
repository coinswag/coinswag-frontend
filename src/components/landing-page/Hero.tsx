import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Hero() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const token = Cookies.get("coinswag-token");
    if (token) {
      return navigate("/dashboard");
    }
    navigate("/login");
  };
  return (
    <section className="h-screen flex justify-center items-center relative overflow-hidden ">
      <img className="absolute top-0 left-0" src="/icons/ellipse.svg" alt="" />
      <img
        className="absolute bottom-0 right-0  rotate-180"
        src="/icons/ellipse.svg"
        alt=""
      />
      <div className="text-center relative">
        <img
          className="absolute  bottom-[90%] right-0 w-20 rotate-45 "
          src="/images/curved-arrow.png"
          alt=""
        />
        <img
          className="absolute top-full left-0"
          src="/images/curly-arrow.png"
          alt=""
        />
        <h1 className="text-6xl font-bold mb-6 leading-[1.1]">
          The web3 platform for <br /> community-driven merchandise
        </h1>
        <p>
          <span className="text-primary">CoinSwag</span>  is a platform that enables creators and communities to effortlessly create storefronts and sell merch and branded items,
        </p>
        <p>
        powered by blockchain technology and crypto payments.{" "}
        </p>
        <button
          className="bg-primary px-14 py-3 rounded-3xl font-bold mt-6 text-sm text-white flex justify-center items-center gap-1 mx-auto"
          onClick={handleNavigate}
        >
          <img className="w-5 invert" src="/icons/shop.svg" alt="" />
          Get Started
        </button>
      </div>
    </section>
  );
}
export default Hero;
