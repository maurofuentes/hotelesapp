import React from 'react';
import './App.css';
import Hero from './components/Hero';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';
import { data } from './components/data';

function App() {

  const filters = {
    dateFrom : new Date(),
    dateTo : new Date(),
    country : undefined,
    price : undefined,
    rooms : undefined
  }

  const initialValuesFilter = {
    dateFrom: data.today,
    dateTo: new Date( data.today.valueOf() + 86400000 ),
    country: undefined,
    price: undefined,
    rooms: undefined
} ;

  const [ filter , setFilters ] = useState(filters);

  console.log(filter.dateFrom.toLocaleDateString());

  return (
    <div>
      <Hero
        desde={filter.dateFrom.toLocaleDateString()}
      />
      <h1
        className="title is-1"
      >
        <i
          className="fas fa-home"
        >
        </i>
          Hola!
      </h1>
       
    </div>
  );
}

export default App;
