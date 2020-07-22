import React from 'react';
import './App.css';
import Hero from './components/Hero';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';
import { data } from './data';
import FilterNav from './components/FilterNav';
import Hotel from './components/Hotel';

function App() {

  const initialValuesFilter = {
    dateFrom: data.today,
    dateTo: new Date( data.today.valueOf() + 86400000 ),
    country: 'argentina',
    price: 15,
    rooms: 3
  } ;

  const initialValuesCountry = [
    {value : undefined, name : "Todos los paises"},
    {value : "arg", name : "Argentina"},
    {value : "bra", name : "Brasil"},
    {value : "chi", name : "Chile"},
    {value : "uru", name : "Uruguay"}
  ];

  const initialValuesPrice = [
    {value : undefined, name : "Cualquier precio"},
    {value : 1, name : "$"},
    {value : 2, name : "$$"},
    {value : 3, name : "$$$"},
    {value : 4, name : "$$$$"}
  ];

  const initialValuesSize = [
    {value : undefined, name : "Cualquier tamaño"},
    {value : 10, name : "Hotel pequeño"},
    {value : 20, name : "Hotel mediano"},
    {value : 30, name : "Hotel grande"}
  ];

  const [ filter , setFilters ] = useState(initialValuesFilter);

  const [size, setSize] = useState(initialValuesSize);

  const [country, setCountry] = useState(initialValuesCountry);

  const [price, setPrice] = useState(initialValuesPrice);

  
  // da formato natural a initialValuesFilter.dateFrom para mostrar en Hero
  const dateFromFormat = ()=>{

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return filter.dateFrom.toLocaleDateString('es-AR', options);

  }

  // da formato natural a initialValuesFilter.dateTo para mostrar en Hero
  const dateToFormat = ()=>{

    const options = {
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
  
  //<---------Hoteles--------->
  
  const [hotelsData, setHotelsData] = useState(data.hotelsData)

  const hotelsList = hotelsData.map(
    hotel => 
    <article class="column is-one-third">
      <Hotel
        name = {hotel.name}
        photo = {hotel.photo}
        description = {hotel.description}
        from = {hotel.availabilityFrom}
        to = {hotel.availabilityTo}
        city = {hotel.city}
        country = {hotel.country}
        price = {hotel.price}
        rooms = {hotel.rooms}
      />            
    </article>
  )

  return (
    <div>
      <Hero
        from={dateFromFormat()}
        to={dateToFormat()}
        conditionalfilters={handleShowConditionalFilters()}
      />
      <FilterNav   
        dateFromFilterValue = {filter.dateFrom}
        dateToFilterValue = {filter.dateTo}    
        onChangeDateFrom={ onChangeDateFrom }
        onChangeDateTo = { onChangeDateTo }
        countries = { country }
        prices = { price }
        sizes = {size}
      />

      <section className="section" style={ {marginTop: '1em'} }>

      </section>
      <div class="container">
        <div class="columns is-multiline">
          {hotelsList}
        </div>
        
      </div>
      

    </div>
  );
}

export default App;
