import {Card} from "../Card/Card";

export const Cards = () => {
	return (
		<div className={'w-full mt-16 flex flex-wrap gap-10 justify-center'}>
			<Card title={'CONNECT YOUR WALLET'} subtitle={'Use Trust Wallet, Metamask or to connect to the app.'}/>
			<Card title={'SELECT YOUR QUANTITY'} subtitle={'Upload your crypto and set a title, description and price.'}/>
			<Card title={'RECEIVE YOUR OWN NFTS'} subtitle={'Invest all your crypto at one place on one platform.'}/>
			<Card title={'CONFIRM TRANSACTION'} subtitle={'Earn by selling your crypto on our marketplace.'}/>
			<Card title={'TAKE A MARKET TO SELL'} subtitle={'Discover, collect the right crypto collections to buy or sell.'}/>
			<Card title={'DRIVE YOUR COLLECTION'} subtitle={'We make it easy to Discover, Invest and manage.'}/>
		</div>
	)
}
