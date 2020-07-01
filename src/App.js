import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from "react";

function App() {

  const filters = {
    dateFrom : new Date(),
    dateTo : new Date(),
    country : undefined,
    price : undefined,
    rooms : undefined
  }

  const [ filter , setFilters ] = useState(filters); 

  return (
    <div className="App">
      <Hero/>
      
    </div>
  );
}

export default App;
