import {Container} from "@mui/material";
import {useAppDispatch, userAppSelector} from "../../hooks/redux-hooks";
import {currencyNewsInterface, fetchNews} from "../../store/slices/currencyNewsSlice";
import {useEffect} from "react";
import {NewsCard} from "./NewsCard";

export const News = () => {
    const dispatch = useAppDispatch();
    const news: currencyNewsInterface = userAppSelector(state => state.currencyNews);
    useEffect(() => {
        dispatch(fetchNews({newsCategory: 'Cryptocurrency', count: 10}));
    }, []);
    return (
        <>
            <Container>
                <div className={'mt-16 flex gap-10 flex-wrap justify-between max-[665px]:justify-center'}>
                    {news
                        && news.data.value
                            .map(element =>
                                <NewsCard
                                    key={element.name}
                                    title={element.name}
                                    description={element.description}
                                    url={element.url}
                                    imgUrl={element.image?.thumbnail?.contentUrl}
                                />)
                    }
                </div>
            </Container>
        </>
    )
}
