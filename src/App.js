import React from 'react';
import './App.css';
import Hero from './components/Hero';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';
import { data } from './data';

function App() {

  const initialValuesFilter = {
    dateFrom: data.today,
    dateTo: new Date( data.today.valueOf() + 86400000 ),
    country: 'argentina',
    price: 15,
    rooms: 3
} ;

  const [ filter , setFilters ] = useState(initialValuesFilter);

  // da formato natural a initialValuesFilter.dateFrom
  const dateFromFormat = ()=>{

    let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return filter.dateFrom.toLocaleDateString('es-MX', options);

  }

  // da formato natural a initialValuesFilter.dateTo
  const dateToFormat = ()=>{

    let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return filter.dateTo.toLocaleDateString('es-ES', options);

  }

  //maneja la vista condicional de los filtros country, price y rooms
  const handleShowConditionalFilters = () => {    

    let country, price, rooms;    

    (initialValuesFilter.country !== undefined) ? country = `en ${initialValuesFilter.country}` : country = "";

    (initialValuesFilter.price !== undefined) ? price = ` a ${initialValuesFilter.price} pesos` : price = "";    

    (initialValuesFilter.rooms !== undefined) ? rooms = ` de hasta ${initialValuesFilter.rooms} habitaciones` : rooms = "";
    
    return country + price + rooms;
  }
 
  return (
    <div>
      <Hero
        from={dateFromFormat()}
        to={dateToFormat()}
        conditionalfilters={handleShowConditionalFilters()}
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
