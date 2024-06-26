import "./eye-icon.scss";

type eyeIconProps = {
	visibility: boolean;
	handleClick: () => void;   
};

function EyeIcon({ handleClick, visibility }: eyeIconProps) {
	const checkVisibility = () =>
		`/icons/${visibility ? "eye-opened" : "eye-closed"}.svg`;

	return (
		<img
			onClick={handleClick}
			src={checkVisibility()}
			alt={"eye-icon"}
			className="eye__icon"
		/>
	);
}
export default EyeIcon;