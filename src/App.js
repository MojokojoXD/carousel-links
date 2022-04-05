import React from 'react';
import Product from './components/Product';
import { Outlet } from 'react-router-dom';
import './App.css';



function App() {

  return (
  
        <div className="App">
          <header className="App-header">
            <Product/>
          </header>
          <Outlet/>
        </div>
  )
}

export {App as default};
