import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import ShoppingCart from "./components/ShoppingCart.js";
import StorePage from './components/StorePage.js';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StorePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;