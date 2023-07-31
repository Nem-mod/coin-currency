import {Container} from "@mui/material";
import {Cards} from "../Cards/Cards";
import {useAppDispatch, userAppSelector} from "../../hooks/redux-hooks";
import {CurrencyListInterface, fetchCoins} from "../../store/slices/currencyListSlice";
import {useEffect} from "react";
import {transformBigNumber} from "../../utils/transformBigNumber";

export const Home = () => {
    const dispatch = useAppDispatch();
    const exchanges: CurrencyListInterface = userAppSelector(state => state.currencyList);
    useEffect(() => {
        dispatch(fetchCoins());
    }, [])
    return (
        <div className={'text-center'}>
            <Container className={'mt-16'}>
                <h1 className={'text-8xl font-semibold text-center'}>TRACK AND TRADE<br/>
                    <span
                        className={'text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400'}>CRYPTO CURRENCIES</span>
                </h1>
                <div className={'flex mt-32 justify-between flex-wrap'}>
                    {exchanges.data.coins
                        && exchanges.data.coins.slice(0, 4)
                            .map(element =>
                                    <div className={'flex p-5 flex-col justify-center items-center'}>
										<img className={'w-32'} src={element.iconUrl} alt="Coin"/>
										<div className={'mt-6 text-center text-xl'}>{element.name}
											<span className={`text-lg ml-2 ${element.change > 0 ? 'text-green-600' : 'text-red-600'}`}>{element.change > 0 ? '+' + element.change + '%' : element.change + '%'}</span>
										</div>
										<div className={'mt-6 text-center text-xl'}>$ {transformBigNumber(element.price)}</div>

                                    </div>
                                // <CoinTableRow key={element.uuid}
                                // 			  name={element.name}
                                // 			  price={+element.price}
                                // 			  iconUrl={element.iconUrl}
                                // 			  volume={+element["24hVolume"]}
                                // 			  rank={element.rank}
                                // 			  symbol={element.symbol}
                                // 			  marketCap={element.marketCap}
                                // 			  change={element.change}
                                // />
                            )}
                </div>
            </Container>
            <Container className={'mt-32'}>
                <h2 className={'text-7xl font-semibold text-center'}>WHY<br/>
                    <span className={'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400'}>CHOOSE US</span>
                </h2>
                <Cards/>
            </Container>
        </div>
    )
}
