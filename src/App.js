import React from 'react';
import './App.css';
import Hero from './components/Hero';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';
import { data } from './data';
import FilterNav from './components/FilterNav';

function App() {

  const initialValuesFilter = {
    dateFrom: data.today,
    dateTo: new Date( data.today.valueOf() + 86400000 ),
    country: 'argentina',
    price: 15,
    rooms: 3
} ;

  let [ filter , setFilters ] = useState(initialValuesFilter);

  // da formato natural a initialValuesFilter.dateFrom
  const dateFromFormat = ()=>{

    let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return filter.dateFrom.toLocaleDateString('es-ES', options);

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

  //metodo para manejar el DateFilter
  const onChangeDateFrom = (e) => {
    let selectedDate = e.target.value;

    // const dateFrom = filter.dateFrom.getTime();

    // const dateTo = filter.dateTo.getTime();    
    
    const dateFormat = selectedDate.replace(/-/gi,',');
    
    
    const newDateFrom = new Date(dateFormat);
    
    setFilters({
      ...filter,
      dateFrom : newDateFrom
    }); 
    
  }
 
  
  return (
    <div>
      <Hero
        from={dateFromFormat()}
        to={dateToFormat()}
        conditionalfilters={handleShowConditionalFilters()}
      />
      <FilterNav
        onChangeDate={onChangeDateFrom}
      />
    </div>
  );
}

export default App;
