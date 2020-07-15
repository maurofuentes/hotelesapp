import React from 'react';
import DateFilter  from '../components/DateFilter';
import OptionsFilter from '../components/OptionsFilter';
import moment from 'moment';

export default function FilterNav ( { onChangeDateFrom, onChangeDateTo, dateFromFilterValue, dateToFilterValue, options }){

  const dateFromFilter = ()=> {

    // const newDateFormat = dateFilter.dateFrom.toISOString().split('T')[0];

    const newDateFormat = moment(dateFromFilterValue).format('YYYY-MM-DD');        
    
    const dateString = newDateFormat.toString();

    
    return dateString;

  }

  const dateToFilter = ()=> {

    // const newDateFormat = dateFilter.dateFrom.toISOString().split('T')[0];

    const newDateFormat = moment(dateToFilterValue).format('YYYY-MM-DD');        
    
    const dateString = newDateFormat.toString();

    
    return dateString;

  }
    
  return (
      <div className="has-background-info">
      <div className="container columns is-desktop">
        <div className="column">
          <DateFilter
            icon="fas fa-sign-in-alt"
            onChangeDate={ onChangeDateFrom }
            dateFilterValue = {dateFromFilter()}
          />  
        </div>
        <div className="column">
          <DateFilter
            icon="fas fa-sign-out-alt"
            onChangeDate= { onChangeDateTo }
            dateFilterValue = { dateToFilter() }
          />
        </div>
        <div className="column">
          <OptionsFilter
            icon="fas fa-globe"
          />
        </div>
        <div className="column">
          <OptionsFilter
            icon="fas fa-dollar-sign"
          />
        </div>
        <div className="column">
          <OptionsFilter
            icon="fas fa-bed"
            options = {options}
          />
        </div>
      </div>
    </div>
  );
}