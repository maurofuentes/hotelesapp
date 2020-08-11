import React,  { useState, useEffect } from 'react';
import { data } from '../data';
import Hotel from './Hotel';
import Price from './Price';

export default function HotelsList( { hotels }){

    
    //<---------Hoteles--------->

    const hotelsList = hotels.map(
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
            >
               <Price
                    icons = 
                    { Array.from( { length: 4 } )
                        .fill( { name : "fas fa-dollar-sign", style : {margin: '0 .125em'} }, 0, hotel.price )
                        .fill( { name : "fas fa-dollar-sign", style : {margin: '0 .125em', opacity: '.25'}}, hotel.price, 4 )      
                    }
               />
            </Hotel>
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