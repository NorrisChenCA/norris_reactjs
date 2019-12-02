import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hi from './components/Hi'
import Greet2 from './components/Greet2'
import Message from './components/Message';
import Message2 from './components/Message2';
import Greet3 from './components/Greet3';
function App() {
  return (
    <div className="App">
      <Greet3 name = "Stark" otherName = "Stank" />
      {/*<Welcome />*/}
      { /*<Hi />*/}
    </div>
  );
}

export default App;
