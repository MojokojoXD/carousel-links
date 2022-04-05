import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom'

function Details(){
    let navigate = useNavigate();

    const back = {
        fontSize: '1em',
        width: '60px',
        margin: '0 auto'
    }

    return (
      <div className="App">
        <div className="App-header">
          <h1>Details</h1>
          <button onClick={() => navigate(-1)} style={back}>Back</button>
          <div className='products'>
            <Outlet />
          </div>
        </div>
      </div>
    );
}


export {Details as default};