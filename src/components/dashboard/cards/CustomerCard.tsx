import ShopAvatar from "../side-bar/ShopAvatar";
import "./style.scss";

type CustomeCardProps = {
   name: string;
   walletAddress: string;
   date: string;
   orders: number;
   amount: number
};


function CustomerCard(props: CustomeCardProps) {
  return (
    <article className="customer__card">
      <div className="customere__details">
         <ShopAvatar initial="A" />
         <p>Anioke Sebastian</p>
      </div>
      <p className="address">0x..q34e3224fjw</p>
      <p className="data">2023-06-03</p>
      <p className="amount">29</p>
      <p className="price">23 USDT</p>
    </article>
  )
}
export default CustomerCard

