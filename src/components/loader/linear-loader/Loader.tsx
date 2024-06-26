import './style.scss';

function Loader({ className }: {className?: string}) {
	return (
		<div className={`linear-progress small ${className}`}>
			<div className="bar bar1"></div>
			<div className="bar bar2"></div>
		</div>
	);
}
export default Loader;