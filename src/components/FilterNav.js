import React from 'react';
import DateFilter  from '../components/DateFilter';
import OptionsFilter from '../components/OptionsFilter';

export default function FilterNav (props){
    const { onChangeDate } = props;
    return (
        <div className="has-background-info">
        <div className="container columns is-desktop">
          <div className="column">
            <DateFilter
              icon="fas fa-sign-in-alt"
              onChangeDateFrom={onChangeDate}
            />  
          </div>
          <div className="column">
            <DateFilter
              icon="fas fa-sign-out-alt"
            />
          </div>
          <div className="column">
            <OptionsFilter
              icon="fas fa-globe"
            />
          </div>
          <div className="column">
            <OptionsFilter
              icon="fas fa-credit-card"
            />
          </div>
          <div className="column">
            <OptionsFilter
              icon="fas fa-bed"
            />
          </div>
        </div>
      </div>
    );
}