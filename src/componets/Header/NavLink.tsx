import {FC} from "react";

interface NavLinkProps {
	title: string
}
export const NavLink:FC<NavLinkProps> = ({title}) => {
	return (
		<div className={'w-full'}>
			<a href="#" className='inline-block w-full text-xl text-center text-white hover:underline'>{title}</a>
		</div>
	)
}