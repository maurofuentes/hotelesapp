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

  const [ filter , setFilters ] = useState(initialValuesFilter);

  

  const dateFromFilter = ()=> {
    
    const newDateFormat = filter.dateFrom.toISOString().split('T')[0];

    return newDateFormat;

  }

  dateFromFilter();
  // da formato natural a initialValuesFilter.dateFrom para mostrar en Hero
  const dateFromFormat = ()=>{

    let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return filter.dateFrom.toLocaleDateString('es-AR', options);

  }

  // da formato natural a initialValuesFilter.dateTo para mostrar en Hero
  const dateToFormat = ()=>{

    let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return filter.dateTo.toLocaleDateString('es-AR', options);

  }

  //maneja la vista condicional de los filtros country, price y rooms
  const handleShowConditionalFilters = () => {    

    let country, price, rooms;    

    (initialValuesFilter.country !== undefined) ? country = `en ${initialValuesFilter.country}` : country = "";

    (initialValuesFilter.price !== undefined) ? price = ` a ${initialValuesFilter.price} pesos` : price = "";    

    (initialValuesFilter.rooms !== undefined) ? rooms = ` de hasta ${initialValuesFilter.rooms} habitaciones` : rooms = "";
    
    return country + price + rooms;
  }

  const onChangeDateHero = (e)=> {
    const newDateFrom = e.target.value;
    setFilters({
      ...filter,
      dateFrom : newDateFrom
    }); 
  }

  //metodo para manejar el DateFilter
  const onChangeDateFrom = (e) => {
    let selectedDate = e.target.value;  
    
    const dateFormat = selectedDate.replace(/-/gi,',');
    
    
    const newDateFrom = new Date(dateFormat);
    
    setFilters({
      ...filter,
      dateFrom : newDateFrom
    }); 
    
  }
 
  const onChangeDateTo = (e) => {
    let selectedDate = e.target.value;  
    
    const dateFormat = selectedDate.replace(/-/gi,',');
    
    
    const newDateTo = new Date(dateFormat);
    
    setFilters({
      ...filter,
      dateTo : newDateTo
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
        onChangeDateFrom={ onChangeDateFrom }
        onChangeDateTo = { onChangeDateTo }
        onChange={dateFromFilter}
      />
    </div>
  );
}

export default App;
