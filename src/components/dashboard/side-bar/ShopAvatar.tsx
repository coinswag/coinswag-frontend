type AvatarProps = {
	image?: string;
	initial: string;
	backgroundColor: string;
	color: string;
};

function ShopAvatar(props: AvatarProps) {
	// const initials = props.initial[0]
	return (
		<div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
			{props.image ? (
				<img src={props.image} alt="" />
			) : (
				<span style={{backgroundColor: props.backgroundColor, color: props.color}} className="h-full w-full flex justify-center items-center font-bold uppercase">{props.initial}</span>
			)}
		</div>
	);
}
export default ShopAvatar;
