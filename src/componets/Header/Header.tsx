import {Nav} from "./Nav";
import {Container} from "@mui/material";

export const Header = () => {
	return (
		<header className='w-full h-20 bg-gradient-to-r from-purple-600 to-blue-400'>
			<Container className='h-full' maxWidth='lg'>
				<Nav/>
			</Container>
		</header>
	)
}