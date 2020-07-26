import React from 'react';
import './App.css';
import Hero from './components/Hero';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useState } from 'react';
import { data } from './data';
import FilterNav from './components/FilterNav';
import Hotel from './components/Hotel';
// import moment from 'moment';
import moment from 'moment-with-locales-es6'
import HotelsList from './components/HotelsList';

function App() {
  moment.locale('es');
  const initialValuesFilter = {
    dateFrom: moment(data.today),
    dateTo: moment(new Date( data.today.valueOf() + 86400000 )),
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

    // const options = {
    //   weekday: 'long',
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric'
    // };
    
    // return filter.dateFrom.toLocaleDateString('es-AR', options);

    moment.locale('es');

    const fechaInicial = moment( filter.dateFrom ).format('LL');


    return fechaInicial;

  }

  // da formato natural a initialValuesFilter.dateTo para mostrar en Hero
  const dateToFormat = ()=>{

    // const options = {
    //   weekday: 'long',
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric'
    // };
    
    // return filter.dateTo.toLocaleDateString('es-AR', options);

    moment.locale('es');

    const fechaFinal = moment( filter.dateTo ).format('LL');


    return fechaFinal;
  }

  //maneja la vista condicional de los filtros country, price y rooms
  const handleShowConditionalFilters = () => {    

    const country = (filter.country !== undefined) ? `en ${filter.country}` : "";

    const price = (filter.price !== undefined) ? ` a ${filter.price} pesos` : "";    

    const rooms = (filter.rooms !== undefined) ? ` de hasta ${filter.rooms} habitaciones` : "";
    
    const countryToShow = (country !== "en Todos los paises") ? country : "";

    const priceToShow = ( price !== " a Cualquier precio pesos") ? price : "";

    const roomsToShow = ( rooms !== " de hasta Cualquier tamaño habitaciones") ? rooms : "";

    return countryToShow + priceToShow + roomsToShow;
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
    console.log(e.target.value);

    moment.locale('es');
    
    const name = e.target.name ;
    
    const value = e.target.type === 'date' ? (new Date( e.target.value)).valueOf() + 86400000 : e.target.value ;
    
    setFilters(
      {
      ...filter,
      [name]: value
      }
    ) ;

  } ;
    
  
  return (
    <div>
      <Hero
        from={ dateFromFormat() }
        to={ dateToFormat() }
        conditionalfilters={ handleShowConditionalFilters() }
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
      <HotelsList/>
    </div>
  );
}

export default App;
