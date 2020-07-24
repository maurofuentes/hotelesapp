import React from 'react';
import './App.css';
import Hero from './components/Hero';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';
import { data } from './data';
import FilterNav from './components/FilterNav';
import Hotel from './components/Hotel';
import moment from 'moment';

function App() {

  const initialValuesFilter = {
    dateFrom: data.today,
    dateTo: new Date( data.today.valueOf() + 86400000 ),
    country: undefined,
    price: undefined,
    rooms: undefined
  } ;

  const initialValuesCountry = [
    {value : undefined, name : "Todos los paises"},
    {value : "Argentina", name : "Argentina"},
    {value : "Brasil", name : "Brasil"},
    {value : "Chile", name : "Chile"},
    {value : "Uruguay", name : "Uruguay"}
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

  // const [size, setSize] = useState(initialValuesFilter);

  // const [country, setCountry] = useState(initialValuesFilter);

  // const [price, setPrice] = useState(initialValuesFilter);

  
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

    const country = (filter.country !== undefined) ? `en ${filter.country}` : "";

    const price = (filter.price !== undefined) ? ` a ${filter.price} pesos` : "";    

    const rooms = (filter.rooms !== undefined) ? ` de hasta ${filter.rooms} habitaciones` : "";
    
    return country + price + rooms;
  }

  // const onChangeDateHero = (e)=> {
  //   const newDateFrom = e.target.value;
  //   setFilters({
  //     ...filter,
  //     dateFrom : newDateFrom
  //   }); 
  // }

  //metodo para manejar el DateFilter
  // const onChangeDateFrom = (e) => {
  //   let selectedDate = e.target.value;  
    
  //   const dateFormat = selectedDate.replace(/-/gi,',');
    
    
  //   const newDateFrom = new Date(dateFormat);
    
  //   setFilters({
  //     ...filter,
  //     dateFrom : newDateFrom
  //   }); 
    
  // }
 
  // const onChangeDateTo = (e) => {
  //   let selectedDate = e.target.value;  
    
  //   const dateFormat = selectedDate.replace(/-/gi,',');
    
    
  //   const newDateTo = new Date(dateFormat);
    
  //   setFilters({
  //     ...filter,
  //     dateTo : newDateTo
  //   }); 
    
  // }

  const handleChangeFilter = ( e ) => {
    console.log(e.target);
    
    const name = e.target.name ;
    
    const value = e.target.type === 'date' ? new Date( e.target.value) : e.target.value ;
    
    setFilters(
      {
      ...filter,
      [name]: value
      }
    ) ;

  } ;
    
  
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
        from={ dateFromFormat() }
        to={ dateToFormat() }
        conditionalfilters={ handleShowConditionalFilters() }
        countries = { filter.country }
        prices = { filter.price }
        sizes = { filter.rooms }
      />
      <FilterNav   
        dateFromFilterValue = { filter.dateFrom }
        dateToFilterValue = { filter.dateTo } 
        handleChangeFilter = { handleChangeFilter }   
        // onChangeDateFrom={ onChangeDateFrom }
        // onChangeDateTo = { onChangeDateTo }
        countries = { initialValuesCountry }
        prices = { initialValuesPrice }
        sizes = { initialValuesSize }
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
