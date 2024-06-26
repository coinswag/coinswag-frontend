import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";

type AvatarProps = {
   image?: string;
   initial: string;
}

function ShopAvatar(props: AvatarProps) {
   // const initials = props.initial[0]
	return (
		<Avatar>
			<AvatarImage src={props.image} />
			<AvatarFallback className=" bg-primary font-extrabold text-white">{props.initial}</AvatarFallback>
		</Avatar>
	);
}
export default ShopAvatar;
