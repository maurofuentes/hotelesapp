import React from 'react';
import DateFilter  from '../components/DateFilter';
import OptionsFilter from '../components/OptionsFilter';
import moment from 'moment';

export default function FilterNav ( { handleChangeFilter, onChangeDateFrom, onChangeDateTo, dateFromFilterValue, dateToFilterValue, sizes, countries, prices }){

  const dateFromFilter = ()=> {

    // const newDateFormat = dateFilter.dateFrom.toISOString().split('T')[0];

    const newDateFormat = moment(dateFromFilterValue).format('YYYY-MM-DD');        
    
    // const dateString = newDateFormat.toString();

    
    return newDateFormat;

  }

  const dateToFilter = ()=> {

    // const newDateFormat = dateFilter.dateFrom.toISOString().split('T')[0];

    const newDateFormat = moment(dateToFilterValue).format('YYYY-MM-DD');        
    
    // const dateString = newDateFormat.toString();

    
    return newDateFormat;

  }

  const hotelCountry = countries.map( country => <option value={ country.value }>{country.name}</option> );

  const hotelPrice = prices.map( price => <option value={ price.value }>{price.name}</option> );
  
  const hotelSize = sizes.map( size => <option value={ size.value }>{size.name}</option> );
    
  return (
      <div className="has-background-info">
        <div className="container columns is-desktop">
          <div className="column">
            <DateFilter
              icon="fas fa-sign-in-alt"
              name = "dateFrom"
              handleChangeFilter={ handleChangeFilter }
              dateFilterValue = {dateFromFilter()}
            />  
          </div>
          <div className="column">
            <DateFilter
              icon="fas fa-sign-out-alt"
              name = "dateTo"
              handleChangeFilter= { handleChangeFilter }
              dateFilterValue = { dateToFilter() }
            />
          </div>
          <div className="column">
            <OptionsFilter
              icon="fas fa-globe"
              name = "country"
              options = {hotelCountry}
              handleChangeFilter= { handleChangeFilter }
            />
          </div>
          <div className = "column">
            <OptionsFilter
              icon = "fas fa-dollar-sign"
              name = "price"
              options = {hotelPrice}
              handleChangeFilter= { handleChangeFilter }
            />
          </div>
          <div className="column">
            <OptionsFilter
              icon = "fas fa-bed"
              name = "rooms"
              options = {hotelSize}
              handleChangeFilter= { handleChangeFilter }
            />
          </div>
      </div>
    </div>
  );
}