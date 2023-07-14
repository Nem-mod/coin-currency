import {Card, Icon} from "@mui/material";
import {FC} from "react";

interface NewsCardInterface {
    description: string,
    url: string,
    title: string,
    imgUrl: string
}

export const NewsCard: FC<NewsCardInterface> = ({description, url, title, imgUrl}) => {
    return (
        <>
            <Card className={'w-1/4 p-4'}>
                <div className={'flex flex-wrap h-48'}>
                    <h2 className={'flex-1 text-lg font-bold'}>{title}</h2>
                    <div className={'w-1/3 h-20'} style={{
                        background: `url(${imgUrl}) 100% 100% no-repeat`,
                    }}>
                    </div>
                </div>
                <p className={'mt-4'}>{description}</p>
            </Card>
        </>
    )
}