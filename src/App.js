import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { data } from './data';
import FilterNav from './components/FilterNav';
import moment from 'moment-with-locales-es6'
import HotelsList from './components/HotelsList';
import Hotel from './components/Hotel';

function App() {
  
  const initialValuesFilter = {
    dateFrom: moment(data.today),
    dateTo: moment(new Date( data.today.valueOf() + 86400000 )),
    country: undefined,
    price: undefined,
    rooms: undefined
  } ;
  
  const [ filter , setFilters ] = useState(initialValuesFilter);

  const { hotelsData } = data;

  const [ hotels, setHotels ] = useState( hotelsData );

  

  useEffect(() => {

    let filteredHotels = hotelsData ;

        filteredHotels = hotelsData.filter( hotel => {
            return (
                moment( hotel.availabilityFrom ).isSameOrBefore( filter.dateFrom ) &&
                moment( hotel.availabilityTo ).isSameOrAfter( filter.dateTo )
            ) ; 
        } ) ;

        if ( filter.country && filter.country !== 'Todos los paises' ) {
          filteredHotels = hotelsData.filter( hotel => hotel.country === filter.country ) ;
        }
        
        if ( filter.price && filter.price !== 'Cualquier precio' ) {
            filteredHotels = filteredHotels.filter( hotel => hotel.price === parseInt( filter.price ) ) ;
        }

        if ( filter.rooms &&  filter.rooms !== 'Cualquier tamaño' ) {

            switch ( filter.rooms ) {
                case '10':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms <= 10 ) ;
                    break ;
            
                case '20':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms > 10 && hotel.rooms <= 20 ) ;
                    break ;
            
                case '30':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms > 20 ) ;
                    break ;
                default:
                    break ;
            }
        }

    setHotels( filteredHotels ) ;
  }, [filter])
  
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

  // da formato natural a initialValuesFilter.dateFrom para mostrar en Hero
  const dateFromFormat = ()=>{

    moment.locale('es');

    const fechaInicial = moment( filter.dateFrom ).format('LL');

    return fechaInicial;

  }

  // da formato natural a initialValuesFilter.dateTo para mostrar en Hero
  const dateToFormat = ()=>{

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

  const handleChangeFilter = ( e ) => {    

    moment.locale('es');
    
    const name = e.target.name ;
    
    const value = e.target.type === 'date' ? moment( e.target.value): e.target.value ;

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
        countries = { initialValuesCountry }
        prices = { initialValuesPrice }
        sizes = { initialValuesSize }
      />
      <HotelsList
        hotels = { hotels }
      />
    </div>
  );
}

export default App;
