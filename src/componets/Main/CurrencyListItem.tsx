import {ListItem} from "@mui/material";
import {FC} from "react";

interface CurrencyListItemProps {
    name: string,
    price: number,
    iconUrl: string,
}
export const CurrencyListItem:FC<CurrencyListItemProps> = ({
    name,
    price,
    iconUrl,
                                                           }) => {
    return (

        <ListItem className={'mt-6'}>
            <div className={'flex w-full items-center justify-between'}>
                <img src={iconUrl} className={'w-12'} alt="coin-icon"/>
                <h3>{name}</h3>
                <div>{price + '$'}</div>
            </div>
        </ListItem>
    )
}