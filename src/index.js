// @ts-nocheck
import React,{createContext} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Details from './components/Details';
import ProductionID from './components/ProductID';
import App from './App';

const contextData = {
    products: ''
}
const productContext = createContext();


const router = (
    <productContext.Provider value={contextData}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='home' element={<App/>}/>
                </Route>
                <Route path='/details' element={<Details/>}>
                    <Route path=':productId' element={<ProductionID/>}/>
                </Route>
                <Route path='*' element={
                        <h1>Sorry nothing here</h1>
                    }/>
            </Routes>
        </BrowserRouter>
    </productContext.Provider>
)

ReactDOM.render(router, document.getElementById("root"));


export {productContext}