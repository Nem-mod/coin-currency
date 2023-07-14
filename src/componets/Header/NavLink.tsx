import {FC} from "react";
import {Link} from "react-router-dom";

interface NavLinkProps {
	title: string,
	link: string
}
export const NavLink:FC<NavLinkProps> = ({title, link}) => {
	return (
		<div className={'w-full'}>
			<Link to={link} className='inline-block w-full text-xl text-center text-white hover:underline'>{title}</Link>
		</div>
	)
}