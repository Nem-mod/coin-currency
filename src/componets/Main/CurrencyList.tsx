import {List} from "@mui/material";
import {FunctionComponent, useEffect} from "react";
import {useAppDispatch, userAppSelector} from "../../hooks/redux-hooks";
import {CurrencyListInterface, fetchCoins} from "../../store/slices/currencyListSlice";
import {CurrencyListItem} from "./CurrencyListItem";

export const CurrencyList:FunctionComponent<{className: string}> = ({className}) => {
	const dispatch = useAppDispatch();
	const exchanges:CurrencyListInterface = userAppSelector(state => state.currencyList);
	useEffect(() => {
		dispatch(fetchCoins());
	}, [])
	return (
		<List className={className + ' '}>
			{ exchanges.data.coins && exchanges.data.coins.map(element => <CurrencyListItem key={element.uuid} iconUrl={element.iconUrl} name={element.name} price={element.price}/>)}
		</List>
	)
}