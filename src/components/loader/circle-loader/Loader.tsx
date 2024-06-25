import "./style.scss";

function Loader({color = "white"}) {
	return (
		<svg
			className="container"
			viewBox="0 0 40 40"
			height="40"
			width="40"
		>
			<circle
				className="track"
				cx="20"
				cy="20"
				r="17.5"
				pathLength="100"
				strokeWidth="5px"
				fill="none"
			/>
			<circle
				className="car"
				cx="20"
				cy="20"
				r="17.5"
				pathLength="100"
				strokeWidth="5px"
            style={{stroke: color}}
			/>
		</svg>
	);
}
export default Loader;