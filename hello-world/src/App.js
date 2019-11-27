import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hi from './components/Hi'
import Greet2 from './components/Greet2'
function App() {
  return (
    <div className="App">
      <Greet2 name="user1" /> 
      <Greet2 name="user2" /> 
      {/*<Welcome />*/}
      { /*<Hi />*/}
    </div>
  );
}

export default App;
