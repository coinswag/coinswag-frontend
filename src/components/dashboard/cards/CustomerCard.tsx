import { addZero, shortenAddress } from "@/src/utils/utils";
import ShopAvatar from "../side-bar/ShopAvatar";
import "./style.scss";

type CustomeCardProps = {
	name: string;
	walletAddress: string;
	date: string;
	orders: number;
	price: number;
	backgroundColor: string;
	color: string;
	email: string;
};

function CustomerCard(props: CustomeCardProps) {
	return (
		<article className="customer__card items-center [&>p]:text-sm">
			<div className="customere__details flex items-center gap-2 px-3 py-2">
				<ShopAvatar
					backgroundColor={props.backgroundColor}
					color={props.color}
					initial={props.name[0]}
				/>
				<p className="text-sm">{props.name}</p>
			</div>
			<p className="address">{shortenAddress(props.walletAddress)}</p>
			<p className="email">{props.email}</p>
			<p className="date">{props.date}</p>
			<p className="orders">{addZero(props.orders)}</p>
			<p className="flex items-center gap-2">
				<img className="w-6" src="/icons/usdt.svg" alt="" />
				{addZero(props.price)}
			</p>
		</article>
	);
}
export default CustomerCard;
