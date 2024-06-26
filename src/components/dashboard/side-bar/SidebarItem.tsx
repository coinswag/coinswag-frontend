import { NavLink, useLocation } from 'react-router-dom';

type SideItemProps = {
   icon: string;
   title: string;
   link: string;
   handleClick: (e: React.MouseEvent<HTMLAnchorElement>)=> void
}

const SidebarItem = ({ icon, title, link, handleClick }: SideItemProps) => {
	const location = useLocation();
	console.log(location.pathname)


	return (
		<NavLink onClick={handleClick} className={`${location.pathname == link && "active__link"} sidebar__item`} to={link}>
			<img className='' src={icon} alt="" />
			<h2 className="">{title}</h2>
		</NavLink>
	);
};

export default SidebarItem;