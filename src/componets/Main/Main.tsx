import {Container} from "@mui/material";
import {CurrencyList} from "./CurrencyList";

export const Main = () => {
    return (
        <main className={'mt-16'}>
            <Container>
                <div className={'h-full p-4 border-4 border-purple-500 rounded'}>
                    <h1 className={"w-full  text-lg font-bold after:content-[''] after:block after:w-full after:h-1 after:bg-purple-300"}>Currencies</h1>
                    <CurrencyList className={'mt-16'}/>
                </div>
            </Container>
        </main>
    )
}