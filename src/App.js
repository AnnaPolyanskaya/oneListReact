import React from 'react';

//styles
import './assets/css/common.css'
import './assets/fonts/style.css'

//components
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import Order from './Components/Order/Order'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container app-container">
        <Aside />
        <Order />
      </div>
    </div>
  );
}

export default App;
