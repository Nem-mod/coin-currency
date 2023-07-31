import React from 'react';
import {Header} from "./componets/Header/Header";
import {Cryptocurrencies} from "./componets/Cryptocurrencies/Cryptocurrencies";
import {Route, Routes} from "react-router";
import {News} from "./componets/News/News";
import {Footer} from "./componets/Footer/Footer";
import {Home} from "./componets/HomePage/Home";

function App() {
    return (
        <div className="App flex flex-col">
            <Header/>
            <main className={'h-full basis-auto flex-grow flex-shrink'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/currencies'} element={<Cryptocurrencies/>}/>
                    <Route path={'/news'} element={<News/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
