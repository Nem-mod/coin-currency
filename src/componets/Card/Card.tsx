import {FC} from "react";

export const Card:FC<{ title: string, subtitle: string }> = ({title, subtitle}) => {
	return (
		<div className={'w-80 p-8  text-white rounded-md bg-gradient-to-r from-purple-600 to-blue-400'}>
			<h3 className={'text-xl'}>{title}</h3>
			<h4 className={'mt-6 text-lg'}>{subtitle}</h4>
		</div>
	)
}
