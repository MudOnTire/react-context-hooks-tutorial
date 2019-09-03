import React from 'react';
import Hooks from './hooks';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Hooks />
      </Router>
    </div>
  );
}

export default App;
