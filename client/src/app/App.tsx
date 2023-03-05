import React from 'react';
import { Navbar } from '../widgets/Navbar';
import { MainPage } from '../pages/MainPage';

function App () {
  return (
      <div className="app">
          <Navbar/>
          <div className="content">
              <MainPage/>
          </div>
      </div>
  );
}

export default App;
