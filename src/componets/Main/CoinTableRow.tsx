import {TableCell, TableRow} from "@mui/material";
import {FC} from "react";
import {transformBigNumber} from "../../utils/transformBigNumber";

interface CurrencyListItemProps {
    name: string,
    price: number,
    iconUrl: string,
    volume: number,
    rank: number,
    symbol: string,
    marketCap: string,
    change: number
}
export const CoinTableRow:FC<CurrencyListItemProps> = ({
    name,
    price,
    iconUrl,
    volume,
    rank,
    symbol,
    marketCap,
    change
                                                           }) => {
    const changeStyle = (change:number):string => {
        if(change > 0)
            return 'text-green-600'
        return 'text-red-600'
    }
    return (
        <TableRow className={'mt-6 hover:bg-violet-100'}>
            <TableCell>
                <div>{rank}</div>
            </TableCell>
            <TableCell>
                <div className={'flex items-center'}>
                    <img src={iconUrl} className={'w-12'} alt={name}/>
                    <span className={'ml-2 text-xm font-semibold'}>{name}</span>
                    <span className={'ml-2 text-xs text-gray-400'}>{symbol}</span>
                </div>
            </TableCell>
            <TableCell>
                <div>{transformBigNumber(price) + ' $'}</div>
            </TableCell>
            <TableCell>
                <div>{transformBigNumber(volume) + ' $'}</div>
            </TableCell>
            <TableCell>
                <div>{marketCap + ' $'}</div>
            </TableCell>

            <TableCell>
                <div className={'text-lg ' + changeStyle(change)}>{change > 0 ? '+' + change + '%' : change + '%'}</div>
            </TableCell>
        </TableRow>
    )
}