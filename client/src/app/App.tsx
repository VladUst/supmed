import React from 'react';
import { Navbar } from '../widgets/Navbar';
import { AppRouter } from './providers/Router';

function App () {
  return (
      <div className="app">
          <Navbar/>
          <div className="content">
              <AppRouter/>
          </div>
      </div>
  );
}

export default App;
