import React from 'react';
import {Header} from "./componets/Header/Header";
import {Main} from "./componets/Main/Main";
import {Route, Routes} from "react-router";
import {News} from "./componets/News/News";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/news'} element={<News/>}/>
            </Routes>
        </div>
    );
}

export default App;
