import {Logo} from "../Logo";
import {List, ListItem} from "@mui/material";
import {NavLink} from "./NavLink";

export const Nav = () => {
    return (
        <nav className='flex items-center h-full pt-2 pb-2 '>
            <Logo/>

            <List className='flex w-full items-end gap-10'>
                <ListItem>
                    <NavLink link={'/'} title={'Home'}/>
                </ListItem>
                <ListItem>
                    <NavLink link={'#'} title={'Cryptocurrencies'}/>
                </ListItem>
                <ListItem>
                    <NavLink link={'/news'} title={'News'}/>
                </ListItem>
                <ListItem>
                    <NavLink link={'#'} title={'Info'}/>
                </ListItem>
            </List>

        </nav>
    )
}