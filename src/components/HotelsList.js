import React from 'react';
import { useState } from 'react';
import { data } from '../data';
import Hotel from './Hotel';

export default function HotelsList(){

    //<---------Hoteles--------->
  
const [hotelsData, setHotelsData] = useState(data.hotelsData);



    const hotelsList = hotelsData.map(
        hotel => 
        <article key={hotel.slug} class="column is-one-third">
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
    );

    return(

        <section className="section" style={ {marginTop: '1em'} }>

            <div class="container">
                
                <div class="columns is-multiline">
                    {hotelsList}
                </div>
            
            </div>

        </section>


    );

}