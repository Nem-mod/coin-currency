import {Container, Table, TableCell, TableHead, TableRow} from "@mui/material";
import {CoinTable} from "./CoinTable";
export const Main = () => {
    return (
        <main className={'mt-16'}>
            <Container className={''}>
                <h1 className={"w-full mt-4 text-lg font-bold after:content-[''] after:block after:w-full after:h-1 after:mt-3 after:bg-purple-300"}>Currencies</h1>
                <Table className={'h-full mt-6 p-4'} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell className={'font-bold'}>#</TableCell>
                            <TableCell className={'font-bold'}>Coin</TableCell>
                            <TableCell className={'font-bold'}>Price</TableCell>
                            <TableCell className={'font-bold'}>24h Volume</TableCell>
                            <TableCell className={'font-bold'}>Mkt Cap</TableCell>
                            <TableCell className={'font-bold'}>Last 7 Days</TableCell>
                        </TableRow>
                    </TableHead>
                    <CoinTable className={'mt-16'}/>
                </Table>
            </Container>
        </main>
    )
}