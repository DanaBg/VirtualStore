import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import ShoppingCart from "./screens/ShoppingCart/ShoppingCart.js";
import StorePage from './screens/StorePage/StorePage.js';

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