import {TableBody} from "@mui/material";
import {FunctionComponent, useEffect} from "react";
import {useAppDispatch, userAppSelector} from "../../hooks/redux-hooks";
import {CurrencyListInterface, fetchCoins} from "../../store/slices/currencyListSlice";
import {CoinTableRow} from "./CoinTableRow";

export const CoinTable: FunctionComponent<{ className: string }> = ({className}) => {
    const dispatch = useAppDispatch();
    const exchanges: CurrencyListInterface = userAppSelector(state => state.currencyList);
    useEffect(() => {
        dispatch(fetchCoins());
    }, [])
    return (
        <TableBody className={className + ' '}>
            {exchanges.data.coins
                && exchanges.data.coins
                    .map(element =>
                        <CoinTableRow key={element.uuid}
                                      name={element.name}
                                      price={+element.price}
                                      iconUrl={element.iconUrl}
                                      volume={+element["24hVolume"]}
                                      rank={element.rank}
                                      symbol={element.symbol}
                                      marketCap={element.marketCap}
                                      change={element.change}
                        />)}
        </TableBody>
    )
}